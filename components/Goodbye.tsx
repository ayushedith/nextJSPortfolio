import React from 'react';
import TextReveal from '@/components/ui/text-reveal';

const Goodbye: React.FC = () => {
  return (
    <div className="z-10 flex min-h-64 items-center justify-center rounded-lg bg-black">
      <TextReveal text="Goodbye" />
    </div>
  );
};

export default Goodbye;
// TODO: add animation