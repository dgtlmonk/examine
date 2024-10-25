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
      <BookmarkCheck strokeWidth={1.5} className="text-blue-500" />
      Page Saved
    </>
  ) : (
    <>
      <Bookmark />
      Save Page
    </>
  );

  const toggleSave = () => {
    // TODO: add optimistic update
    if (isSaved) {
      params.set('save', '0');
      // optionally, we can pass the context in query params - useful for sharing a link
      // params.set('page', context);
    } else {
      params.set('save', '1');
    }

    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="secondary" onClick={toggleSave}>
          {status}
        </Button>
      </DialogTrigger>
      <DialogContent context={context} />
    </Dialog>
  );
}
