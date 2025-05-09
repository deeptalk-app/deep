/**
 * Learn more about light and dark modes:
 * https://docs.expo.dev/guides/color-schemes/
 */

import { Colors } from "@/src/constants/Colors";

export function useThemeColor(colorName: keyof typeof Colors.all) {
  return Colors.all[colorName];
}
