'use client';

import { Button } from '@/components/ui/button';
import {
  Sheet as Dialog,
  SheetTrigger as DialogTrigger,
} from '@/components/ui/sheet';
import { useQueryParams } from '@/hooks/useQueryParams';
import { Bookmark, BookmarkCheck } from 'lucide-react';
import { useRouter } from 'next/navigation';
import DialogContent from './DialogContent';

export default function PageCollectionsDialog({
  context,
}: {
  context: string;
}) {
  const { replace } = useRouter();
  const { params, pathname } = useQueryParams();

  const isSaved = params.get('save') === '1';

  const status = isSaved ? (
    <>
      <BookmarkCheck
        data-cy="bookmark-check-icon"
        strokeWidth={1.5}
        className="text-blue-500"
      />
      Page Saved
    </>
  ) : (
    <>
      <Bookmark data-cy="bookmark-icon" />
      Save Page
    </>
  );

  const toggleSave = () => {
    // Simulates the save state for the Demo Page
    if (!isSaved) {
      params.set('save', '1');
    }

    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          data-cy="save-page-to-collection-btn"
          aria-label="Save Page"
          variant="secondary"
          onClick={toggleSave}
        >
          {status}
        </Button>
      </DialogTrigger>
      <DialogContent context={context} />
    </Dialog>
  );
}
