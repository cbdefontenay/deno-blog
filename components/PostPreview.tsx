import Link from "next/link";
import { PostMetadata } from "./PostMetadata";
import { EB_Garamond } from "next/font/google";

const garamond = EB_Garamond({
  weight: "400",
  subsets: ["latin"],
});

const images = [
  "/computer2.jpg",
  "/computer.jpg",
  "/spider.JPG",
  "/logo.png",
  "/tree.JPG",
];

const PostPreview = (props: PostMetadata) => {
  const backgroundImage = images[Math.floor(Math.random() * images.length)];

  return (
    <div
      className={`${garamond.className} border border-gray-200 shadow-md rounded-md bg-white py-12 my-8 mx-4 sm:mx-8`}
    >
      <div
        className='relative  h-2/4 bg-cover bg-center text-opacity-50 rounded-md'
        style={{
          backgroundImage: `url(${backgroundImage})`,
          height: "100%",
        }}
      >
        <div className='px-16 py-16 bg-gray-900 h-full bg-opacity-50 text-white text-2xl'>
          <p className='text-sm text-white mb-2 font-bold text-center '>
            {props.date}
          </p>
          <Link href={`/posts/${props.slug}`}>
            <h2 className='text-2xl tracking-wide font-bold md:text-2xl text-white text-center hover:underline mb-2 md:mb-4'>
              {props.title}
            </h2>
          </Link>
          <p className='text-white text-base md:text-lg mb-2 text-center'>
            {props.subtitle}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PostPreview;
