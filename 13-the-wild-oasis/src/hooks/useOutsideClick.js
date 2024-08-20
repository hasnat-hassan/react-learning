import { useEffect, useRef } from "react";

export function useOutsideClick(handler, listenCapturing) {
  const ref = useRef();

  useEffect(
    function () {
      function handleClick(e) {
        if (ref.current && !ref.current.contains(e.target)) {
          console.log("Click");
          handler();
        }
      }

      document.addEventListener("click", handleClick, true);
      return () => document.removeEventListener("click", handleClick, true);
    },
    [handler, listenCapturing]
  );
  return ref;
}
