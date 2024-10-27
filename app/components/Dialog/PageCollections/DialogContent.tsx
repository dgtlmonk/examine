'use client';

import { Button } from '@/components/ui/button';
import {
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from '@/components/ui/sheet';
import { useQueryParams } from '@/hooks/useQueryParams';
import { BookmarkCheck, Check, ChevronLeft, Trash2 } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { FormEvent, useRef, useState, useTransition } from 'react';
import PageCollectionCreateState from './PageCollectionCreateState';
import PageCollectionEmptyState from './PageCollectionEmptyState';
import PageCollectionsList from './PageCollectionsList';
import { TPageCollection } from './types';
import { Switch } from '@/components/ui/switch';
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';

export default function PageDialogContent({ context }: { context: string }) {
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

        {/* create collection dialog */}
        <div className="flex justify-between items-center mt-2">
          <span className="text-gray-600 font-semibold"> Collections</span>
          <Dialog>
            <DialogTrigger asChild>
              <Button data-cy="create-collection-text-btn" variant="ghost">
                New Collection
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
              <DialogHeader>
                <DialogTitle>New Collection</DialogTitle>
              </DialogHeader>
              <div className="w-full">
                <form
                  data-cy="create-collection-form"
                  className="margin-0 flex-col gap-2"
                  onSubmit={_onSubmit}
                >
                  <Input
                    ref={collectionNameRef}
                    autoFocus
                    type="text"
                    name="collectionName"
                    data-cy="field-collection-name"
                    className=" mt-1"
                    placeholder="type collection name"
                    disabled={isPending}
                    onChange={() => setError(null)}
                    onKeyDown={e => {
                      if (e.key === 'Enter') {
                        e.preventDefault();
                        const form = e.currentTarget.form;
                        if (form) {
                          form.requestSubmit();
                        }
                      }
                    }}
                  />
                  {error && (
                    <span data-cy="create-error-message" className="text-red-500 text-sm">
                      {error}
                    </span>
                  )}

                  <div className="flex items-center space-x-2 pt-2">
                    <Checkbox
                      data-test-id="saveToNewCollection"
                      id="saveToNewCollection"
                      name="saveToNewCollection"
                      disabled={isPending}
                    />
                    <label
                      htmlFor="saveToNewCollection"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-slate-600"
                    >
                      Save page to new collection
                    </label>
                  </div>

                  <DialogFooter className="flex gap-2 mt-4 justify-between w-full">
                    <DialogClose asChild>
                      <Button type="button" className="group w-full " variant="secondary">
                        <Trash2 className=" text-slate-500 sm:text-slate-400 group-hover:text-slate-600" />
                      </Button>
                    </DialogClose>
                    <Button className="group w-full" variant="secondary" type="submit">
                      <Check className="group text-slate-500 sm:text-slate-400 group-hover:text-slate-600" />
                    </Button>
                  </DialogFooter>
                </form>
              </div>
            </DialogContent>
          </Dialog>
        </div>

        <PageCollectionsList
          collections={collections}
          onCreateCollection={_onCreateCollection}
          onCollectionSubscribe={_onCollectionSubscribe}
        />
      </div>
    </SheetContent>
  );
}
