/**
 * Shuffles a list randomly.
 *
 * @template T The type of elements in the list.
 * @param {T[]} list The list to shuffle.
 * @returns {T[]} A new array with the elements shuffled randomly.
 */
export const shuffleList = <T>(list: T[]): T[] => {
  const copy = [...list];
  return copy.sort(() => Math.random() - 0.5);
};

export const randomElement = <T>(list: T[]): T | undefined =>
  list.length > 0 ? list[Math.floor(Math.random() * list.length)] : undefined;
