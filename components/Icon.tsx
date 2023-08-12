import React from 'react';
import iconsPath from 'bootstrap-icons/bootstrap-icons.svg';

export { Icon };

type IconProps = {
  src: string;
  width: number;
  height: number;
  className?: string;
};
function Icon({ src, width, height, className }: IconProps) {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      style={{ minWidth: `${width}px`, minHeight: `${height}px` }}
      fill="currentColor"
    >
      <use xlinkHref={`${iconsPath}#${src}`} />
    </svg>
  );
}
