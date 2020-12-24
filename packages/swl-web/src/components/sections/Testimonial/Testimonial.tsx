import { FC } from 'react';
import Image from 'next/image';
import { Row } from '../..';

interface TestimonialProps {}

const Testimonial: FC<TestimonialProps> = ({}) => {
  return (
    <Row
      alignItems='center'
      as='section'
      className='py-12 bg-gray-50 overflow-hidden md:py-20 lg:py-24'
      direction='col'
      justifyContent='center'>
      <blockquote className='mt-10'>
        <div className='max-w-3xl mx-auto text-center text-2xl leading-9 font-medium text-gray-900'>
          <p>
            &ldquo;It was an absolute pleasure to work with SovereignWeb at
            Idean UK. I was impressed with how they were able to make immediate
            improvements in a clear, thoughtful and conscientious manner. Our
            clients also really took to the SovereignWeb team, their excellent
            communication skills and ability to engage stakeholders made him a
            real asset for demos and collaboration sessions.&rdquo;
          </p>
        </div>
        <footer className='mt-8'>
          <div className='md:flex md:items-center md:justify-center'>
            <div className='md:flex-shrink-0'>
              <Image
                className='mx-auto h-10 w-10 rounded-full'
                height={60}
                width={60}
                src='/jw_head.jpg'
                alt='Image of Josh Ward.'
              />
            </div>
            <div className='mt-3 text-center md:mt-0 md:ml-4 md:flex md:items-center'>
              <div className='text-base font-medium text-gray-900'>
                Josh Ward
              </div>

              <svg
                className='hidden md:block mx-1 h-5 w-5 text-yellow-400'
                fill='currentColor'
                viewBox='0 0 20 20'>
                <path d='M11 0h3L9 20H6l5-20z' />
              </svg>

              <div className='text-base font-medium text-gray-500'>
                Software Test Consultant at Sogeti (Seconded to Idean UK)
              </div>
            </div>
          </div>
        </footer>
      </blockquote>
    </Row>
  );
};

export default Testimonial;
