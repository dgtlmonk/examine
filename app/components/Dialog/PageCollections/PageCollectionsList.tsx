import PageCollectionItem from './PageCollectionItem';
import { TPageCollection } from './types';

export default function PageCollectionsList({
  collections,
  onCollectionSubscribe,
}: {
  collections: TPageCollection[];
  onCollectionSubscribe: (collectionId: string) => void;
}) {
  return (
    <div className="flex flex-col gap-2">
      {!collections.length ? (
        <div
          data-cy="empty-collection-message"
          className="h-48  text-sm grid place-items-center text-slate-500"
        >
          You don&apos;t have any collections yet. <br />
          Add one by clicking &quot;New Collection&quot;
        </div>
      ) : null}
      <div className="-mt-2">
        <ul>
          {collections?.map(({ id, name, isSubscribed }) => (
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
