'use client';

import { useParams } from 'next/navigation';
import articles from '../../data/articles';
import Image from 'next/image';
import Link from 'next/link';

const ArticlePage = () => {
  const params = useParams();
  const id = Array.isArray(params.id) ? params.id[0] : params.id;

  const article = articles.find(article => article.id === id);

  if (!article) {
    return (
      <div className='relative z-40 min-h-screen flex items-center justify-center'>
        <div className='text-center'>
          <h1 className='text-2xl font-bold'>Article not found</h1>
          <Link href="/news" className='mt-4 inline-block text-maroon font-bold'>
            ← Back to News
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className='relative z-40 min-h-screen bg-white'>
      <div className='overflow-y-auto h-full pt-24 lg:pt-32'>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 font-sans text-gray-800 leading-relaxed">
          <h1 className='text-3xl sm:text-4xl font-bold mb-6 text-gray-900'>{article.title}</h1>

          {/* Image container with reduced height */}
          <div className='w-full mb-8'>
            <div className='relative h-48 sm:h-64 md:h-72 lg:h-80 xl:h-96 w-full overflow-hidden'>
              <Image
                src={article.imageSrc}
                alt={article.title}
                fill
                className='object-cover'
                priority
              />
            </div>
          </div>

          <div className='w-full'>
            <p className='mb-4 text-lg'>{article.content}</p>
            {article.extendedContent && (
              <div className='mt-6 space-y-4 text-lg'>
                {article.extendedContent.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            )}
          </div>

          <Link href="/news" className='mt-8 inline-block text-maroon font-bold hover:text-maroon-dark transition-colors'>
            ← Back to News
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ArticlePage;