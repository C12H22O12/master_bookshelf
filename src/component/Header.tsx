import Image from "next/image";

const Header = () => {
  return (
    <div className="flex items-center justify-between md:justify-start w-full h-header bg-point">
      <Image
        src="/danchung.png"
        alt="단청 이미지"
        width={39}
        height={43}
        className="w-auto h-full"
      />
      <div className="py-1 px-3 md:mx-7 text-2xl border-x-8 border-y-4 border-frame rounded-md bg-default shadow-inner font-title titleFont">
        장인의 책가도
      </div>
      <Image
        src="/danchung.png"
        alt="단청 이미지"
        width={39}
        height={43}
        className="w-auto h-full rotate-180 md:hidden"
      />
    </div>
  );
};

export default Header;
