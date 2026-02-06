'use client';

/**
 * MythCard Component
 * 
 * Educational Purpose: Displays a single nutrition misconception in a card format
 * that allows users to expand and learn about why the myth persists, what actually
 * happens in practice, and what evidence-based understanding should replace it.
 * 
 * Design Philosophy: Non-judgmental, educational approach that helps readers
 * understand misconceptions without shaming or alarmist language.
 */

import type { Myth } from '../data/myths';

interface MythCardProps {
  myth: Myth;
  isExpanded: boolean;
  onToggle: () => void;
}

export default function MythCard({ myth, isExpanded, onToggle }: MythCardProps) {
  return (
    <article
      className="bg-white rounded-xl shadow-sm border-2 border-gray-200 overflow-hidden transition-all hover:shadow-md hover:border-gray-300"
      aria-labelledby={`myth-heading-${myth.id}`}
    >
      {/* Card Header - Clickable to expand/collapse */}
      <button
        onClick={onToggle}
        className="w-full text-left p-5 sm:p-6 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-inset"
        aria-expanded={isExpanded}
        aria-controls={`myth-content-${myth.id}`}
        id={`myth-heading-${myth.id}`}
      >
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1 min-w-0">
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 mb-3">
              {/* Myth Badge - Visual indicator that this is a misconception */}
              <span className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-bold bg-red-100 text-red-800 border border-red-200 self-start">
                HIỂU LẦM
              </span>
              {/* Myth Statement - The common misconception */}
              <h2 className="text-base sm:text-lg font-bold text-gray-900 leading-tight">
                {myth.myth}
              </h2>
            </div>
          </div>
          {/* Expand/Collapse Icon */}
          <div className="flex-shrink-0" aria-hidden="true">
            <svg
              className={`w-5 h-5 sm:w-6 sm:h-6 text-gray-400 transition-transform ${
                isExpanded ? 'transform rotate-180' : ''
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
        </div>
      </button>

      {/* Expanded Content - Educational information about the myth */}
      {isExpanded && (
        <div
          id={`myth-content-${myth.id}`}
          className="px-5 sm:px-6 pb-5 sm:pb-6 border-t-2 border-gray-200 pt-5 sm:pt-6 space-y-4 sm:space-y-5"
        >
          {/* Why It Sounds Right - Helps readers understand the logical appeal */}
          <section className="bg-amber-50 border-l-4 border-amber-400 rounded-r-lg p-4 sm:p-5">
            <h3 className="text-sm font-bold text-gray-900 mb-2.5 uppercase tracking-wide flex items-center gap-2">
              <span className="text-amber-600" aria-hidden="true">•</span>
              Tại Sao Nghe Có Vẻ Đúng
            </h3>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
              {myth.whyItSoundsRight}
            </p>
          </section>

          {/* What Actually Happens - Clinical reality explained simply */}
          <section className="bg-gray-50 border-l-4 border-gray-400 rounded-r-lg p-4 sm:p-5">
            <h3 className="text-sm font-bold text-gray-900 mb-2.5 uppercase tracking-wide flex items-center gap-2">
              <span className="text-gray-600" aria-hidden="true">•</span>
              Điều Gì Thực Sự Xảy Ra Trong Thực Hành
            </h3>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
              {myth.whatActuallyHappens}
            </p>
          </section>

          {/* What to Understand Instead - Evidence-based replacement (highlighted as Reality) */}
          <section className="bg-green-50 border-l-4 border-green-500 rounded-r-lg p-4 sm:p-5 shadow-sm">
            <div className="flex items-center gap-2 mb-2.5">
              {/* Reality Badge - Visual indicator of evidence-based understanding */}
              <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-bold bg-green-600 text-white">
                THỰC TẾ
              </span>
              <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wide">
                Điều Cần Hiểu Thay Vào Đó
              </h3>
            </div>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed font-medium">
              {myth.whatToUnderstandInstead}
            </p>
          </section>

          {/* Clinical Insight - Optional additional context for clinical practice */}
          {myth.clinicalInsight && (
            <section className="bg-blue-50 border-l-4 border-blue-400 rounded-r-lg p-4 sm:p-5">
              <h3 className="text-sm font-bold text-gray-900 mb-2.5 uppercase tracking-wide flex items-center gap-2">
                <span className="text-blue-600" aria-hidden="true">•</span>
                Hiểu Biết Lâm Sàng
              </h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                {myth.clinicalInsight}
              </p>
            </section>
          )}
        </div>
      )}
    </article>
  );
}
