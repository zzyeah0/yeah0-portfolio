import { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

interface GalleryProps {
  images: string[];
  projectName: string;
}


export function Gallery({ images, projectName }: GalleryProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [showNavButtons, setShowNavButtons] = useState(true);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const imageHeight = 250;

  useEffect(() => {
    const checkScroll = () => {
      if (scrollContainerRef.current) {
        const { scrollWidth, clientWidth } = scrollContainerRef.current; 
        setShowNavButtons(scrollWidth > clientWidth);        
      }
    };

    checkScroll();
    window.addEventListener("resize", checkScroll);
    return () => window.removeEventListener("resize", checkScroll);
  }, [images]);

  useEffect(() => {
    if (selectedImage) {
      document.body.classList.add("gallery-modal-open");
    } else {
      document.body.classList.remove("gallery-modal-open");
    }
    return () => {
      document.body.classList.remove("gallery-modal-open");
    };
  }, [selectedImage]);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 320;
      const newScrollLeft =
        scrollContainerRef.current.scrollLeft +
        (direction === "left" ? -scrollAmount : scrollAmount);
      scrollContainerRef.current.scrollTo({
        left: newScrollLeft,
        behavior: "smooth",
      });
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") {
      setSelectedImage(null);
    }
  };
  
  return (    
    <>
      <div className="relative group mt-12">
        <div
          ref={scrollContainerRef}
          className="flex gap-4 overflow-x-auto scroll-smooth pb-2 scrollbar-hide"
          style={{ scrollBehavior: "smooth"}}
        >
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => setSelectedImage(image)}
              className="group/image relative flex-shrink-0 overflow-hidden rounded-2xl border border-border/70 transition-transform duration-300 hover:border-primary/50 hover:-translate-y-2"
              style={{ height: `${imageHeight}px` }}
            >
              <img
                src={image}
                alt={`${projectName} screenshot ${index + 1}`}
                className="h-full w-full object-cover transition-transform duration-300 group-hover/image:scale-105"
                onError={(e) => {
                  e.currentTarget.src =
                    "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=280&fit=crop";
                }}
              />
              <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover/image:bg-black/10" />
            </button>
          ))}
        </div>

        {showNavButtons && (
          <>
            <button
              onClick={() => scroll("left")}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-3 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-border/70 bg-card/80 text-foreground/70 shadow-glow transition-all duration-300 hover:border-primary/50 hover:bg-card hover:text-primary md:-translate-x-4"
              aria-label="Scroll gallery left"
            >
              <ChevronLeft className="h-5 w-5" />              
            </button>
            <button
              onClick={() => scroll("right")}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-3 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-border/70 bg-card/80 text-foreground/70 shadow-glow transition-all duration-300 hover:border-primary/50 hover:bg-card hover:text-primary md:translate-x-4"
              aria-label="Scroll gallery right"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </>
        )}
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm transition-opacity duration-300"
          onClick={() => setSelectedImage(null)}
          onKeyDown={handleKeyDown}
          role="dialog"
          aria-modal="true"
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors duration-300 hover:bg-white/20 md:top-6 md:right-6"
            aria-label="Close enlarged image"
          >
            <X className="h-6 w-6" />
          </button>

          <img
            src={selectedImage}
            alt="Enlarged project screenshot"
            className="max-h-[90vh] max-w-[90vw] rounded-2xl border border-white/20 shadow-2xl object-contain"
            onClick={(e) => e.stopPropagation()}
            onError={(e) => {
              e.currentTarget.src =
                "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=800&h=600&fit=crop";
            }}
          />
        </div>
      )}
    </>
  );
}
