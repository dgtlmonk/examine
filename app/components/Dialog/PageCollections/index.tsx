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
    // This is not a true save, it just simulates the save state
    // for the purposes of this dialog
    if (!isSaved) {
      params.set('save', '1');
    }

    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          data-cy="save-page-btn"
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
