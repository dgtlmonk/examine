import PageCollectionsDialog from '@/components/Dialog/PageCollections';

const page = 'Creatine';
export default function Demo() {
  return (
    <div className="bg-examine-purple-500 p-6">
      <div className="flex w-full justify-between">
        <h1 className="font-lora text-4xl capitalize text-white">{page}</h1>
        <PageCollectionsDialog context={page} />
      </div>
    </div>
  );
}
