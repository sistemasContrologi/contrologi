'use client'; // Necesario si usas Next.js App Router (React Server Components)

import { useAnimatedCounter } from '@/config/hooks/useAnimatedCounter';
import React, { useEffect, useState } from 'react';

interface CircularCounterProps {
  percentage: number;
  topText: string;
  bottomText: string;
  size?: number;
  colorClass?: string; // Ej: 'text-red-600'
}

export const CircularCounter: React.FC<CircularCounterProps> = ({
  percentage,
  topText,
  bottomText,
  size = 240,
  colorClass = 'text-primary'
}) => {
  const animationDuration = 3500;
  
  // 1. Animar el Número: Usamos el custom hook
  // El número que se muestra cuenta de 0 a 'percentage'
  const displayedCount = useAnimatedCounter(percentage, animationDuration);

  // 2. Animar el Círculo: Estado para activar la transición CSS
  const [progressForSvg, setProgressForSvg] = useState(0);

  useEffect(() => {
    // Pequeño timeout para asegurar que el navegador renderice el estado inicial (0%)
    // antes de aplicar la clase de transición al valor final.
    const timer = setTimeout(() => {
      setProgressForSvg(percentage);
    }, 500);
    return () => clearTimeout(timer);
  }, [percentage]);


  // --- Cálculos del SVG ---
  const strokeWidth = 12;
  const radius = 50;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (progressForSvg / 100) * circumference;


  return (
    <div 
      className="relative flex items-center justify-center font-sans select-none" 
      style={{ width: size, height: size }}
    >
      {/* SVG del Gráfico */}
      <svg
        className="transform -rotate-90 w-full h-full"
        viewBox="0 0 124 124"
      >
        
        <circle
          className="text-gray-200"
          stroke="currentColor"
          strokeWidth={strokeWidth}
          fill="transparent"
          r={radius}
          cx="62"
          cy="62"
        />

        <circle
          className={`${colorClass} transition-all duration-3500 ease-out`}
          stroke="currentColor"
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          fill="transparent"
          r={radius}
          cx="62"
          cy="62"
          strokeLinecap="butt" 
        />
      </svg>

      {/* Contenido de Texto Centrado */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center leading-none z-10">
        <span className="text-secondary font-bold text-xl mb-1">
          {topText}
        </span>
        
        {/* Aquí mostramos el número animado */}
        <span className={`text-4xl md:text-5xl font-bold ${colorClass} tabular-nums`}>
          {displayedCount}%
        </span>
        
        <span className="text-secondary font-bold text-xl mt-1">
          {bottomText}
        </span>
      </div>
    </div>
  );
};