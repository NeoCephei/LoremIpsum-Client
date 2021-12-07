/* eslint-disable @typescript-eslint/no-unused-vars */
import { connect } from 'react-redux';
import { PDFDownloadLink } from '@react-pdf/renderer';
import PDFRender from '../../PDF-Render/PDF-Render';
import { useTypedSelector } from '../../../../utils/useTypeSelector';

function BuilderSettings({postCV,resetPdf,userDetail, user} :any) {
  const pdfItems = useTypedSelector(state => state.pdf);

  const {personal_details} = userDetail

  const saveCV = () => {
    const { userId } = user;
    const dbPDF = pdfItems.map(pdfCat => {
      const { items, ...pdf } = pdfCat;
      return { ...pdf };
    });
    const data = {
      userId,
      saved_cv: JSON.stringify(pdfItems)
    }
    console.log('Cv posted')
    postCV(data)
    resetPdf()
  }
  return (
    <div className='h-full w-full flex flex-col align-center p-2'>
      <PDFDownloadLink
        document={<PDFRender pdf={pdfItems} personal_details={personal_details}/>}
        fileName={`CV-${new Date().toISOString()}.pdf`}
      >
        {({ blob, url, loading, error }) => (
          <div className='flex justify-center bg-primary text-light rounded-lg p-3 mx-6 mb-5'>
            {loading ? 'Loading document...' : 'Download'}
          </div>
        )}
      </PDFDownloadLink>
      <div
        className='flex justify-center bg-primary text-light rounded-lg p-3 mx-6 mb-5 cursor-pointer'
        onClick={saveCV}
      >
        Save CV
      </div>
    </div>
  );
}

//TODO - state & dispatch types
const mapStateToProps = (state: any) => {
  return {
    pdfStatus: state.pdf,
    user: state.login,
    userDetail: state.personal_details,
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    postCV: (data: any) =>
      dispatch({
        type: 'FETCH_DATA',
        endpoint: '/savedCV',
        method: 'POST',
        id: '',
        dispatch: 'POST_CV',
        payload: data,
      }),
    resetPdf: () =>
      dispatch({
        type: 'RESET_PDF',
      }),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BuilderSettings);