import Image from 'next/image';
import Link from 'next/link';

interface FeaturedPaperProps {
    id: string;
    imageSrc: string;
    title: string;
}

const FeaturedPaper = ({ imageSrc, title, id }: FeaturedPaperProps) => {
    return (
        <div className='w-full lg:w-1/2 xl:w-1/3 border-2 border-solid p-6 border-gray-200 rounded-md hover:shadow-lg transition-shadow'>
            <div className='relative h-48 w-full mb-4'>
                <Image
                    src={imageSrc}
                    alt='Paper Image'
                    fill
                    className='object-cover rounded-md'
                />
            </div>
            <p className='text-lg font-medium mb-4'>{title}</p>
            <Link
                href={`/papers/${id}`}
                className='text-maroon hover:text-maroon-dark transition-colors duration-200 font-bold'
            >
                Read More →
            </Link>
        </div>
    );
};

export default FeaturedPaper;