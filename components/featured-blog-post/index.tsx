import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card';

import Prose from 'components/prose';

import Image from 'next/image';

type Props = {
  postData?: any;
};

export async function FeaturedBlogPost({ postData }: Props) {
  if (!postData) return null;

  const post = postData?.[0]?.articles?.edges?.[0]?.node;

  const { title, author, image, publishedAt, contentHtml } = post || {};

  return (
    <div className="mx-auto max-w-7xl p-6">
      <h2 className="mb-8 text-center text-4xl font-bold">From The Blog</h2>
      <div className="scrollbar-hide flex space-x-4 overflow-x-scroll">
        <Card key={post.id} className="mx-4 min-w-[300px] overflow-hidden rounded shadow-lg">
          {image && (
            <Image
              src={image?.src}
              alt={image.altText || 'Blog Post Image'}
              layout="responsive"
              width={700}
              height={475}
            />
          )}
          <CardHeader>
            <CardTitle className="text-xl lg:text-2xl">{title}</CardTitle>
            <CardDescription className="text-gray-500">{author?.name}</CardDescription>
          </CardHeader>
          <CardContent className="text-gray-700">
            <Prose html={contentHtml} />
          </CardContent>
          <CardFooter className="justify-between">
            <span className="text-gray-600">{publishedAt}</span>
            <a
              href={`/blog/${post.slug}`}
              className="text-indigo-500 transition duration-300 ease-in-out hover:text-indigo-600"
            >
              Read More
            </a>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
