'use client';
import { Button } from '@/components/ui/button';
import { MinusCircleIcon, PlusCircle } from 'lucide-react';
import { useState } from 'react';

export default function CollectionItem({
  name,
  isSaved = false,
}: {
  name: string;
  isSaved?: boolean;
}) {
  const [isToggled, setIsToggled] = useState(() => isSaved);

  const status = isToggled ? (
    <MinusCircleIcon
      className="text-gray-400 group-hover:text-gray-600"
      strokeWidth={2}
    />
  ) : (
    <PlusCircle
      className="text-gray-400 group-hover:text-gray-600"
      strokeWidth={2}
    />
  );

  const handleToggle = () => {
    setIsToggled(!isToggled);
  };

  return (
    <li className="flex justify-between items-center text-primary">
      <span className="-tracking-2">{name}</span>
      <Button variant="ghost" className="group" onClick={handleToggle}>
        {status}
      </Button>
    </li>
  );
}
