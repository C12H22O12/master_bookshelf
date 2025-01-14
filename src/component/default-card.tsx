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
      className={`flex flex-col items-center w-max-card h-max-card transition-all ${
        isVisible ? "opacity-100" : "opacity-20"
      }`}
    >
      <div className="relative w-full">
        <Image
          src={"/frame.png"}
          width={267}
          height={620}
          alt="책가도 틀"
          className="relative z-10"
        />
        <div
          className="absolute top-5 left-6 z-0 w-max-img h-max-img bg-cover bg-center"
          style={{ backgroundImage: `url(${imgSrc})` }}
        ></div>
      </div>
      <div>{name}</div>
    </div>
  );
};
