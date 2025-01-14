import { useEffect, useRef, useState } from "react";
import { DefaultCard } from "./default-card";

export const Carousel = (): JSX.Element => {
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [visiable, setVisiable] = useState<number[]>([]);

  const handleCardClick = (idx: number) => {
    const selectedCard = cardRefs.current[idx];
    if (selectedCard) {
      selectedCard.scrollIntoView({ behavior: "smooth", inline: "center" });
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const cardIdx = Number(entry.target.getAttribute("data-index"));

          if (entry.isIntersecting && entry.intersectionRatio === 1) {
            setVisiable((prev) => [...prev, cardIdx]);
          } else {
            setVisiable((prev) => prev.filter((idx) => idx !== cardIdx));
          }
        });
      },
      { threshold: [0, 1] }
    );

    const currentRef = cardRefs;

    currentRef.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      currentRef.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <div className="w-full flex gap-2 overflow-auto">
      {Array.from(Array(8), (_, idx) => (
        <div
          key={`default_card_carousel_${idx}`}
          ref={(el) => {
            cardRefs.current[idx] = el;
          }}
          data-index={idx}
          onClick={() => handleCardClick(idx)}
          className="w-fit"
        >
          <DefaultCard
            isVisible={visiable.includes(idx)}
            imgSrc={"/sample.png"}
            name={`${idx + 1} card`}
          />
        </div>
      ))}
    </div>
  );
};
