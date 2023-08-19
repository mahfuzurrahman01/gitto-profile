import Image from "next/image";
import logo from '../../../public/logo/gitto-logo.png'
const Navbar = () => {
    return (
        <div className="w-11/12 mx-auto py-5 flex justify-between items-center">
            <Image alt="logo" src={logo} width={70} height={70}/>
            <p className="bg-white text-sky-500 px-2 py-1 text-sm shadow-lg shadow-sky-400 bg-opacity-90 rounded">Gitto profile</p>
        </div>
    );
};

export default Navbar;