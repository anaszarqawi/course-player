import { useEffect, useRef, useState } from 'react';

type CourseProgressProps = {
  progress: number; // نسبة التقدم (0 - 100)
};

const CourseProgress = ({ progress }: CourseProgressProps) => {
  const progressRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.5 } // يبدأ التفاعل عندما يظهر 50% من العنصر
    );

    if (progressRef.current) {
      observer.observe(progressRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative w-full mt-16 mb-16">
      {/* Progress Bar */}
      <div
        ref={progressRef}
        className="w-full h-2 bg-gray-200 rounded-full overflow-hidden opacity-0 transition-opacity duration-700 ease-out"
        style={{ opacity: isVisible ? 1 : 0 }}>
        <div
          className="h-full bg-teal-500 transition-all duration-[1200ms] ease-out rounded-full"
          style={{ width: isVisible ? `${progress}%` : '0%' }}
        />
      </div>

      {/* "You" Indicator */}
      <div
        className="absolute -top-14 translate-x-[-50%] flex flex-col items-center transition-all duration-[1200ms] ease-out"
        style={{ left: isVisible ? `${progress}%` : '0%' }}>
        <div className="w-10 h-10 border-2 border-gray-400 text-blue-800 text-xs flex items-center justify-center rounded-full shadow-md">You</div>
        <div className="w-0 h-0 border-l-4 border-r-4 border-t-6 border-transparent border-t-gray-400 mt-[3px]" />
      </div>

      {/* Percentage Under the Bar */}
      <div
        className="absolute top-4 text-sm text-blue-800 transition-all duration-[1200ms] ease-out"
        style={{ left: isVisible ? `${progress}%` : '0%', transform: 'translateX(-50%)' }}>
        {progress}%
      </div>
    </div>
  );
};

export default CourseProgress;
