'use client';

import React, { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
type VideoPlayerProps = {
  videoUrl?: string;
  nextLessonSlug?: string | null;
  className?: string;
};

const VideoPlayer = ({ videoUrl, nextLessonSlug, className }: VideoPlayerProps) => {
  const router = useRouter();
  const [isSticky, setIsSticky] = useState(false);

  const handleVideoEnded = () => {
    if (nextLessonSlug) {
      router.push(`/course/${nextLessonSlug}`);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return videoUrl ? (
    <div
      className={`w-full flex items-center justify-center px-3 lg:px-0 rounded overflow-hidden z-20 transition-all ${className ?? ''}`}
      data-sticky={isSticky}>
      <video
        width="320"
        height="240"
        controls
        autoPlay
        className={`aspect-video object-cover w-full rounded ${isSticky ? 'rounded-none lg:rounded' : ''}`}
        onEnded={handleVideoEnded}>
        <source src={videoUrl} type="video/webm" />
        Your browser does not support the video tag.
      </video>
    </div>
  ) : (
    <div className="text-center text-2xl font-bold">No video available</div>
  );
};

export default VideoPlayer;
