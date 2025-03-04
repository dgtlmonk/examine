import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { FormEvent, RefObject } from 'react';

export default function PageCollectionCreateDialog({
  onSubmit,
  isPending,
  setFormError,
  error,
  collectionNameRef,
  triggerRef,
}: {
  onSubmit: (e: FormEvent<HTMLFormElement>) => void;
  isPending: boolean;
  setFormError: (error: string | null) => void;
  error: string | null;
  collectionNameRef: RefObject<HTMLInputElement>;
  triggerRef: RefObject<HTMLButtonElement>;
}) {
  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <Button
            ref={triggerRef}
            data-cy="create-collection-text-btn"
            variant="ghost"
            aria-label="Create New Collection"
          >
            New Collection
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-md rounded-md">
          <DialogHeader>
            <DialogTitle>New Collection</DialogTitle>
            <DialogDescription>
              Create a new collection to organize your saved pages.
            </DialogDescription>
          </DialogHeader>
          <div className="w-full">
            <form
              data-cy="create-collection-form"
              className="margin-0 flex-col gap-2"
              onSubmit={onSubmit}
            >
              <Input
                ref={collectionNameRef}
                autoFocus
                type="text"
                name="collectionName"
                data-cy="field-collection-name"
                className=" mt-1"
                placeholder="collection name"
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
                <span
                  data-cy="create-error-message"
                  className="text-red-500 text-sm"
                >
                  {error}
                </span>
              )}
              <span className="flex items-center gap-1 mt-2">
                <Checkbox
                  data-cy="save-to-collection-checkbox"
                  id="save-to-collection"
                  name="saveToCollection"
                />
                <label
                  htmlFor="save-to-collection"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Save to collection
                </label>
              </span>

              <DialogFooter className="flex gap-2 mt-4 justify-between w-full">
                <DialogClose asChild>
                  <Button
                    type="button"
                    className="group w-full "
                    variant="secondary"
                    aria-label="Cancel Creating Collection"
                  >
                    <p className=" text-slate-500  group-hover:text-slate-800 group-hover:font-semibold">
                      Cancel
                    </p>
                  </Button>
                </DialogClose>
                <Button
                  data-cy="create-collection-save-btn"
                  className="group w-full"
                  variant="secondary"
                  type="submit"
                  aria-label="Save New Collection"
                >
                  <p className=" text-slate-500  group-hover:text-slate-800 group-hover:font-semibold">
                    Save
                  </p>
                </Button>
              </DialogFooter>
            </form>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
