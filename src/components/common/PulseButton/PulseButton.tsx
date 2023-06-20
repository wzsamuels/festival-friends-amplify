// PulseButton.tsx
import React, { useRef } from "react";

interface PulseButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const PulseButton: React.FC<PulseButtonProps> = ({
  children,
  className = "",
  onClick,
}) => {
  const pulseEffectRef = useRef<HTMLSpanElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (onClick) {
      onClick(event);
    }

    if (pulseEffectRef.current) {
      const pulseEffect = pulseEffectRef.current;

      if(!pulseEffect) return;

      // Add the animate-pulse-effect class when clicked
      pulseEffect.classList.add("animate-pulse-effect");

      // Reset the animation to allow multiple clicks
      pulseEffect.addEventListener("animationend", () => {
        pulseEffect.classList.remove("animate-pulse-effect");
      });
    }
  };

  return (
    <button
      onClick={handleClick}
      className={`relative overflow-hidden  py-2 px-4 rounded ${className}`}
    >
      <span
        ref={pulseEffectRef}
        className="pulse-effect absolute inset-0 opacity-0 rounded-2xl bg-[#70928b] origin-center"
      ></span>
      {children}
    </button>
  );
};

export default PulseButton;
