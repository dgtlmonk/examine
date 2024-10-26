'use client';

import { Button } from '@/components/ui/button';
import {
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from '@/components/ui/sheet';
import { useQueryParams } from '@/hooks/useQueryParams';
import { BookmarkCheck, ChevronLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { FormEvent, useRef, useState, useTransition } from 'react';
import PageCollectionCreateState from './PageCollectionCreateState';
import PageCollectionEmptyState from './PageCollectionEmptyState';
import PageCollectionsList from './PageCollectionsList';
import { TPageCollection } from './types';

export default function DialogContent({ context }: { context: string }) {
  const [collections, setCollections] = useState<TPageCollection[] | []>([]);
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState<string | null>(null);
  const [isCreateState, setIsCreateState] = useState(false);
  const { replace } = useRouter();
  const { params, pathname } = useQueryParams();

  const isEmptyState = !collections.length && !isCreateState;
  const collectionNameRef = useRef<HTMLInputElement>(null);

  const _onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const saveToNewCollection = formData.get('saveToNewCollection');

    startTransition(async () => {
      // server action stub
      await new Promise(resolve => setTimeout(resolve, 700));
      const collectionName = formData.get('collectionName');

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
          isSubscribed: saveToNewCollection === 'on',
        },
      ]);

      setIsCreateState(false);
    });
  };

  function _onCreateCollection() {
    setIsCreateState(true);
  }

  function _onBackToCollections() {
    setIsCreateState(false);
  }

  function _onCleanUp() {
    setError(null);
    setIsCreateState(false);
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

  function _onPageUnsave() {
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
        <SheetTitle className="flex items-center gap-1  font-semibold text-primary text-ellipsis">
          {isCreateState && (
            <button
              className="p-1 text-slate-500 hover:text-slate-700 hover:bg-slate-100 rounded-md flex items-center"
              onClick={_onBackToCollections}
            >
              <ChevronLeft color="currentColor" />
            </button>
          )}

          <p className="text-ellipsis whitespace-nowrap truncate">
            Saved Page - {context}
          </p>
        </SheetTitle>
      </SheetHeader>

      <div className="flex flex-col mt-2 ">
        {!isCreateState && (
          <div className="transition-opacity ease-in-out delay-150 duration-300 flex w-full flex-col justify-center">
            <span className="flex items-center justify-between text-primary">
              Saved
              <SheetClose asChild>
                <Button variant="ghost" size="icon" onClick={_onPageUnsave}>
                  <BookmarkCheck strokeWidth={1.5} className="text-blue-500" />
                </Button>
              </SheetClose>
            </span>
          </div>
        )}

        {isEmptyState && (
          <PageCollectionEmptyState onCreateCollection={_onCreateCollection} />
        )}

        {isCreateState && (
          <PageCollectionCreateState
            onSubmit={_onSubmit}
            isPending={isPending}
            setFormError={setError}
            error={error}
            collectionNameRef={collectionNameRef}
          />
        )}

        {!isCreateState && (
          <PageCollectionsList
            collections={collections}
            onCreateCollection={_onCreateCollection}
            onCollectionSubscribe={_onCollectionSubscribe}
          />
        )}
      </div>
    </SheetContent>
  );
}
