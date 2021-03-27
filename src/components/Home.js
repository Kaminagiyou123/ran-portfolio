import React from "react";
import image from "./seattle.jpeg";

export default function Home() {
  return (
    <main>
      <img
        alt='main'
        src={image}
        className='absolute object-cover w-full h-full'
        style={{ opacity: 0.6 }}
        alt='amazon-logo'
      />
      <section className='relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8'>
        <h3 className='mt-3 text-3xl leading-8 font-extrabold tracking-tight text-gray-600 sm:text-6xl'>
          Hello, I am Ran
        </h3>
      </section>
    </main>
  );
}
