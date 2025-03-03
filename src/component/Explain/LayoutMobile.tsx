import { B } from "@/component/Button";
import DanchungIcon from "../DanchungIcon";
import { SAMPLE_TEXT, SHELFS } from "@/constant/data";
import { Card } from "../Card";
import { useParams } from "next/navigation";

const ImageBlock = ({ src }: { src: string }) => (
  <div className="w-full max-w-[120px] mx-auto">
    <Card imgSrc={src} />
  </div>
);

const TextBlock = ({ text }: { text: string }) => (
  <div className="text-justify leading-relaxed">{text}</div>
);

const ContentLayout = ({ imgSrc, text }: { imgSrc: string; text: string }) => (
  <div className="grid grid-cols-1 sm:grid-cols-[120px_auto] gap-3 w-full">
    <ImageBlock src={imgSrc} />
    <TextBlock text={text} />
  </div>
);

const LayoutMobile = () => {
  const router = useParams();
  const imgSrc = SHELFS[Number(router.id)].imgSrc;

  return (
    <>
      <div className="flex flex-col items-center justify-center w-full">
        <DanchungIcon />
        <div className="w-full my-6">
          <ContentLayout imgSrc={imgSrc} text={SAMPLE_TEXT} />
        </div>
      </div>
      <div className="flex flex-col items-center justify-center w-full">
        <DanchungIcon />
        <B.Main />
      </div>
    </>
  );
};

export default LayoutMobile;
