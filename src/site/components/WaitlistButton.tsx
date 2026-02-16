'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { WaitlistModal } from '@/components/WaitlistModal';

interface WaitlistButtonProps {
  size?: 'default' | 'sm' | 'lg' | 'icon' | 'xs' | 'icon-xs' | 'icon-sm' | 'icon-lg';
  className?: string;
  accentColor?: string;
  source?: string;
  children: React.ReactNode;
}

export function WaitlistButton({ 
  size = 'lg', 
  className, 
  accentColor, 
  source,
  children 
}: WaitlistButtonProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Button
        size={size}
        className={className}
        style={accentColor ? { backgroundColor: accentColor } : undefined}
        onClick={() => setIsModalOpen(true)}
      >
        {children}
      </Button>
      <WaitlistModal
        open={isModalOpen}
        onOpenChange={setIsModalOpen}
        accentColor={accentColor}
        source={source}
      />
    </>
  );
}
