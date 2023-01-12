import React from 'react';
import { styled } from '../../stitches.config';

const StyledBar = styled('div', {
  background: '$$color',
  flexBasis: '$$width',
  '&:first-of-type': {
    borderBottomLeftRadius: '$radii$default',
    borderTopLeftRadius: '$radii$default',
  },
  '&:last-of-type': {
    borderBottomRightRadius: '$radii$default',
    borderTopRightRadius: '$radii$default',
  },
  '&:before': {
    content: 'attr(data-tooltip)',
    position: 'absolute',
    top: '$tooltip$y',
    left: '$tooltip$x',
    transform: 'translateY(-100%)',
    width: 'max-content',
    padding: '1em',
    borderRadius: '$radii$default',
    fontSize: '12px',
    background: '$colors$secondary',
    color: '$colors$textOnLight',
    zIndex: '10',
    display: 'none',
  },
  '&:hover:before': {
    display: 'block',
  },
});

export function Bar({ color, width, tooltip }) {
  return (
    <StyledBar
      onMouseMove={(e) => {
        document.documentElement.style.setProperty(
          '--tooltip-y',
          `${e.clientY}px`
        );
        document.documentElement.style.setProperty(
          '--tooltip-x',
          `${e.clientX}px`
        );
      }}
      css={{
        $$color: `${color}`,
        $$width: `${width}`,
      }}
      data-tooltip={tooltip}
    />
  );
}
