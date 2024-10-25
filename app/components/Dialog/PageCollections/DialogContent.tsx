import { Button } from '@/components/ui/button';

import { SheetContent, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import { BookmarkCheck } from 'lucide-react';
import CollectionItem from './CollectionItem';

export default function DialogContent({ context }: { context: string }) {
  return (
    <SheetContent>
      <SheetHeader>
        <SheetTitle className="flex">Saved Page - {context}</SheetTitle>
      </SheetHeader>
      <div className="flex flex-col mt-4 gap-4">
        <div className="flex w-full flex-col justify-center">
          <span className="flex justify-between">
            <p>Saved</p>
            <BookmarkCheck strokeWidth={1.5} className="text-blue-500" />{' '}
          </span>
        </div>
        {/* no collections */}
        <div className="flex flex-col w-full gap-4 items-center justify-center py-4">
          <span className="text-center text-primary">
            You don&apos;t have any collections yet.
          </span>

          <Button variant="examine" className="w-min font-medium">
            Create Collection
          </Button>
        </div>
        {/* collections */}
        <div className="flex justify-between items-center">
          <span className="text-gray-600 font-medium">Collections</span>
          <Button variant="ghost">New Collection</Button>
        </div>
        <div>
          <ul className="flex flex-col gap-2 -mt-2">
            <CollectionItem name="Collection 1" />
            <CollectionItem name="Collection 1" />
            <CollectionItem name="Collection 1" />
            <CollectionItem name="Collection 1" />
          </ul>
        </div>
      </div>
    </SheetContent>
  );
}
