export const arrayChunks = (arr, n) => {
    return arr.reduce((acc, item, index) => {
        if (index % n === 0) {
            acc.push(arr.slice(index, index + n));
        }
        return acc;
    }, []);
};
