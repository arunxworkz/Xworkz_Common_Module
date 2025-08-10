import React, { useRef, useState } from "react";
import _HTMLFlipBook from "react-pageflip";
const HTMLFlipBook: any = _HTMLFlipBook;

const BookPage = React.forwardRef<
  HTMLDivElement,
  { children: React.ReactNode; className?: string }
>(({ children, className }, ref) => {
  return (
    <div
      className={`flex flex-col justify-between p-8 h-full shadow-inner ${className}`}
      ref={ref}
    >
      {children}
    </div>
  );
});
BookPage.displayName = "BookPage";

interface StoryBookProps {
  story: string;
}

const StoryBook: React.FC<StoryBookProps> = ({ story }) => {
  const bookRef = useRef<any>(null);
  const storyParagraphs = story.split(/\n\n+/).filter(Boolean);
  const [pageIndex, setPageIndex] = useState(0);

  const goNext = () => bookRef.current?.pageFlip().flipNext();
  const goPrev = () => bookRef.current?.pageFlip().flipPrev();

  return (
    <div className="flex justify-center mt-12">
      <HTMLFlipBook
        ref={bookRef}
        width={500}
        height={600}
        size="stretch"
        minWidth={300}
        maxWidth={1000}
        minHeight={400}
        maxHeight={1536}
        showCover={false}
        className="shadow-2xl border border-gray-300"
        onFlip={(e: any) => setPageIndex(e.data)}
      >
        {storyParagraphs.map((para, idx) => (
          <React.Fragment key={idx}>
            {/* Left page with text + prev button */}
            <BookPage className="bg-white border-r border-gray-300 font-serif text-gray-800">
              <div className="flex-1 text-justify">{para}</div>
              <div className="flex justify-start">
                {idx > 0 && (
                  <button
                    onClick={goPrev}
                    className="px-4 py-2 mt-4 bg-green-500 text-white rounded hover:bg-green-600"
                  >
                    Previous
                  </button>
                )}
              </div>
            </BookPage>

            {/* Right blank page with next button */}
            <BookPage className="bg-neutral-100 flex items-end justify-end border-l border-gray-300">
              {idx < storyParagraphs.length - 1 && (
                <button
                  onClick={goNext}
                  className="px-4 py-2 mb-4 bg-green-500 text-white rounded hover:bg-green-600"
                >
                  Next
                </button>
              )}
            </BookPage>
          </React.Fragment>
        ))}
      </HTMLFlipBook>
    </div>
  );
};

export default StoryBook;
