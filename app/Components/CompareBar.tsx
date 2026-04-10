"use client";

interface SelectedProduct {
  id: number;
  title: string;
}

interface CompareBarProps {
  selectedProducts: SelectedProduct[];
  onClear: () => void;
  onRemove: (id: number) => void;
  onOpenCompare: () => void;
  onClose?: () => void;
  isCompareOpen?: boolean;
}

export default function CompareBar({
  selectedProducts,
  onClear,
  onRemove,
  onOpenCompare,
  onClose,
  isCompareOpen = false,
}: CompareBarProps) {
  const count = selectedProducts.length;
  const remaining = 3 - count;

  if (count === 0) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-[#e5e7eb] shadow-[0px_-10px_15px_0px_rgba(0,0,0,0.1),0px_-4px_6px_0px_rgba(0,0,0,0.1)]">
      <div className="max-w-[1298px] px-5 mx-auto h-[81px] flex items-center justify-between gap-4">

        {/* ── Left: icon + text + badges ── */}
        <div className="flex items-center gap-4">
          {/* Icon */}
          <div className="size-6 flex items-center justify-center shrink-0">
            <img src="/images/product-icon.svg" alt="" />
          </div>

          {/* Text */}
          <div className="flex flex-col">
            <p className="font-Inter font-bold text-base leading-6 text-black-1000">
              {count} Product{count > 1 ? "s" : ""} Selected
            </p>
            {!isCompareOpen && remaining > 0 && (
              <p className="font-Inter font-normal text-base leading-6 text-gray-1600">
                Select {remaining} more to compare (max 3)
              </p>
            )}
            {isCompareOpen && (
              <p className="font-Inter font-normal text-base leading-6 text-gray-1600">
                Comparing {count} products
              </p>
            )}
          </div>

        
        </div>
  {/* Selected product badges */}
          <div className="flex items-center gap-4">
            {selectedProducts.map((p) => (
              <span
                key={p.id}
                className="flex items-center gap-1.5 bg-green-1300 border border-green-1400 text-black-1200 text-sm font-medium px-1.5 py-1 rounded-[6px]"
              >
                {/* check icon */}
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M2.5 7.5L5.5 10.5L11.5 3.5" stroke="#006045" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                {p.title}
                {/* separator */}
                <span className="w-px h-3 bg-green-1400 mx-0.5" />
                <button
                  type="button"
                  onClick={() => onRemove(p.id)}
                  className="hover:opacity-70 transition-opacity"
                >
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M10 4L4 10M4 4L10 10" stroke="#006045" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                </button>
              </span>
            ))}
          </div>
        {/* ── Right: buttons ── */}
        <div className="flex items-center gap-4 shrink-0">
          {/* Clear all */}
          <button
            type="button"
            onClick={onClear}
            className="flex items-center justify-center px-4 py-2.5 rounded-xl border border-red-1000 text-sm font-medium text-red-1000 hover:bg-red-50 transition-colors"
          >
            Clear all
          </button>

          {isCompareOpen ? (
            /* ── Close button ── */
            <button
              type="button"
              onClick={onClose ?? onClear}
              className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-white border border-[#e5e7eb] text-sm font-medium text-[#4a5565] hover:bg-gray-50 transition-colors"
            >
              Close
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M12 4L4 12M4 4L12 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </button>
          ) : count >= 2 ? (
            /* ── Compare Now — active gradient ── */
            <button
              type="button"
              onClick={onOpenCompare}
              className="flex items-center gap-1.5 px-5 py-2.5 rounded-xl text-sm font-medium text-white transition-opacity hover:opacity-90"
              style={{ background: "linear-gradient(to bottom, #222121, #615a45)" }}
            >
              Compare Now
            </button>
          ) : (
            /* ── Add one more — muted, non-interactive ── */
            <span className="px-4 py-2.5 text-sm font-medium bg-gray-1300 rounded-xl  text-gray-1600 border border-gray-1100 cursor-default select-none">
              Add one more to compare
            </span>
          )}
        </div>
      </div>
    </div>
  );
}