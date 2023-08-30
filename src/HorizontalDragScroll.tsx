import React, { useRef, useState, MouseEvent, useEffect } from "react";

interface HorizontalDragScrollProps {
  children: React.ReactNode;
}

const HorizontalDragScroll: React.FC<HorizontalDragScrollProps> = ({
  children
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseStart = (e: MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;

    const startXVal = e.pageX - (containerRef.current?.offsetLeft || 0);
    const scrollLeftVal = containerRef.current?.scrollLeft || 0;

    setIsDragging(true);
    setStartX(startXVal);
    setScrollLeft(scrollLeftVal);
  };

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    if (!containerRef.current) return;
    e.preventDefault();

    const x = e.pageX - (containerRef.current?.offsetLeft || 0);
    const walk = x - startX; // ปรับค่าตามความเหมาะสม
    if (containerRef.current) {
      const newScrollLeft = scrollLeft - walk;
      containerRef.current.scrollLeft = newScrollLeft;
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  useEffect(() => {}, [isDragging]);

  return (
    <div
      ref={containerRef}
      className="horizontal-scroll-container"
      onMouseDown={handleMouseStart}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseLeave}
      style={{
        cursor: isDragging ? "grabbing" : "grab"
      }}
    >
      {children}
    </div>
  );
};

export default HorizontalDragScroll;
