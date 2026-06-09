// const GEMINI_API_KEY = "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";

// const GROQ_API_KEY = "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";
const GROQ_API_KEY = import.meta.env.VITE_GROQ_API_KEY;
// echo VITE_GROQ_API_KEY=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 > .env

function Form({ formData, setFormData, aiLoading, setAiLoading }) {
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const generateSummary = async () => {
    if (!formData.name || !formData.skills) {
      alert("full feel your details");
      return;
    }
    setAiLoading(true);
    try {
      const res = await fetch(
        "https://api.groq.com/openai/v1/chat/completions",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${GROQ_API_KEY}`,
          },
          body: JSON.stringify({
            model: "llama-3.3-70b-versatile",
            messages: [
              {
                role: "user",
                content: `Write a professional resume summary for a frontend developer named ${formData.name} with these skills: ${formData.skills} and this experience: ${formData.experience}. Keep it 3-4 lines only.`,
              },
            ],
          }),
        }
      );
      const data = await res.json();
      const summary = data.choices[0].message.content;
      setFormData({ ...formData, summary });
    } catch (err) {
      alert("API Error! " + err.message);
    }
    setAiLoading(false);
  };

  const fields = [
    { name: "name", label: "Full Name", placeholder: "your name", rows: 1 },
    { name: "email", label: "Email", placeholder: "email@gmail.com", rows: 1 },
    { name: "phone", label: "Phone", placeholder: "+91 9999999999", rows: 1 },
    { name: "location", label: "Location", placeholder: "Indore, India", rows: 1 },
    { name: "skills", label: "Skills ", placeholder: "React, JavaScript, HTML, CSS, Git", rows: 2 },
    { name: "experience", label: "Experience", placeholder: "Frontend Developer at XYZ (2023-2024)", rows: 4 },
    { name: "education", label: "Education", placeholder: "B.Tech Computer Science", rows: 2 },
    { name: "projects", label: "Projects", placeholder: "AI Resume Builder - React + Groq AI", rows: 4 },
  ];

  return (
    <div className="bg-gray-900 border border-gray-700 rounded-2xl shadow-2xl p-6">
      <h2 className="text-xl font-bold mb-5 text-white flex items-center gap-2">
        📝 <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">Your Details</span>
      </h2>

      {fields.map((field) => (
        <div key={field.name} className="mb-4">
          <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wide mb-1">
            {field.label}
          </label>
          <textarea
            name={field.name}
            value={formData[field.name]}
            onChange={handleChange}
            placeholder={field.placeholder}
            rows={field.rows}
            className="w-full bg-gray-800 border border-gray-600 rounded-xl p-3 text-sm text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent resize-none transition"
          />
        </div>
      ))}

      <button
        onClick={generateSummary}
        disabled={aiLoading}
        className="w-full bg-gradient-to-r from-violet-600 to-cyan-600 text-white py-3 rounded-xl font-bold text-sm hover:from-violet-700 hover:to-cyan-700 transition shadow-lg shadow-violet-900/50 hover:scale-105 transform duration-200 mt-2"
      >
        {aiLoading ? (
          <span className="flex items-center justify-center gap-2">
            <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
            </svg>
            AI is generating summary...
          </span>
        ) : (
          "✨ AI se Summary Banao"
        )}
      </button>

      {formData.summary && (
        <div className="mt-4 p-4 bg-violet-900/30 rounded-xl border border-violet-700/50">
          <p className="text-xs font-bold text-violet-400 uppercase tracking-wide mb-1">
            ✨ AI Generated Summary
          </p>
          <p className="text-sm text-gray-300 leading-relaxed">{formData.summary}</p>
        </div>
      )}
    </div>
  );
}

export default Form;