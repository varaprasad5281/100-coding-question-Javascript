function findMax(arr) {
    return arr.reduce((maxEle, currEle) => {
       if (maxEle>currEle) return maxEle
       else 
       return currEle;
    });
}
export const largestOfFour=(arrOfEle)=>{
    const largestArray = arrOfEle.map((e) => {
        return findMax(e);
    });
    return largestArray;
}
