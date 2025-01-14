import { useEffect, useRef, useState } from "react";
import data from "/public/sample/data.json";
import { Card } from "./Card";

type CardInfo = { id: number; title: string; imgSrc: string };

const Carousel = (): JSX.Element => {
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
    <div className="w-fit px-8 h-4/5 flex gap-1 overflow-auto">
      {(data as CardInfo[]).map((d: CardInfo, idx: number) => (
        <div
          key={d.id}
          ref={(el) => {
            cardRefs.current[idx] = el;
          }}
          data-index={idx}
          onClick={() => handleCardClick(idx)}
          className="w-fit h-full "
        >
          <Card
            isVisible={visiable.includes(idx)}
            imgSrc={d.imgSrc}
            name={d.title}
          />
        </div>
      ))}
    </div>
  );
};

export default Carousel;
