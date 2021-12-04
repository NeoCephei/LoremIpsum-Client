//@ts-nocheck => categories issue with TS
import { useTypedSelector } from '../../../../utils/useTypeSelector';
import Category from './Category/Category';

export default function Categories() {
  // Array of objects I let it here for future implementation
  const {
    pdf,
    languages: { languages },
    certificates: { certificates },
    skills: { skills },
    education: { education },
    experience: { experience },
  } = useTypedSelector(state => state);

  function renderCategories() {
    return pdf.map(category => {
      switch (category.name) {
        case 'Certificates':
          category.items = [...certificates];
          break;

        case 'Education':
          category.items = [...education];
          break;

        case 'Languages':
          category.items = [...languages];
          break;

        case 'Skills':
          category.items = [...skills];
          break;

        case 'Work Experience':
          category.items = [...experience];
          break;

        default:
          break;
      }
      return (
        <Category
          key={category.name}
          name={category.name}
          items={category.items}
        />
      );
    });
  }

  return (
    <div className="flex flex-col items-center gap-10 p-5 max-h-screen overflow-y-auto min-h-0">
      {renderCategories()}
    </div>
  );
}

// TODO - state & dispatch types
// const mapStateToProps = (state: RootState) => {
//   return {
//     pdfStatus: state.pdf,
//     lang: state.languages,
//     cert: state.certificates,
//     skill: state.skills,
//     edu: state.education,
//     exp: state.experience,
//   };
// };

// // const mapDispatchToProps = (dispatch: any) => {
// //   return {};
// // };

// export default connect(mapStateToProps, null)(Categories);
