import React, { useState } from 'react';
import Image, { ImageProps } from 'next/image';

import cx from 'classnames';

type NextImageProps = {
  width: string | number;
  useSkeleton?: boolean;
  layout?: string;
  imgClassName?: string;
  blurClassName?: string;
  alt: string;
} & (
  | { width: string | number; height: string | number }
  | { layout: 'fill'; width?: string | number; height?: string | number }
) &
  ImageProps;

/**
 *
 * @description Must set width using `w-` className
 * @param useSkeleton add background with pulse animation, don't use it if image is transparent
 */
const NextImage: React.FC<NextImageProps> = ({
  src,
  alt,
  width,
  height,
  layout = 'intrinsic',
  useSkeleton = false,
  className,
  imgClassName,
  blurClassName,
  ...rest
}) => {
  const [status, setStatus] = useState(useSkeleton ? 'loading' : 'complete');
  const widthIsSet = className?.includes('w-') ?? false;

  return (
    <figure
      style={!widthIsSet ? { width: `${width}px` } : undefined}
      className={className}
    >
      <Image
        {...rest}
        src={src}
        width={width}
        height={height}
        alt={alt}
        layout={layout}
        onLoadingComplete={() => setStatus('complete')}
        className={cx(
          imgClassName,
          status === 'loading' && cx('animate-pulse', blurClassName)
        )}
      />
    </figure>
  );
};

export default NextImage;
