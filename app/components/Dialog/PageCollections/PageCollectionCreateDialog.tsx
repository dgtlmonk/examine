import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';

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
          >
            New Collection
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-md rounded-md">
          <DialogHeader>
            <DialogTitle>New Collection</DialogTitle>
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

              <DialogFooter className="flex gap-2 mt-4 justify-between w-full">
                <DialogClose asChild>
                  <Button
                    type="button"
                    className="group w-full "
                    variant="secondary"
                  >
                    <p className=" text-slate-500 sm:text-slate-400 group-hover:text-slate-600">
                      Close
                    </p>
                  </Button>
                </DialogClose>
                <Button
                  className="group w-full"
                  variant="secondary"
                  type="submit"
                >
                  <p className="group text-slate-500 sm:text-slate-400 group-hover:text-slate-600">
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
