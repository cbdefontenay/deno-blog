import getPostMetadata from "../../components/getPostMetadata";
import PostPreview from "../../components/PostPreview";

const Blog = () => {
  const postMetadata = getPostMetadata();
  const postsPreviews = postMetadata.map((post) => (
    <PostPreview key={post.slug} {...post} />
  ));

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>{postsPreviews}</div>
  );
};

export default Blog;
