'use client';
import { Button } from '@/components/ui/button';
import { MinusCircleIcon, PlusCircle } from 'lucide-react';
import { useState } from 'react';

export default function PageCollectionItem({
  name,
  isSubscribed = false,
  onCollectionSubscribe,
}: {
  name: string;
  isSubscribed?: boolean;
  onCollectionSubscribe: () => void;
}) {
  const [isToggled, setIsToggled] = useState(() => isSubscribed);

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
    onCollectionSubscribe();
  };

  return (
    <li data-cy="collection-item" className="flex justify-between items-center text-primary">
      <span className="-tracking-2">{name}</span>
      <Button variant="ghost" className="group" onClick={handleToggle}>
        {status}
      </Button>
    </li>
  );
}
