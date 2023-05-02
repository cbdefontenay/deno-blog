import fs from "fs";
import Markdown from "markdown-to-jsx";
import matter from "gray-matter";
import getPostMetadata from "../../../components/getPostMetadata";
import { Noto_Serif } from "next/font/google";

const notoSerif = Noto_Serif({
  weight: "400",
  subsets: ["latin"],
});

const getPostContent = (slug: string) => {
  const folder = "posts/";
  const file = `${folder}${slug}.md`;
  const content = fs.readFileSync(file, "utf8");
  const matterResult = matter(content);
  return matterResult;
};

export const generateStaticParams = async () => {
  const posts = getPostMetadata();
  return posts.map((post) => ({
    slug: post.slug,
  }));
};

const PostPage = (props: any) => {
  const slug = props.params.slug;
  const post = getPostContent(slug);
  return (
    <div className={`${notoSerif.className} mx-auto max-w-4xl pt-20 pb-14`}>
      <div className=''>
        <h1 className='text-3xl sm:text-4xl text-slate-600 font-bold'>
          {post.data.title}
        </h1>
        <p className='text-slate-400 mt-2'>{post.data.date}</p>
      </div>

      <article className='prose sm:prose-lg lg:prose-xl'>
        <Markdown className='text-base leading-6 sm:text-lg'>
          {post.content}
        </Markdown>
      </article>
    </div>
  );
};

export default PostPage;
