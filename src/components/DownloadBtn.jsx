import jsPDF from "jspdf";
import html2canvas from "html2canvas";

function DownloadBtn({ formData }) {
  const downloadPDF = async () => {
    const element = document.getElementById("resume-preview");
    const canvas = await html2canvas(element, { scale: 2 });
    const imgData = canvas.toDataURL("image/png");
    const pdf = new jsPDF("p", "mm", "a4");
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (canvas.height * pdfWidth) / canvas.width;
    pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
    pdf.save(`${formData.name || "resume"}_resume.pdf`);
  };

  return (
    <button
      onClick={downloadPDF}
      className="w-full bg-gradient-to-r from-violet-600 to-cyan-600 text-white py-4 rounded-2xl font-bold text-lg hover:from-violet-700 hover:to-cyan-700 transition shadow-lg shadow-violet-900/50 hover:scale-105 transform duration-200"
    >
      ⬇️ Download PDF Resume
    </button>
  );
}

export default DownloadBtn;