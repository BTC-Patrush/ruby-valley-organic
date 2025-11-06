// components/SafeImage.tsx
'use client'; // ← Makes it a Client Component

import Image from 'next/image';
import { ComponentProps } from 'react';

type SafeImageProps = ComponentProps<typeof Image> & {
  fallbackSrc?: string;
};

export default function SafeImage({ fallbackSrc, ...props }: SafeImageProps) {
  return (
    <Image
      {...props}
      onError={(e) => {
        const img = e.target as HTMLImageElement;
        if (fallbackSrc) {
  img.src = fallbackSrc;
  img.srcset = '';
}
      }}
    />
  );
}