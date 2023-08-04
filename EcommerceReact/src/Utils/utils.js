
export const returnFirst20CharactersOfString = (str) => {
    const strArr = str.split(" ");
    for(let i = 0; i < 20; i++){
        strToReturn += `${strArr[i]}`
    }
    return str.slice(0, 20)
}   