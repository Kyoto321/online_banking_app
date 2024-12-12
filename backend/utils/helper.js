const generateAccountNumber = () => {
    const date = Date.now();
    const strDate = date.toString();
    const firstFour = strDate.slice(0, 6);

    //generate random number
    const randNum = Math.floor(Math.random() * 10000 + 1);
    const strRandom = randNum.toString();
    // randomNumber + firstfour
    const strAccount = strRandom + firstFour

    const accountNumber = parseInt(strAccount);
    return accountNumber;
}; 


const generatePin = () => {
    const randomNum = 10000 + Math.floor(Math.random() * 1000 + 1);
    const strRandomNum = randomNum.toString().slice(0, 4);

    const pin = parseInt(strRandomNum);

    return pin;
};

export { generatePin, generateAccountNumber}

