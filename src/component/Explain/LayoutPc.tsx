import Header from "@/component/Header";
import { SAMPLE_TEXT, SHELFS } from "@/constant/data";
import { useParams } from "next/navigation";
import { B } from "@/component/Button";
import DanchungIcon from "@/component/DanchungIcon";
import { Card } from "../Card";

const LayoutPc = () => {
  const router = useParams();

  return (
    <>
      <div className="flex flex-col items-center flex-initial w-full h-1/6 pt-2 max-md:hidden">
        <Header />
      </div>
      <div className="w-full my-6 flex-initial h-5/6 p-8 ">
        <div className="flex justify-center items-center gap-5 mb-8">
          <DanchungIcon size={40} />
          <div className="relative bottom-1 text-4xl titleFont">
            {SHELFS[Number(router.id)].artist} 책가도
          </div>
          <DanchungIcon size={40} />
        </div>
        {/* 추후 내용 변경 */}
        <div className=" w-full pt-5 pb-3 border-y mb-8">
          <div className="flex items-start justify-center">
            <div className="w-full min-w-[240px]">
              <Card imgSrc={SHELFS[Number(router.id)].imgSrc} />
            </div>
            <div className="">
              <div className="m-1 px-6 py-8 bg-board rounded-md text-board">
                <MainContainer title="작품 설명" expalin={SAMPLE_TEXT} />
                <MainContainer title="작가 설명" expalin={SAMPLE_TEXT} />
              </div>
              <div className="flex justify-end w-full m-4">
                <B.Main />
              </div>
            </div>
          </div>
        </div>

        <div className="p-5 bg-board rounded-md text-board">
          <MainContainer title="상세 설명" expalin={SAMPLE_TEXT} />
        </div>
      </div>
    </>
  );
};

export default LayoutPc;

interface MainContainerProps {
  title: string;
  expalin: string;
}

const MainContainer = ({ title, expalin }: MainContainerProps) => {
  return (
    <div className="w-full mb-8">
      <div className="mb-2 text-2xl">∙ {title}</div>
      <div className="ml-5 font-thin">{expalin}</div>
    </div>
  );
};
