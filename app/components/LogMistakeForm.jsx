// app/components/LogMistakeForm.jsx
'use client';

import { useState } from 'react';

export default function LogMistakeForm({ userId }) {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    solution: '',
    severity: 'medium',
    tags: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const tagArray = formData.tags.split(',').map(tag => tag.trim().toLowerCase()).filter(Boolean);

    const response = await fetch('/api/entries', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...formData, tags: tagArray, userId })
    });

    if (response.ok) {
      setSubmitted(true);
      setFormData({ title: '', description: '', solution: '', severity: 'medium', tags: '' });
      setTimeout(() => setSubmitted(false), 3000);
    }
    setIsSubmitting(false);
  };

  return (
    <div className="rounded-2xl bg-[#1d1d1f] border border-white/[0.06] overflow-hidden">
      {/* Card header */}
      <div className="px-7 pt-7 pb-0">
        <div className="flex items-center gap-3 mb-1.5">
          <img
            src="https://cdn-icons-png.flaticon.com/512/1827/1827422.png"
            alt="New Entry"
            className="w-5 h-5 opacity-60 invert"
          />
          <h2 className="text-[20px] font-semibold text-[#f5f5f7] tracking-tight">New Entry</h2>
        </div>
        <p className="text-[13px] text-[#86868b] pl-8">
          Document what went wrong so you never repeat it.
        </p>
      </div>

      {/* Divider */}
      <div className="mx-7 mt-5 mb-0 h-px bg-white/[0.06]"></div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="px-7 pt-5 pb-7 space-y-5">
        {/* Title */}
        <div>
          <label className="block text-[13px] font-medium text-[#86868b] mb-2">
            What happened?
          </label>
          <input
            type="text"
            placeholder="e.g., Forgot to handle null in API response"
            required
            className="w-full bg-[#000000] border border-white/[0.08] text-[15px] text-[#f5f5f7] placeholder-[#3a3a3c] rounded-xl px-4 py-3 focus:border-[#2997ff]/50 focus:ring-1 focus:ring-[#2997ff]/20 transition-all duration-200"
            value={formData.title}
            onChange={(e) => setFormData({...formData, title: e.target.value})}
          />
        </div>

        {/* Description */}
        <div>
          <label className="block text-[13px] font-medium text-[#86868b] mb-2">
            Describe the context
          </label>
          <textarea
            placeholder="What were you trying to do? What was the expected vs actual behavior?"
            required
            className="w-full bg-[#000000] border border-white/[0.08] text-[15px] text-[#f5f5f7] placeholder-[#3a3a3c] rounded-xl px-4 py-3 h-28 focus:border-[#2997ff]/50 focus:ring-1 focus:ring-[#2997ff]/20 transition-all duration-200 resize-none"
            value={formData.description}
            onChange={(e) => setFormData({...formData, description: e.target.value})}
          />
        </div>

        {/* Solution */}
        <div>
          <label className="block text-[13px] font-medium text-[#86868b] mb-2">
            How you fixed it
            <span className="text-[#3a3a3c] font-normal ml-1">— optional</span>
          </label>
          <textarea
            placeholder="The solution or workaround you found"
            className="w-full bg-[#000000] border border-white/[0.08] text-[15px] text-[#f5f5f7] placeholder-[#3a3a3c] rounded-xl px-4 py-3 h-20 focus:border-[#2997ff]/50 focus:ring-1 focus:ring-[#2997ff]/20 transition-all duration-200 resize-none"
            value={formData.solution}
            onChange={(e) => setFormData({...formData, solution: e.target.value})}
          />
        </div>

        {/* Tags */}
        <div>
          <label className="block text-[13px] font-medium text-[#86868b] mb-2">
            Tags
          </label>
          <input
            type="text"
            placeholder="react, api, null-check (comma-separated)"
            className="w-full bg-[#000000] border border-white/[0.08] text-[15px] text-[#f5f5f7] placeholder-[#3a3a3c] rounded-xl px-4 py-3 focus:border-[#2997ff]/50 focus:ring-1 focus:ring-[#2997ff]/20 transition-all duration-200"
            value={formData.tags}
            onChange={(e) => setFormData({...formData, tags: e.target.value})}
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className={`
            w-full text-[15px] font-medium py-3.5 rounded-xl transition-all duration-300 mt-2
            ${submitted
              ? 'bg-[#30d158] text-white'
              : 'bg-[#2997ff] hover:bg-[#0077ed] text-white active:scale-[0.98]'
            }
            ${isSubmitting ? 'opacity-60 cursor-not-allowed' : ''}
          `}
        >
          {submitted ? (
            <span className="flex items-center justify-center gap-2">
              <img src="https://cdn-icons-png.flaticon.com/512/190/190411.png" alt="Done" className="w-4 h-4 invert" />
              Saved Successfully
            </span>
          ) : isSubmitting ? (
            'Saving...'
          ) : (
            'Save Entry'
          )}
        </button>
      </form>
    </div>
  );
}