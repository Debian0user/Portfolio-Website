import { useRef } from "react";

// ---------- Utilities ----------
function getCurrentSectionIndex(sections) {
  let index = 0;
  let minDiff = Infinity;

  sections.forEach((section, i) => {
    const rect = section.getBoundingClientRect();
    const diff = Math.abs(rect.top - window.innerHeight / 2);
    if (diff < minDiff) {
      minDiff = diff;
      index = i;
    }
  });

  return index;
}

function scrollToSection(sections, index) {
  if (sections[index]) {
    sections[index].scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  }
}

// ---------- Component ----------
export default function FloatingWidget() {
  const sectionsRef = useRef([]);

  return (
    <div className="relative w-screen h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth">
      {/* Sections */}
      {[...Array(5)].map((_, i) => (
        <div
          key={i}
          ref={(el) => (sectionsRef.current[i] = el)}
          className="h-screen flex items-center justify-center text-4xl font-bold bg-gray-800 text-white snap-start"
        >
          Section {i + 1}
        </div>
      ))}

      {/* Floating Widget */}
      <div className="fixed top-1/2 right-6 -translate-y-1/2 flex flex-col items-center gap-3">
        {/* Up */}
        <button
          className="p-3 rounded-full bg-blue-600 text-white shadow-lg hover:bg-blue-700"
          onClick={() => {
            const current = getCurrentSectionIndex(sectionsRef.current);
            if (current > 0) scrollToSection(sectionsRef.current, current - 1);
          }}
        >
          ⬆
        </button>

        {/* Center */}
        <button
          className="p-3 rounded-lg bg-green-600 text-white shadow-lg hover:bg-green-700"
          onClick={() => {
            const current = getCurrentSectionIndex(sectionsRef.current);
            scrollToSection(sectionsRef.current, current);
          }}
        >
          ⬜
        </button>

        {/* Down */}
        <button
          className="p-3 rounded-full bg-red-600 text-white shadow-lg hover:bg-red-700"
          onClick={() => {
            const current = getCurrentSectionIndex(sectionsRef.current);
            if (current < sectionsRef.current.length - 1)
              scrollToSection(sectionsRef.current, current + 1);
          }}
        >
          ⬇
        </button>
      </div>
    </div>
  );
}
