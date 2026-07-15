import React from 'react';
import '../styles/Skeleton.module.css';

const Skeleton = ({
  variant = 'text',
  width = '100%',
  height = 'auto',
  count = 1,
  circle = false,
  className = '',
}) => {
  const skeletons = [];

  for (let i = 0; i < count; i++) {
    const className_ = `skeleton skeleton-${variant} ${circle ? 'skeleton-circle' : ''} ${className}`.trim();
    
    skeletons.push(
      <div
        key={i}
        className={className_}
        style={{
          width,
          height: circle ? width : height,
        }}
        aria-hidden="true"
      />
    );
  }

  return count === 1 ? skeletons[0] : <div className="skeleton-group">{skeletons}</div>;
};

// Common presets
export const SkeletonText = (props) => <Skeleton variant="text" {...props} />;
export const SkeletonButton = (props) => <Skeleton variant="button" width="100px" height="40px" {...props} />;
export const SkeletonAvatar = (props) => <Skeleton variant="avatar" width="40px" height="40px" circle {...props} />;
export const SkeletonCard = (props) => <Skeleton variant="card" height="200px" {...props} />;

export default Skeleton;
