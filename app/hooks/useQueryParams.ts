import { usePathname, useSearchParams } from 'next/navigation';

export function useQueryParams() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const params = new URLSearchParams(searchParams);

  return { pathname, params };
}
