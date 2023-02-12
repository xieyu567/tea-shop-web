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
      <div className='relative h-96' key={item.text}>
        <Image src={item.path} alt={item.text} fill={true} />
      </div>
    )
  );

  return (
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
  );
}
