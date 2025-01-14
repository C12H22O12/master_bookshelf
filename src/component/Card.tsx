import Image from "next/image";

interface CardProps {
  isVisible: boolean;
  imgSrc: string;
  name: string;
}

export const Card = ({ isVisible, imgSrc, name }: CardProps): JSX.Element => {
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
      <div className="pt-2 text-center">
        {name} <br className="max-lg:hidden" /> 책가도
      </div>
    </div>
  );
};
