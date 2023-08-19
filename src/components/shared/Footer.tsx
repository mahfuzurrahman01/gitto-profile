import Image from "next/image";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { FaDev } from "react-icons/fa";
import flag from "../../../public/flag/Flag-Bangladesh.jpg";
const Footer = () => {
  return (
    <div className="flex justify-center items-center w-full py-4 font-mono gap-2">
      <p className="text-sm text-gray-200">
        Design and developed by -{" "}
        <a
          href="https://mahfuzur01.netlify.app/"
          className="text-sky-700 cursor-pointer"
        >
          Mafuzur Rahman
        </a>
      </p>
      {/* // ============== flag ========== //  */}
      <Image alt="flag" src={flag} width={20} height={10} />
    </div>
  );
};

export default Footer;
