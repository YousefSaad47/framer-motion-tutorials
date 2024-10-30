'use client';
import React, { useState, Children, cloneElement } from 'react';
import { Repeat } from 'lucide-react';

interface AnimatedCardsProps {
  children: React.ReactNode;
}

interface CardProps {
  title: string;
  children: React.ReactNode;
  onRepeat: () => void;
}

const AnimationCard = ({ title, children, onRepeat }: CardProps) => (
  <div className="h-full flex flex-col bg-white shadow-md transition-shadow duration-200 hover:shadow-lg">
    <div className="flex items-center justify-between border-b bg-gray-50 p-4">
      <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
      <button
        onClick={onRepeat}
        className="rounded-full p-2 hover:bg-gray-100 active:bg-gray-200 
                 transition-colors focus:outline-none 
                 focus:ring-2 focus:ring-blue-500"
        title="Repeat animation"
      >
        <Repeat className="w-5 h-5 text-gray-600" />
      </button>
    </div>
    <div className="flex-1 bg-gray-900 p-6">
      <div className="flex items-center justify-center h-[300px]">
        {children}
      </div>
    </div>
  </div>
);

export const AnimatedCards = ({ children }: AnimatedCardsProps) => {
  const childrenArray = Children.toArray(children);
  const [animationKeys, setAnimationKeys] = useState<string[]>(
    childrenArray.map((_, i) => `animation-${i}-0`)
  );

  const handleRepeat = (index: number) => {
    setAnimationKeys((prev) => {
      const newKeys = [...prev];
      newKeys[index] = `animation-${index}-${Date.now()}`;
      return newKeys;
    });
  };

  return (
    <div className="p-8 w-full max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {childrenArray.map((child, index) => {
          const componentName =
            (child as any)?.type?.name || `Animation ${index + 1}`;
          return (
            <AnimationCard
              key={index}
              title={componentName}
              onRepeat={() => handleRepeat(index)}
            >
              {cloneElement(child as React.ReactElement, {
                key: animationKeys[index],
              })}
            </AnimationCard>
          );
        })}
      </div>
    </div>
  );
};

export default AnimatedCards;
