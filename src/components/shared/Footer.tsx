import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { FaDev } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="flex justify-center items-center flex-col w-full py-4 font-mono">
      <p className="text-sm text-gray-200">
        Design and developed by -{" "}
        <a
          href="https://mahfuzur01.netlify.app/"
          className="text-sky-700 cursor-pointer"
        >
          Mafuzur Rahman
        </a>
      </p>
      {/* // ============== icons ========== //  */}
      <div className="flex justify-center items-center gap-2 mt-4 mb-5">
        <AiFillLinkedin className=" text-sky-600 w-6 h-6" />
        <AiFillGithub className=" text-sky-600 w-6 h-6"/>
        <FaDev className=" text-sky-600 w-6 h-6"/>
      </div>
    </div>
  );
};

export default Footer;
