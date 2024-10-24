'use client';

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/shared/sheet';
import { Button } from '@/components/shared/button';
import { Bookmark, BookmarkCheck } from 'lucide-react';
import { useRouter, useSearchParams } from 'next/navigation';
import { usePathname } from 'next/navigation';

export default function SavePage() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const params = new URLSearchParams(searchParams);
  const isSaved = params.get('save') === '1';

  /**
   * Move page state to query params
   * This is not ideal for all cases,  but for demo purposes it's fine
   */
  const toggleSave = () => {
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
          {isSaved ? <BookmarkCheck /> : <Bookmark />}
          Save Page
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Are you absolutely sure?</SheetTitle>
          <SheetDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}
