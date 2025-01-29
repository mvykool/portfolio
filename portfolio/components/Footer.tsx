import { Logo } from "@/app/components/ui/Logo";

const Footer = () => {
  return (
    <footer className=" border-2 border-app-gray mt-36 py-5 ">
      <div className="w-8/12 mx-auto">
        <div className="md:flex justify-center md:items-center md:justify-evenly text-center ">
          <div className="hidden md:block">
            <Logo />
          </div>
          <p className="font-playfair text-base my-2 md:text-sm text-black dark:text-white">
            Made By <span className="text-app-green">Michael Hernandez</span>
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
