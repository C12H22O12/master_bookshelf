import Image from "next/image";

interface DanchungProps {
  size?: number;
}

const DanchungIcon = ({ size = 25 }: DanchungProps) => {
  return (
    <Image
      src={"/danchung_mini.svg"}
      alt="단청 미니 아이콘"
      width={size}
      height={size + 2}
    />
  );
};

export default DanchungIcon;
