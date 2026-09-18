import { useEffect, useState } from "react"
import Skeleton from "react-loading-skeleton"

// Minimum time the skeleton stays visible, so the effect is
// noticeable even when images load instantly (e.g. from cache).
const MIN_SKELETON_TIME = 800

const SkeletonImage = ({ src, alt, ...imgProps }) => {
  const [imgLoaded, setImgLoaded] = useState(false);
  const [minTimePassed, setMinTimePassed] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setMinTimePassed(true), MIN_SKELETON_TIME);
    return () => clearTimeout(timer);
  }, []);

  // Cached images can finish loading before onLoad is attached,
  // so check `complete` as a fallback when the node mounts.
  const imgRef = (node) => {
    if (node && node.complete && node.naturalWidth > 0) {
      setImgLoaded(true);
    }
  };

  const showSkeleton = !imgLoaded || !minTimePassed;

  return (
    <div className={showSkeleton ? "skeleton-image is-loading" : "skeleton-image"}>

        { showSkeleton && <Skeleton className="skeleton-image-placeholder" />}

        <img
            ref={imgRef}
            src={src}
            alt={alt}
            {...imgProps}
            onLoad={() => setImgLoaded(true)} />
      
    </div>
  )
}

export default SkeletonImage
