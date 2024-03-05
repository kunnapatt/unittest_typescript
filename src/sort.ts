function bb_sort(arr: number[], rev: boolean=false): number[] {
    const n = arr.length;
    const res: number[] = [...arr] ;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (rev) {
                if (res[j] < res[j + 1]) {
                    [res[j], res[j + 1]] = [res[j + 1], res[j]];
                }
            } else {
                if (res[j] > res[j + 1]) {
                    // Swap arr[j] and arr[j+1]
                    [res[j], res[j + 1]] = [res[j + 1], res[j]];
                }
            }
        }
    }
    return res ;
}

export function merge(collection_1: number[], collection_2: number[], collection_3: number[]): number[] {
    const sort_collect_1 = bb_sort(collection_1) ;
    const sort_collect_2 = bb_sort(collection_2, true) ;
    const sort_collect_3 = bb_sort(collection_3) ;

    const res = [...sort_collect_1, ...sort_collect_2, ...sort_collect_3] ;

    return res ;
}