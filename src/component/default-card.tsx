import Image from "next/image";

interface DefaultCardProps {
  isVisible: boolean;
  imgSrc: string;
  name: string;
}

export const DefaultCard = ({
  isVisible,
  imgSrc,
  name,
}: DefaultCardProps): JSX.Element => {
  return (
    <div
      className={`flex flex-col items-center w-auto h-full aspect-[267/620] transition-all cursor-pointer ${
        isVisible ? "opacity-100" : "opacity-20"
      }`}
    >
      <div className="relative w-full overflow-hidden flex justify-center items-center">
        <Image
          src={"/frame.png"}
          width={267}
          height={620}
          alt="책가도 틀"
          className="relative z-10 w-full"
        />
        <div
          className="absolute z-0 w-5/6 h-auto aspect-[267/620] bg-cover bg-center"
          style={{
            backgroundImage: `url(${imgSrc})`,
          }}
        />
      </div>
      <div className="text-center">
        {name} <br className="max-md:hidden" /> 책가도
      </div>
    </div>
  );
};
