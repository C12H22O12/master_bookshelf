import Image from "next/image";

interface DefaultButtonProps {
  text: string;
  handler: () => void;
}

const Default = ({ text, handler }: DefaultButtonProps) => {
  return (
    <button
      onClick={handler}
      className="flex items-center justify-between md:justify-center w-m-button md:w-p-button h-button rounded-xl bg-point text-button overflow-hidden hover:bg-hover"
    >
      <Image
        src="/danchung.png"
        alt="단청 이미지"
        width={39}
        height={43}
        className="md:hidden"
      />
      <div className="text-xl">{text}</div>
      <Image
        src="/danchung.png"
        alt="단청 이미지"
        width={39}
        height={43}
        className="rotate-180 md:hidden"
      />
    </button>
  );
};

export default Default;
