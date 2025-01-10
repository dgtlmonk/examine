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
      data-cy="unsubscribe-icon"
      className="text-gray-400 group-hover:text-gray-600"
      strokeWidth={2}
      aria-hidden="true"
    />
  ) : (
    <PlusCircle
      data-cy="subscribe-icon"
      className="text-gray-400 group-hover:text-gray-600"
      strokeWidth={2}
      aria-hidden="true"
    />
  );

  const handleToggle = () => {
    setIsToggled(!isToggled);
    onCollectionSubscribe();
  };

  return (
    <li
      data-cy="collection-item"
      className="flex justify-between items-center text-primary"
    >
      <span className="-tracking-2">{name}</span>
      <Button
        aria-label={
          isToggled ? 'Remove Page from Collection' : 'Add Page to Collection'
        }
        data-cy="subscribe-toggle-btn"
        variant="ghost"
        className="group"
        onClick={handleToggle}
      >
        {status}
      </Button>
    </li>
  );
}
