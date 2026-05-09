import React from 'react';
import { toast } from 'react-toastify';

export default function ShareButton({ jobId, jobSlug, className = "" }) {
  const handleShare = async () => {
    const shareUrl = `${window.location.origin}/jobs/${jobSlug || jobId}`;
    
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'AH Career Job Opening',
          text: 'Check out this job opportunity at AH Career Academy!',
          url: shareUrl,
        });
      } catch (err) {
        if (err.name !== 'AbortError') {
          toast.error('Error sharing job listing.');
        }
      }
    } else {
      // Fallback: Copy to clipboard
      try {
        await navigator.clipboard.writeText(shareUrl);
        toast.success('Job link copied to clipboard!');
      } catch (err) {
        toast.error('Failed to copy link.');
      }
    }
  };

  return (
    <button
      onClick={handleShare}
      className={`bg-white border border-gray-200 text-gray-700 font-semibold py-3 px-6 rounded-xl hover:bg-gray-50 transition-all flex items-center justify-center gap-2 active:scale-95 ${className}`}
    >
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6a3 3 0 100-2.684m0 2.684l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
      </svg>
      Share Job
    </button>
  );
}
