import { usePDF } from '@react-pdf/renderer';
import { PDFRender } from '../../Modal/ItemEditor/PDF-Render/PDF-Render';

export default function Preview() {
  //TODO checkout this tomorrow with help request
  // const [instance, updateInstance] = usePDF({ document: <PDFRender /> });
  return (
    <div className="h-full w-full flex flex-col justify-center items-center">
      <div className="h-4/5 w-3/4 bg-light flex justify-center items-center p-2">
        <PDFRender />
      </div>
    </div>
  );
}
