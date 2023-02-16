import Image from 'next/image';
import Carousel from 'nuka-carousel';
import * as React from 'react';

import data from '@/components/carousel/CarouselData';

export type Promotion = {
  text: string;
  path: string;
};

export default function WrappedCarousel() {
  const promotions = data.map(
    // eslint-disable-next-line @next/next/no-img-element
    (item, _) => (
      <div className='relative h-48 md:h-80 lg:h-[46rem]' key={item.text}>
        <Image src={item.path} alt={item.text} fill={true} />
      </div>
    )
  );

  return (
    <div className='mx-auto'>
      <Carousel
        {...promotions}
        defaultControlsConfig={{
          nextButtonClassName: 'arrowNext',
          nextButtonText: '',
          prevButtonClassName: 'arrowPrev',
          prevButtonText: '',
          pagingDotsStyle: {
            fill: 'green',
          },
        }}
      >
        {promotions}
      </Carousel>
    </div>
  );
}
