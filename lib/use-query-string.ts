// Get a new searchParams string by merging the current

import { useSearchParams } from "next/navigation";
import { useCallback } from "react";

// searchParams with a provided key/value pair
export const useQueryString = () => {
  const searchParams = useSearchParams();

  const createQueryString = useCallback(
    (name: string, value: string | null) => {
      const params = new URLSearchParams(searchParams.toString());
      if (value === null) {
        params.delete(name);
      } else {
        params.set(name, value);
      }
      return params.toString();
    },
    [searchParams]
  );

  return { createQueryString };
};
