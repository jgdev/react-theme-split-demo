import { DEFAULT_PADDING } from "./constants";

export const addPaddingLimit = (
  currentValue = 0,
  maxValue = 0,
  padding = DEFAULT_PADDING
) => {
  if (currentValue <= padding) return padding;
  if (currentValue >= maxValue - padding) return maxValue - padding;
  return currentValue;
};
