import ContactForm from "@/Components/ContactForm";
import Layout from "@/Layout/Layout";
import React from "react";
import Image from "next/image";

const Contact = () => {
  return (
    <Layout>
      <div className=" flex flex-col lg:flex-row justify-center gap-10  px-10">
        <div className="flex flex-col items-center justify-between col-span-5">
          <div>
            <h2 className=" text-2xl min-[600px]:text-4xl lg:text-5xl font-bold leading-tight text-nowrap mb-5">
              Lets talk about everything!
            </h2>
            <div className="text-gray-700 text-sm md:text-lg mb-5 ">
              Hate forms? Send us an <span className="underline">email</span>{" "}
              instead.
            </div>
          </div>
          <div className="mb-2 text-center flex items-center justify-center">
            <Image
              width={100}
              height={100}
              alt=""
              src={"/contact.png"}
              className=" hidden md:inline-block w-56 "
            />
          </div>
        </div>
        <div className="col-span-5">
          <ContactForm />
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
