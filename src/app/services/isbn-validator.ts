export default function isIsbnValid(isbn: string) {
    const numericString = isbn.replace(/\D/g,'');

    if (numericString.length != 13) {
        return false;
    }

    const numerics: number[] = [];
    let checkDigit: number = 0;

    for (let i = 0; i < numericString.length; i++) {
        numerics[i] = parseInt(numericString[i], 10);
        
        if (i+1 >= numericString.length) {
            continue;
        }
        
        if (i % 2 == 0) {
            checkDigit += numerics[i] * 1;
        } else {
            checkDigit += numerics[i] * 3;
        }
    }

    checkDigit = (10 - (checkDigit % 10)) % 10;

    if (checkDigit != numerics[12]) {
        return false;
    }

    return true;
}