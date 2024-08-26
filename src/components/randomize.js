const randomize = (arr) => {
    const newArr = [...arr];
    for (let i = 0; i < newArr.length; i++) {
        const randomNum = Math.floor(Math.random() * newArr.length);
        const temp = newArr[i];
        newArr[i] = newArr[randomNum];
        newArr[randomNum] = temp;
    }
    return newArr;
};

export default randomize;
