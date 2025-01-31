import Image from "next/image";

const Info = () => {
  return (
    <div className="flex-initial w-100 mt-3 m-6 pt-3 border-t max-sm:hidden">
      <div className="flex flex-col items-end gap-2 w-100">
        <div className="flex gap-2">
          <Moving href="www.intagram.com/" name="instagram" />
          <Moving href="www.intagram.com/" name="blog" />
          <Moving href="www.intagram.com/" name="twitter" />
        </div>
        <div className="flex flex-col items-end w-100 text-content text-base">
          <div>주소주소주소주소주소</div>
          <div>이메일@gmail.com</div>
          <div>010 - 0000 - 0000</div>
        </div>
      </div>
    </div>
  );
};

export default Info;

interface MovingProps {
  href: string;
  name: string;
}

const Moving = ({ href, name }: MovingProps) => {
  return (
    <a className="hover:cursor-pointer" href={href} target="_blank">
      <Image src={`/icons/${name}.svg`} alt={name} width={30} height={30} />
    </a>
  );
};
