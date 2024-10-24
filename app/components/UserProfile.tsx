import { CircleUser } from 'lucide-react';

export default function UserProfile() {
  return (
    <div className="flex items-center lg:hidden">
      <div className="flex flex-1 cursor-pointer flex-row-reverse items-center gap-1 text-white lg:hidden">
        <span className="max-w-20 overflow-hidden text-ellipsis whitespace-pre">
          Joel Pablo
        </span>
        <CircleUser strokeWidth={1.5} />
      </div>
    </div>
  );
}
