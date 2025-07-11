import { useEffect } from "react";
import { fadeIn, fadeOut } from "./fadeStore";

export function useBackgroundFade({
  fadeTo = 0.2,
  duration = 300,
  restoreOnUnmount = true,
}: {
  fadeTo?: number;
  duration?: number;
  restoreOnUnmount?: boolean;
} = {}) {
  useEffect(() => {
    fadeOut(fadeTo, duration);

    return () => {
      if (restoreOnUnmount) {
        fadeIn(duration);
      }
    };
  }, []);
}
