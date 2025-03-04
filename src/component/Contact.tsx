import Location from "@public/icons/mobile_contact/location_on.png";
import Mail from "@public/icons/mobile_contact/mail.png";
import Call from "@public/icons/mobile_contact/phone_call.png";
import Twitter from "@public/icons/mobile_contact/Twitter.png";
import Instagram from "@public/icons/mobile_contact/Instagram.png";
import Image, { StaticImageData } from "next/image";

export const Contact = (): JSX.Element => {
  return (
    <div
      className={`flex flex-col items-center w-auto h-full aspect-[267/620] transition-all cursor-pointer contact`}
    >
      <div className="relative h-full flex-col justify-center items-center">
        <div className="flex-col justify-center align-middle mb-8">
          <div className="text-2xl text-center mt-20 mb-2 font-bold drop-shadow-lg">
            Contact
          </div>
          <div className="text-2xl text-center font-bold drop-shadow-lg">
            교하
          </div>
        </div>

        <div className="flex-col">
          <ContactElement img={Location} contact="주소주소주소주소주소" />
          <ContactElement img={Mail} contact="이메일@gmail.com" />
          <ContactElement img={Call} contact="010 - 0000 - 0000" />
          <div className="flex gap-4">
            <ContactElement img={Twitter} contact="@twitter" />
            <ContactElement img={Instagram} contact="@instagram" />
          </div>
        </div>
      </div>
    </div>
  );
};

interface ContactElementProps {
  img: StaticImageData;
  contact: string;
}

const ContactElement = ({ img, contact }: ContactElementProps) => {
  return (
    <div className="flex align-middle justify-start gap-2 mb-2">
      <Image src={img} alt={`${contact} icon`} width={20} height={20} />
      <div>{contact}</div>
    </div>
  );
};
