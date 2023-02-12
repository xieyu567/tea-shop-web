import * as React from 'react';

import WrappedCarousel from '@/components/carousel/Carousel';

import Header from '@/layout/Header';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {Header()}
      {WrappedCarousel()}
      {children}
    </>
  );
}
