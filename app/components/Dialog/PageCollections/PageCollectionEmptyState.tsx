import { Button } from '@/components/ui/button';

export default function PageCollectionEmptyState({
  onCreateCollection,
}: {
  onCreateCollection: () => void;
}) {
  return (
    <div className="flex flex-col w-full gap-4 items-center justify-center py-4">
      <span className="text-center text-slate-500">
        You don&apos;t have any collections yet.
      </span>

      <Button
        variant="default"
        className="w-min font-medium"
        onClick={onCreateCollection}
      >
        Create Collection
      </Button>
    </div>
  );
}
