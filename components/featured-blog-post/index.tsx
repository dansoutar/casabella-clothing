import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import clsx from 'clsx';

import { CalendarIcon, UserIcon } from '@heroicons/react/24/outline';
import { Button } from 'components/button';
import { Container } from 'components/container';
import Prose from 'components/prose';
import Image from 'next/image';

type Props = {
  postData?: any;
  className?: string;
};

function formatDateToDayMonthYear(dateString: string) {
  const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Intl.DateTimeFormat('en-US', options).format(new Date(dateString));
}

export async function FeaturedBlogPost({ postData, className }: Props) {
  if (!postData) return null;

  const post = postData?.[0]?.articles?.edges?.[0]?.node;
  const blogHandle = postData?.[0]?.handle;
  const { title, author, image, publishedAt, contentHtml, handle: articleHandle } = post || {};
  const blogPostUrl = `/blogs/${blogHandle}/${articleHandle}`;

  return (
    <Container className={clsx('bg-casabella-offwhite p-20', className)}>
      <Card key={post.id} className="border-none">
        <CardHeader>
          <h2 className="mb-4 text-center font-sans text-4xl uppercase tracking-widest">
            From The Blog
          </h2>
          <div className="flex justify-center gap-4">
            <div className="flex items-center gap-1">
              <UserIcon className="inline-block w-5" />
              <div>{author?.name}</div>
            </div>
            <div className="flex items-center gap-1">
              <CalendarIcon className="inline-block w-5" />
              <div>{formatDateToDayMonthYear(publishedAt)}</div>
            </div>
          </div>
        </CardHeader>
        <CardContent className="flex gap-24">
          <div className="basis-1/2">
            {image && (
              <Image
                src={image?.src}
                alt={image.altText || 'Blog Post Image'}
                layout="responsive"
                width={700}
                height={475}
              />
            )}
          </div>
          <div className="basis-1/2">
            <CardTitle className="text-xl font-normal uppercase tracking-normal lg:text-4xl">
              {title}
            </CardTitle>
            <Prose className="line-clamp-[12]" html={contentHtml} />
            <Button href={blogPostUrl}>Read More</Button>
          </div>
        </CardContent>
        <CardFooter className="justify-between"></CardFooter>
      </Card>
    </Container>
  );
}
