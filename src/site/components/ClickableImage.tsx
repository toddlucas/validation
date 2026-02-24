'use client';

import { useEffect, useState } from 'react';

interface ClickableImageProps {
  src: string;
  alt: string;
  className?: string;
}

export function ClickableImage({ src, alt, className }: ClickableImageProps) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [open]);

  return (
    <>
      <img
        src={src}
        alt={alt}
        className={`cursor-zoom-in transition-opacity hover:opacity-90 ${className ?? ''}`}
        onClick={() => setOpen(true)}
      />
      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-sm p-4"
          onClick={() => setOpen(false)}
        >
          <button
            className="absolute top-4 right-5 text-white/60 hover:text-white text-3xl font-light leading-none transition-colors"
            onClick={() => setOpen(false)}
            aria-label="Close"
          >
            ✕
          </button>
          <img
            src={src}
            alt={alt}
            className="max-w-full max-h-[90vh] rounded-lg shadow-2xl object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  );
}
