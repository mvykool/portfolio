

const Footer = () => {
  return (
    <footer className=" border-t-2 bg-deep-blue mt-36 py-10 ">
      <div className="w-8/12 mx-auto">
   
        <div className="md:flex justify-center md:items-center md:justify-evenly text-center ">
          <img src="/logo.png" alt="log" className="h-10 w-10 hidden md:block" />
          <p className="font-playfair font-semibold text-xl text-white">
           Made By Maicol Hernandez
          </p>
          <p className="mt-0 text-md text-white">
            ©2023 | All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;