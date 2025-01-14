import { useParams } from "next/navigation";
import { B } from ".";
import { SHELFS } from "@/constant/data";

const Main = () => {
  const router = useParams();
  const download = () => {
    const { artist, imgSrc } = SHELFS[Number(router.id) + 1];
    let a = document.createElement("a");
    a.href = imgSrc;
    a.download = `${artist}_책가도`;
    a.click();
    a.remove();
  };
  const moveTo = () => {
    window.open(SHELFS[Number(router.id) + 1].url);
  };

  return (
    <div className="flex max-md:flex-col gap-3 max-md:pt-3">
      <B.Default handler={download} text="책가도 다운로드" />
      <B.Default handler={moveTo} text="작가님 사이트로 이동" />
    </div>
  );
};

export default Main;
