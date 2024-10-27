import { Button } from '@/components/ui/button';

export default function PageCollectionEmptyState({
  onCreateCollection,
}: {
  onCreateCollection: () => void;
}) {
  return (
    <div className="flex flex-col w-full gap-4 items-center justify-center py-4">
      <span
        className="text-center text-slate-500"
        data-cy="empty-collection-message"
      >
        You don&apos;t have any collections yet.
      </span>

      <Button
        variant="default"
        className="w-min font-medium"
        onClick={onCreateCollection}
        data-cy="create-collection-btn"
      >
        Create Collection
      </Button>
    </div>
  );
}
