

const Footer = () => {
  return (
    <footer className=" bg-app-menu py-10">
      <div className="w-10/12 mx-auto">
   
        <div className="md:flex justify-center md:items-center md:justify-evenly text-center ">
          <img src="/logo.png" alt="log" className="h-10 w-10 hidden md:block" />
          <p className="font-playfair font-semibold text-xl text-white">
           Made By Maicol Hernandez
          </p>
          <p className="mt-5 text-md text-white">
            ©2023 | All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;