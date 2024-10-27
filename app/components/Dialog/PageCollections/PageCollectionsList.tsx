import { Button } from '@/components/ui/button';
import PageCollectionItem from './PageCollectionItem';
import { TPageCollection } from './types';

export default function PageCollectionsList({
  collections,
  onCreateCollection,
  onCollectionSubscribe,
}: {
  collections: TPageCollection[];
  onCreateCollection: () => void;
  onCollectionSubscribe: (collectionId: string) => void;
}) {
  if (!collections?.length) {
    return null;
  }

  return (
    <div data-cy="collection-list" className="flex flex-col gap-2">
      <div className="flex justify-between items-center mt-2">
        <span className="text-gray-600 font-semibold"> Collections</span>
        <Button data-cy="create-collection-text-btn" variant="ghost" onClick={onCreateCollection}>
          New Collection
        </Button>
      </div>
      <div className="-mt-2">
        <ul className="">
          {collections.map(({ id, name, isSubscribed }) => (
            <PageCollectionItem
              key={id}
              name={name}
              isSubscribed={isSubscribed}
              onCollectionSubscribe={() => onCollectionSubscribe(id)}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}
