'use client';

import { useParams } from 'next/navigation';
import papers from '../../data/papers';
import Image from 'next/image';
import Link from 'next/link';

const PaperPage = () => {
  const params = useParams();
  const id = Array.isArray(params.id) ? params.id[0] : params.id;

  const paper = papers.find(paper => paper.id === id);

  if (!paper) {
    return (
      <div className='absolute inset-0 flex items-center justify-center'>
        <div className='text-center'>
          <h1 className='text-2xl font-bold'>Paper not found</h1>
          <Link href="/" className='mt-4 inline-block text-maroon font-bold'>
            ← Go to Research
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className='absolute inset-0'>
      <div className='overflow-y-auto h-full pt-24 lg:pt-32'>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 font-sans text-gray-800 leading-relaxed">
          <h1 className='text-3xl sm:text-4xl font-bold mb-6 text-gray-900'>{paper.title}</h1>

          {/* Image container with reduced height */}
          <div className='w-full mb-8'>
            <div className='relative h-48 sm:h-64 md:h-72 lg:h-80 xl:h-96 w-full overflow-hidden'>
              <Image
                src={paper.imageSrc}
                alt={paper.title}
                fill
                className='object-cover'
                priority
              />
            </div>
          </div>

          <div className='w-full'>
            <p className='mb-4 text-lg'>{paper.content}</p>
            {paper.extendedContent && (
              <div className='mt-6 space-y-4 text-lg'>
                {paper.extendedContent.map((paragraph, index) => (
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

export default PaperPage;