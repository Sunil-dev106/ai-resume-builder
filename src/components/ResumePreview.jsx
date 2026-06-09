function ResumePreview({ formData }) {
  return (
    <div
      id="resume-preview"
      className="bg-gray-900 border border-gray-700 rounded-2xl overflow-hidden shadow-2xl"
    >
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-violet-600 to-cyan-600 px-8 py-6">
        <h1 className="text-3xl font-extrabold text-white">
          {formData.name || "Your Name"}
        </h1>
        <div className="flex flex-wrap gap-4 mt-2 text-sm text-white/80">
          {formData.email && <span>📧 {formData.email}</span>}
          {formData.phone && <span>📞 {formData.phone}</span>}
          {formData.location && <span>📍 {formData.location}</span>}
        </div>
      </div>

      {/* Body */}
      <div className="px-8 py-6 space-y-5">
        {/* Summary */}
        {formData.summary && (
          <div>
            <h2 className="text-xs font-bold text-violet-400 uppercase tracking-widest mb-2 border-b border-gray-700 pb-1">
              Professional Summary
            </h2>
            <p className="text-sm text-gray-300 leading-relaxed">
              {formData.summary}
            </p>
          </div>
        )}

        {/* Skills */}
        {formData.skills && (
          <div>
            <h2 className="text-xs font-bold text-violet-400 uppercase tracking-widest mb-2 border-b border-gray-700 pb-1">
              Skills
            </h2>
            <div className="flex flex-wrap gap-2">
              {formData.skills.split(",").map((skill, i) => (
                <span
                  key={i}
                  className="bg-violet-900/50 text-violet-300 border border-violet-700 px-3 py-1 rounded-full text-xs font-semibold"
                >
                  {skill.trim()}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Experience */}
        {formData.experience && (
          <div>
            <h2 className="text-xs font-bold text-violet-400 uppercase tracking-widest mb-2 border-b border-gray-700 pb-1">
              Experience
            </h2>
            <p className="text-sm text-gray-300 whitespace-pre-line leading-relaxed">
              {formData.experience}
            </p>
          </div>
        )}

        {/* Projects */}
        {formData.projects && (
          <div>
            <h2 className="text-xs font-bold text-violet-400 uppercase tracking-widest mb-2 border-b border-gray-700 pb-1">
              Projects
            </h2>
            <p className="text-sm text-gray-300 whitespace-pre-line leading-relaxed">
              {formData.projects}
            </p>
          </div>
        )}

        {/* Education */}
        {formData.education && (
          <div>
            <h2 className="text-xs font-bold text-violet-400 uppercase tracking-widest mb-2 border-b border-gray-700 pb-1">
              Education
            </h2>
            <p className="text-sm text-gray-300">{formData.education}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default ResumePreview;