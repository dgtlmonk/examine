'use client';

import { Button } from '@/components/ui/button';

import { Input } from '@/components/ui/input';
import { SheetContent, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import { BookmarkCheck, Check, Trash2 } from 'lucide-react';
import { FormEvent, useRef, useState, useTransition } from 'react';
import CollectionItem from './CollectionItem';

export default function DialogContent({ context }: { context: string }) {
  const [collections, setCollections] = useState<string[]>([
    'for mom',
    'for dad',
  ]);
  const [isPending, startTransition] = useTransition();
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // mock submit
    startTransition(async () => {
      await new Promise(resolve => setTimeout(resolve, 1000));
      return;
    });
  };

  return (
    <SheetContent>
      <SheetHeader>
        <SheetTitle className="flex font-semibold text-primary">
          Saved Page - {context}
        </SheetTitle>
      </SheetHeader>
      <div className="flex flex-col mt-2 ">
        <div className="flex w-full flex-col justify-center">
          <span className="flex items-center justify-between text-primary">
            Saved
            <Button variant="ghost" size="icon">
              <BookmarkCheck strokeWidth={1.5} className="text-blue-500" />
            </Button>
          </span>
        </div>
        {/* no collections */}
        <div className="flex flex-col w-full gap-4 items-center justify-center py-4">
          <span className="text-center text-slate-500">
            You don&apos;t have any collections yet.
          </span>

          <Button variant="default" className="w-min font-medium">
            Create Collection
          </Button>
        </div>

        {/* new collection */}
        <form
          className="margin-0 flex-col gap-2"
          ref={formRef}
          onSubmit={handleSubmit}
        >
          <Input
            autoFocus
            type="text"
            className="text-[1rem]"
            placeholder="collection name ..."
            disabled={isPending}
          />
          <div className="flex gap-2 mt-4 justify-between w-full">
            <Button className="group w-full " variant="secondary">
              <Trash2 className=" text-slate-500 sm:text-slate-400 group-hover:text-slate-600" />
            </Button>
            <Button className="group w-full" variant="secondary" type="submit">
              <Check className="group text-slate-500 sm:text-slate-400 group-hover:text-slate-600" />
            </Button>
          </div>
        </form>
        {/* collections */}
        {collections.length ? (
          <div className="flex flex-col gap-2">
            <div className="flex justify-between items-center mt-6">
              <span className="text-gray-600 font-semibold"> Collections</span>
              <Button variant="ghost">New Collection</Button>
            </div>
            <div className="-mt-2">
              <ul className="">
                {collections.map(collection => (
                  <CollectionItem key={collection} name={collection} />
                ))}
              </ul>
            </div>
          </div>
        ) : null}
      </div>
    </SheetContent>
  );
}
