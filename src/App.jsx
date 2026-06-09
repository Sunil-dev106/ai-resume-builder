import { useState } from "react";
import Form from "./components/Form";
import ResumePreview from "./components/ResumePreview";
import DownloadBtn from "./components/DownloadBtn";

function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
    summary: "",
    skills: "",
    experience: "",
    education: "",
    projects: "",
  });

  const [aiLoading, setAiLoading] = useState(false);

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      {/* Header */}
      <div className="bg-gray-900 border-b border-gray-800 py-5 px-8 shadow-xl">
        <h1 className="text-4xl font-extrabold text-center bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
          ✨ AI Resume Builder
        </h1>
        <p className="text-center text-gray-400 mt-1 text-sm">
          Fill details → AI generates summary → Download PDF
        </p>
      </div>

      {/* Main */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
        <Form
          formData={formData}
          setFormData={setFormData}
          aiLoading={aiLoading}
          setAiLoading={setAiLoading}
        />
        <div className="flex flex-col gap-4">
          <ResumePreview formData={formData} />
          <DownloadBtn formData={formData} />
        </div>
      </div>
    </div>
  );
}

export default App;