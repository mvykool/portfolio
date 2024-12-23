import { Logo } from "@/app/components/ui/Logo";

const Footer = () => {
  return (
    <footer className="  bg-app-gray mt-36 py-5 ">
      <div className="w-8/12 mx-auto">
        <div className="md:flex justify-center md:items-center md:justify-evenly text-center ">
          <div>
            <Logo />
          </div>
          <p className="font-playfair text-base my-2 md:text-sm text-white">
            Made By <span className="text-app-green">Maicol Hernandez</span>
          </p>
          <p className="mt-0 text-sm text-gray-400">
            ©2025 | All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

