import {
  MutableRefObject,
  ReactNode,
  useEffect,
  useRef,
  useState,
} from "react";
import { Card } from "./Card";
import { CardInfo, SHELFS } from "@/constant/data";
import { Contact } from "./Contact";
import { MOBILE_WIDTH } from "@/constant/layout";

const CardWrapper = ({
  children,
  index,
  cardRefs,
}: {
  children: ReactNode;
  index: number;
  cardRefs: MutableRefObject<(HTMLDivElement | null)[]>;
}) => {
  const handleCardClick = (idx: number) => {
    const selectedCard = cardRefs.current[idx];
    if (selectedCard) {
      selectedCard.scrollIntoView({ behavior: "smooth", inline: "center" });
    }
  };

  return (
    <div
      ref={(el) => {
        cardRefs.current[index] = el;
      }}
      data-index={index}
      onClick={() => handleCardClick(index)}
      className="w-fit h-full snap-center shrink-0"
    >
      {children}
    </div>
  );
};

const Carousel = (): JSX.Element => {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [visible, setVisible] = useState<number[]>([]);
  const [sidePadding, setSidePadding] = useState<number>(0);

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

    // 카드의 모든 부분이 보이는지 유무를 판단하기 위함
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const cardIdx = Number(entry.target.getAttribute("data-index"));

          if (entry.isIntersecting && entry.intersectionRatio === 1) {
            setVisible((prev) => [...prev, cardIdx]);
          } else {
            setVisible((prev) => prev.filter((idx) => idx !== cardIdx));
          }
        });
      },
      { threshold: [0, 1] }
    );

    cardRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      cardRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-full px-8 flex gap-1 snap-mandatory snap-x overflow-auto scrollbar-hide"
      style={{ paddingInline: `${sidePadding}px` }}
    >
      {SHELFS.map((d: CardInfo, idx: number) => (
        <CardWrapper key={d.id} index={idx} cardRefs={cardRefs}>
          <Card
            idx={idx}
            isVisible={visible.includes(idx)}
            imgSrc={d.imgSrc}
            name={d.artist}
          />
        </CardWrapper>
      ))}

      {/* Contact 컴포넌트도 감지 대상에 추가 */}
      {window.innerWidth < MOBILE_WIDTH && (
        <CardWrapper index={SHELFS.length} cardRefs={cardRefs}>
          <Contact />
        </CardWrapper>
      )}
    </div>
  );
};

export default Carousel;
