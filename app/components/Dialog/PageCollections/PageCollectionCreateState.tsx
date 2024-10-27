import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Check, Trash2 } from 'lucide-react';

export default function PageCollectionCreateState({
  onSubmit,
  isPending,
  setFormError,
  error,
  collectionNameRef,
}: {
  onSubmit: (e: FormEvent<HTMLFormElement>) => void;
  isPending: boolean;
  setFormError: (error: string | null) => void;
  error: string | null;
  collectionNameRef: RefObject<HTMLInputElement>;
}) {
  return (
    <>
      <form
        data-cy="create-collection-form"
        className="margin-0 flex-col gap-2"
        onSubmit={onSubmit}
      >
        <Label
          className="font-semibold text-slate-600"
          htmlFor="collectionName"
        >
          New Collection
        </Label>
        <Input
          ref={collectionNameRef}
          autoFocus
          type="text"
          name="collectionName"
          data-cy="field-collection-name"
          className=" mt-1"
          placeholder="type collection name"
          disabled={isPending}
          onChange={() => setFormError(null)}
          onKeyDown={e => {
            if (e.key === 'Enter') {
              e.preventDefault();
              const form = e.currentTarget.form;
              if (form) {
                form.requestSubmit();
              }
            }
          }}
        />
        {error && (
          <span data-cy="create-error-message" className="text-red-500 text-sm">
            {error}
          </span>
        )}

        <div className="flex items-center space-x-2 pt-2">
          <Checkbox
            data-test-id="saveToNewCollection"
            id="saveToNewCollection"
            name="saveToNewCollection"
            disabled={isPending}
          />
          <label
            htmlFor="saveToNewCollection"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-slate-600"
          >
            Save page to new collection
          </label>
        </div>

        <div className="flex gap-2 mt-4 justify-between w-full">
          <Button type="button" className="group w-full " variant="secondary">
            <Trash2 className=" text-slate-500 sm:text-slate-400 group-hover:text-slate-600" />
          </Button>
          <Button className="group w-full" variant="secondary" type="submit">
            <Check className="group text-slate-500 sm:text-slate-400 group-hover:text-slate-600" />
          </Button>
        </div>
      </form>
    </>
  );
}
