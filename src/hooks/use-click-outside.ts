import { useEffect, useCallback, RefObject } from "react";

export const useClickOutside = <T extends HTMLElement>(
  ref: RefObject<T>,
  onClickOutside: () => void,
) => {
  const handleClickOutside = useCallback(
    (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        onClickOutside();
      }
    },
    [ref, onClickOutside],
  );

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [handleClickOutside]);
};
