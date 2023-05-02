/* eslint-disable react/no-unescaped-entities */
import { EB_Garamond } from "next/font/google";

const garamond = EB_Garamond({
  weight: "400",
  subsets: ["latin"],
});

const FrontPage = () => {
  return (
    <div
      className={`relative min-h-screen bg-cover bg-center ${garamond.className}`}
      style={{ backgroundImage: "url('/computer.jpg')" }}
    >
      <div className='absolute w-full h-full bg-gray-900 bg-opacity-50'></div>
      <div className='absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center'>
        <h1 className='text-4xl sm:text-6xl font-bold text-white mb-2 md:mt-10'>
          Welcome to My Blog
        </h1>
        <h3 className='text-lg sm:text-xl mb-2 text-white mt-5'>
          Here we talk about Deno.
        </h3>
        <h4 className='text-base sm:text-lg font-medium mb-2 text-white'>
          Why Deno?
        </h4>
        <p className='text-base sm:text-xl text-blue-200 mt-4'>
          Because it's never been easier to build a server with Deno for your
          application. <br />
          Deno is not only the future (forget about Node.Js), it is also a more
          secure way of creating a server. <br /> Yes, you heard it, Deno is a
          secure (by default) JavaScript and WebAssembly runtime.
        </p>
        <p className='text-base sm:text-xl text-blue-200 mt-3'>
          I fell in love with Deno after discovering it a few months ago. <br />
          That's why I decided to create this blog where we speak about Deno.
          <br />
          So your transition from Node to Deno, or just your interest toward
          Deno may be easier.
        </p>
      </div>
    </div>
  );
};

export default FrontPage;
