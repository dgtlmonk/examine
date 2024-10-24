'use client';

import SavePageDialogTrigger from '@/components/Dialog/SavePage';

export default function Demo() {
  return (
    <div className="bg-examine-purple-500 p-6">
      <div className="flex w-full justify-between">
        <h1 className="font-lora text-4xl capitalize text-white">Creatine</h1>
        <SavePageDialogTrigger />
      </div>
    </div>
  );
}
