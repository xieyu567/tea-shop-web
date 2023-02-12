import Image from 'next/image';
import Carousel from 'nuka-carousel';
import * as React from 'react';

import data from '@/components/carousel/CarouselData';

export type Promotion = {
  text: string;
  url: string;
};

export default function WrappedCarousel() {
  const promotions = data.map(
    // eslint-disable-next-line @next/next/no-img-element
    (item, _) => (
      <Image
        src={item.url}
        key={item.text}
        alt={item.text}
        style={{
          width: '100%',
          height: 400,
        }}
      />
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
