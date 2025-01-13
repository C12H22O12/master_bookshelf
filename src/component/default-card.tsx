import Image from "next/image";

interface DefaultCardProps {
  isVisible: boolean;
  name: string;
}

export const DefaultCard = ({
  isVisible,
  name,
}: DefaultCardProps): JSX.Element => {
  return (
    <div
      className={`w-max-card h-max-card flex flex-col items-center transition-all ${
        isVisible ? "bg-green-500" : "bg-red-500"
      }`}
    >
      <Image
        src={"/frame.png"}
        width={267}
        height={620}
        alt="책가도 틀"
        className="w-100"
      />
      <div>{name}</div>
    </div>
  );
};
