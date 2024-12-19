import React from "react";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";
import Image from "next/image";

interface Props {
  setSelectedPage: any;
}

const About = ({ setSelectedPage }: Props) => {
  const isAboveLarge = useMediaQuery("(min-width: 1060px)");

  return (
    <>
      <section className="md:flex md:justify-between md:items-center md:h-full gap-8 py-5">
        {/* IMAGE SECTION */}
        <div className="basis-3/5 z-10 mt-5 flex justify-center md:order-2">
          {isAboveLarge ? (
            <div
              className="relative z-0 ml-40 before:absolute before:-top-10 before:-left-10 
          before:w-full before:max-w-[400px] md:before:max-w-[600px] before:h-full before:border-2 before:border-app-green before:z-[-1] "
            >
              <Image
                width={800}
                height={800}
                alt="profile"
                className="hover:filter hover:saturate-200 transition duration-500 z-10 w-full max-w-[400px] md:w-[18vw] md:h-[35vh] "
                src="/profile.png"
              />
            </div>
          ) : (
            <Image
              width={500}
              height={500}
              alt="profile"
              className="z-10 w-full max-w-[400px] md:max-w-[600px]"
              src="/profile.png"
            />
          )}
        </div>

        <div className="z-30 basis-2/5 md:ml-10 mt-12 md:mt-5">
          {/* HEADINGS */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <div className="flex justify-center md:justify-start space-x-4 mx-auto">
              <p className="text-4xl font-playfair z-10 text-center md:text-start">
                About
              </p>
              <p className="text-4xl font-playfair z-10 text-center md:text-start text-app-green">
                Me
              </p>
            </div>

            <p className="mt-10 mb-2 text-sm md:text-sm text-center md:text-start">
              Hi there! I&apos;m Maicol, and I&apos;m a highly driven, and
              focused web developer, I enjoy crafting stunning UIs and creates
              cool programs that make the digital world come alive.
            </p>
            <p className="mt-5 mb-7 text-sm md:text-sm text-center md:text-start">
              I blend artistry and technology to design immersive user
              experiences that leave a lasting impression. I like to explore new
              design trends, fueling my creativity and learning all kinds of
              crazy new stuff.
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default About;

