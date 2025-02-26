"use client";

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  beforeLabel?: string;
  afterLabel?: string;
}

export default function BeforeAfterSlider({
  beforeImage,
  afterImage,
  beforeLabel = "ÖNCE",
  afterLabel = "SONRA"
}: BeforeAfterSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  const handleMove = (clientX: number) => {
    if (!isDragging.current || !containerRef.current) return;

    const containerRect = containerRef.current.getBoundingClientRect();
    const position = ((clientX - containerRect.left) / containerRect.width) * 100;
    setSliderPosition(Math.min(Math.max(position, 0), 100));
  };

  const handleTouchMove = (e: TouchEvent) => {
    e.preventDefault(); // Sayfanın kaymasını engelle
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e: MouseEvent) => {
    handleMove(e.clientX);
  };

  const handleStartDragging = () => {
    isDragging.current = true;
  };

  const handleStopDragging = () => {
    isDragging.current = false;
  };

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Mouse olayları
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleStopDragging);
    
    // Touch olayları
    container.addEventListener('touchmove', handleTouchMove, { passive: false });
    document.addEventListener('touchend', handleStopDragging);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleStopDragging);
      
      container?.removeEventListener('touchmove', handleTouchMove);
      document.removeEventListener('touchend', handleStopDragging);
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      className="relative w-full h-[50vh] md:h-[600px] overflow-hidden select-none touch-none"
      onMouseDown={handleStartDragging}
      onTouchStart={handleStartDragging}
    >
      {/* "Önce" Resmi */}
      <div className="absolute inset-0">
        <Image
          src={beforeImage}
          alt="Önce"
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 80vw"
          priority
        />
        <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm text-white px-3 py-1 rounded text-sm md:text-base">
          {beforeLabel}
        </div>
      </div>

      {/* "Sonra" Resmi */}
      <div 
        className="absolute inset-0 overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
      >
        <Image
          src={afterImage}
          alt="Sonra"
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 80vw"
          priority
        />
        <div className="absolute top-4 left-4 bg-black/50 backdrop-blur-sm text-white px-3 py-1 rounded text-sm md:text-base">
          {afterLabel}
        </div>
      </div>

      {/* Slider Çizgisi ve Düğmesi */}
      <div 
        className="absolute top-0 bottom-0 w-0.5 bg-white cursor-col-resize"
        style={{ left: `${sliderPosition}%` }}
      >
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white/80 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center">
          <svg 
            className="w-4 h-4 text-gray-600 rotate-90" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M9 18L15 12L9 6"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}