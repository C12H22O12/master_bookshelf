import Image from "next/image";
import { useRouter } from "next/navigation";

interface CardProps {
  imgSrc: string;
  idx?: number;
  isVisible?: boolean;
  name?: string;
}

export const Card = ({
  idx,
  imgSrc,
  isVisible = true,
  name,
}: CardProps): JSX.Element => {
  const router = useRouter();
  const moveTo = () => {
    if (typeof idx === "number") {
      router.push(`/${idx}`);
    }
  };

  return (
    <div
      onClick={moveTo}
      className={`flex flex-col items-center w-auto h-full aspect-[267/620] transition-all cursor-pointer ${
        isVisible ? "opacity-100" : "opacity-20"
      }`}
    >
      <div className="relative h-full flex justify-center items-center">
        <Image
          src={"/frame.png"}
          width={267}
          height={620}
          alt="책가도 틀"
          className="relative z-10 w-auto h-full"
        />
        <div
          className="absolute z-0 w-auto h-[93%] aspect-[267/620] bg-cover bg-center"
          style={{
            backgroundImage: `url(${imgSrc})`,
          }}
        />
      </div>
      {name && <div className="pt-2 text-center">{name} 책가도</div>}
    </div>
  );
};
