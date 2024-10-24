'use client';

import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { useQueryParams } from '@/hooks/useQueryParams';
import { Bookmark, BookmarkCheck } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function SavePage() {
  const { replace } = useRouter();
  const { params, pathname } = useQueryParams();
  const isSaved = params.get('save') === '1';

  /**
   * Move page state to query params
   * This is not ideal for all cases,  but for demo purposes it's fine
   *
   * Intention: Shareability -
   */
  const toggleSave = () => {
    // TODO: add optimistic update
    // TODO: add toast on save success/error
    if (isSaved) {
      params.set('save', '0');
    } else {
      params.set('save', '1');
    }

    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="secondary" onClick={toggleSave}>
          {isSaved ? (
            <>
              <BookmarkCheck />
              Page Saved
            </>
          ) : (
            <>
              <Bookmark />
              Save Page
            </>
          )}
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Saved Page - Creatine</SheetTitle>
          <SheetDescription className="flex w-full flex-col justify-center">
            <span className="text-center text-primary">
              You don&apos;t have any collections yet.
            </span>
            <span className="flex w-full justify-center py-4">
              <Button variant="default" className="w-min">
                Create Collection
              </Button>
            </span>
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}
