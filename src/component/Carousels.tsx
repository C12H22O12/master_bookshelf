import { useEffect, useRef, useState } from "react";
import data from "/public/sample/data.json";
import { Card } from "./Card";

type CardInfo = { id: number; title: string; imgSrc: string };

const Carousel = (): JSX.Element => {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [visiable, setVisiable] = useState<number[]>([]);
  const [sidePadding, setSidePadding] = useState<number>(0);

  const handleCardClick = (idx: number) => {
    const selectedCard = cardRefs.current[idx];
    if (selectedCard) {
      selectedCard.scrollIntoView({ behavior: "smooth", inline: "center" });
    }
  };
  useEffect(() => {
    // 화면 정 중앙에 처음/끝 컴포넌트 오기 위한 padding 값 계산
    const calculatePadding = () => {
      if (!containerRef.current || !cardRefs.current[0]) return;

      const containerWidth = containerRef.current.clientWidth;
      const cardWidth = cardRefs.current[0].clientWidth;
      const padding = (containerWidth - cardWidth) / 2;

      setSidePadding(padding);
    };

    calculatePadding();
    window.addEventListener("resize", calculatePadding);


    // 카드의 모든 부분이 보이는 지 유무를 판단하기 위함
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
    <div
      ref={containerRef}
      className="relative w-full h-full px-8 flex gap-1 snap-proximity snap-x overflow-auto"
      style={{ paddingInline: `${sidePadding}px` }}
    >
      {(data as CardInfo[]).map((d: CardInfo, idx: number) => (
        <div
          key={d.id}
          ref={(el) => {
            cardRefs.current[idx] = el;
          }}
          data-index={idx}
          onClick={() => handleCardClick(idx)}
          className={`w-fit h-full snap-center shrink-0`}
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
