

const Footer = () => {
  return (
    <footer className="  bg-app-gray mt-36 py-5 ">
      <div className="w-8/12 mx-auto">
    
          <div className="md:flex justify-center md:items-center md:justify-evenly text-center ">
            <img src="/logo.png" alt="log" className="h-10 w-10 hidden md:block" />
            <p className="font-playfair text-base my-2 md:text-sm text-white">
            Made By <span className="text-app-green">Maicol Hernandez</span>
          </p>
          <p className="mt-0 text-sm text-gray-400">
            ©2023 | All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 