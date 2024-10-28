'use client';

import {
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from '@/components/ui/sheet';
import { Switch } from '@/components/ui/switch';
import { useQueryParams } from '@/hooks/useQueryParams';
import { BookmarkCheck } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { FormEvent, useRef, useState, useTransition } from 'react';
import PageCollectionCreateDialog from './PageCollectionCreateDialog';
import PageCollectionsList from './PageCollectionsList';
import { TPageCollection } from './types';
export default function PageDialogContent({ context }: { context: string }) {
  const [collections, setCollections] = useState<TPageCollection[] | []>([]);
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState<string | null>(null);
  const { replace } = useRouter();
  const { params, pathname } = useQueryParams();

  const collectionNameRef = useRef<HTMLInputElement>(null);
  const createCollectionTriggerRef = useRef<HTMLButtonElement>(null);

  const _onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    startTransition(async () => {
      // server action stub
      await new Promise(resolve => setTimeout(resolve, 700));
      const collectionName = formData.get('collectionName');
      const saveToCollection = formData.get('saveToCollection');
      // minimal error check
      if (!collectionName) {
        setError('Collection name is required');
        return;
      }

      setCollections(prev => [
        ...prev,
        {
          id: crypto.randomUUID(),
          name: collectionName as string,
          isSubscribed: saveToCollection === 'on',
        },
      ]);
      createCollectionTriggerRef.current?.click();
    });
  };

  function _onCleanUp() {
    setError(null);
  }

  function _onCollectionSubscribe(collectionId: string) {
    setCollections(prevCollections => {
      const updatedCollections = prevCollections.map(collection =>
        collection.id === collectionId
          ? { ...collection, isSubscribed: !collection.isSubscribed }
          : collection,
      );

      return updatedCollections;
    });
  }

  function _onPageUnbookmark() {
    setCollections(prevCollections =>
      prevCollections.map(collection => ({
        ...collection,
        isSubscribed: false,
      })),
    );

    // unset save state
    params.set('save', '0');
    replace(`${pathname}?${params.toString()}`);
  }

  return (
    <SheetContent onAnimationEnd={_onCleanUp}>
      <SheetHeader>
        <SheetTitle className="-mt-2 flex items-center gap-1  font-semibold text-primary text-ellipsis">
          <p className="whitespace-nowrap truncate">Saved Page - {context}</p>
        </SheetTitle>
      </SheetHeader>

      <div className="flex flex-col gap-4">
        <div className="gap-1 flex w-full flex-col justify-center">
          <span
            data-cy="page-saved-text"
            className="flex items-center justify-between text-primary text-[.9rem]"
          >
            Saved
            <SheetClose asChild>
              <button
                aria-label="Unsave Page"
                data-cy="unsave-page-btn"
                onClick={_onPageUnbookmark}
                className="p-2 rounded-md hover:bg-slate-50"
              >
                <BookmarkCheck
                  data-cy="dialog-bookmark-check-icon"
                  strokeWidth={1.5}
                  className="text-blue-500"
                  width={24}
                  height={24}
                />
              </button>
            </SheetClose>
          </span>
          <span className="flex items-center justify-between text-primary text-[.9rem]">
            Get updates
            <Switch data-cy="get-updates-switch" defaultChecked={true} />
          </span>
        </div>

        <div className="flex justify-between items-center mt-2">
          <span className="text-gray-600 font-semibold"> Collections</span>
          <PageCollectionCreateDialog
            onSubmit={_onSubmit}
            isPending={isPending}
            setFormError={setError}
            error={error}
            collectionNameRef={collectionNameRef}
            triggerRef={createCollectionTriggerRef}
          />
        </div>

        <PageCollectionsList
          collections={collections}
          onCollectionSubscribe={_onCollectionSubscribe}
        />
      </div>
    </SheetContent>
  );
}
