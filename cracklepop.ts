export function cracklepop (start: number = 1, stop: number = 100) {
    const results: string[] = [];
    let str: string = '';
    for (let i = start; i <= stop; i++) {
        if (isDivisibleBy3(i) && isDivisibleBy5(i)) {
            str = 'CrackePop'
            results.push(str)
            console.log(str)
        } else if ( isDivisibleBy3(i)) {
            str = 'Crackle'
            results.push(str)
            console.log(str)
        } else if (isDivisibleBy5(i)) {
            str = 'Pop'
            results.push(str)
            console.log(str)
        } else {
            str = i.toString();
            results.push(str)
            console.log(i)
        }
    }
    return results
}


export function isDivisibleBy3(num: number) {
    if (num % 3 == 0) {
        return true
    }
    return false
}


export function isDivisibleBy5(num: number) {
    if (num % 5 == 0) {
        return true
    }
    return false
}