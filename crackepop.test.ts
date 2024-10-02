import { cracklepop, isDivisibleBy3, isDivisibleBy5 } from "./cracklepop";

describe('CracklePop', () => {
    test('should return true when number is divisible by 3', () =>{
        const value = isDivisibleBy3(3)
        expect(value).toBeTruthy();
    })

    test('should return true when number is divisible by 5', () =>{
        const value = isDivisibleBy5(10)
        expect(value).toBeTruthy();
    })

    test('should return false when number is not divisible by 3', () =>{
        const value = isDivisibleBy3(11)
        expect(value).toBeFalsy();
    })

    test('should return false when number is not divisible by 5', () =>{
        const value = isDivisibleBy3(1)
        expect(value).toBeFalsy();
    })

    test('should return the correct list of cracklepop from 1 - 100', () => {
        const value = cracklepop(1, 100);
        expect(value).toEqual([
            "1","2","Crackle","4","Pop","Crackle","7","8","Crackle","Pop","11","Crackle","13","14","CrackePop",
            "16","17","Crackle","19","Pop","Crackle","22","23","Crackle","Pop","26","Crackle","28","29","CrackePop",
            "31","32","Crackle","34","Pop","Crackle","37","38","Crackle","Pop","41","Crackle","43","44","CrackePop",
            "46","47","Crackle","49","Pop","Crackle","52","53","Crackle","Pop","56","Crackle","58","59","CrackePop",
            "61","62","Crackle","64","Pop","Crackle","67","68","Crackle","Pop","71","Crackle","73","74","CrackePop",
            "76","77","Crackle","79","Pop","Crackle","82","83","Crackle","Pop","86","Crackle","88","89","CrackePop",
            "91","92","Crackle","94","Pop","Crackle","97","98","Crackle","Pop"])
    })
})