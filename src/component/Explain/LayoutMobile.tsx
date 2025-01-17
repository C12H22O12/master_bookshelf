import { B } from "@/component/Button";
import DanchungIcon from "../DanchungIcon";
import { SAMPLE_TEXT, SHELFS } from "@/constant/data";
import { Card } from "../Card";
import { useParams } from "next/navigation";

const LayoutMobile = () => {
  const router = useParams();

  return (
    <>
      <div className="flex flex-col items-center justify-center w-full">
        <DanchungIcon />

        <div className="flex items-start justify-center gap-3 w-full my-6">
          <div className="w-full min-w-[116px]">
            <Card imgSrc={SHELFS[Number(router.id)].imgSrc} />
          </div>
          <div>{SAMPLE_TEXT}</div>
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
