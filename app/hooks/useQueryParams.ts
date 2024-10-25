import { usePathname, useSearchParams } from 'next/navigation';
import { useMemo } from 'react';

export function useQueryParams() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  return useMemo(() => {
    const params = new URLSearchParams(searchParams);
    return { pathname, params };
  }, [pathname, searchParams]);
}
