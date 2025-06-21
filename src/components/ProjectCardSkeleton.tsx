import React from 'react';

const shimmer =
  'animate-[shimmer_1.2s_linear_infinite] bg-gradient-to-r from-gray-300 via-gray-200 to-gray-300 bg-[length:400px_100%]';

const ProjectCardSkeleton: React.FC = () => (
  <div className="relative aspect-[3/2] w-full max-w-sm bg-[#181f2a] rounded-xl overflow-hidden shadow-lg border border-[#232b3b] flex flex-col p-4 mx-auto">
    {/* Image skeleton */}
    <div className={`w-full h-24 rounded-lg mb-3 bg-gray-300 relative overflow-hidden ${shimmer}`}></div>
    {/* Title skeleton */}
    <div className={`h-4 w-2/3 rounded bg-gray-300 mb-2 relative overflow-hidden ${shimmer}`}></div>
    {/* Description skeleton */}
    <div className={`h-3 w-full rounded bg-gray-300 mb-1 relative overflow-hidden ${shimmer}`}></div>
    <div className={`h-3 w-5/6 rounded bg-gray-300 mb-1 relative overflow-hidden ${shimmer}`}></div>
    <div className={`h-3 w-1/2 rounded bg-gray-300 mb-4 relative overflow-hidden ${shimmer}`}></div>
    {/* Buttons skeleton */}
    <div className="flex gap-2 mt-auto">
      <div className={`h-7 w-20 rounded bg-gray-300 relative overflow-hidden ${shimmer}`}></div>
      <div className={`h-7 w-20 rounded bg-gray-300 relative overflow-hidden ${shimmer}`}></div>
    </div>
    <style>{`
      @keyframes shimmer {
        0% { background-position: -400px 0; }
        100% { background-position: 400px 0; }
      }
    `}</style>
  </div>
);

export default ProjectCardSkeleton;
