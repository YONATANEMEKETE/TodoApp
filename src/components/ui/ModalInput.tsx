import React from 'react';
import { Input } from '@/components/ui/input';

const ModalInput = () => {
  return (
    <div className="bg-secondary rounded-md z-10 h-[20rem] w-[20rem] absolute top-[8rem] left-1/2 pt-8 px-6">
      <Input
        type="text"
        className="rounded-sm text-lg text-mysecondary font-detail font-bold"
      />
      <div className="flex items-center gap-x-2"></div>
    </div>
  );
};

export default ModalInput;
