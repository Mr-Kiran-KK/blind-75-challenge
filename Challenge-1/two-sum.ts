function twoSum(nums: number[], target: number): number[] | undefined {
    const map = new Map<number, number>();
    for (let i = 0; i < nums.length; i++) {
        console.log('i',i);
        const changeDiff = target - nums[i];
        if (map.has(changeDiff)) {
            return [map.get(changeDiff)!, i];
        }
        map.set(nums[i], i);
    }
    return undefined; 
}

