function containsDuplicate(nums: number[]): boolean {
  const arraySet = new Set<number>();
  for (const num of nums) {
    if (arraySet.has(num)) return true;
    arraySet.add(num);
  }
  return false;
}
