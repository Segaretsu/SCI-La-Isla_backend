export class JsUtil {
    public static isEmptyNull(objeto: any): boolean {
        return (!objeto || objeto == null);
    }

    public static getCurrentDate(): Date {
        return new Date();
    }

    public static capitalizeAllWords(text: string): string {
        const capitalizedWords = [];
        const words: Array<string> = text.split(" ");
        for (let index = 0; index < words.length; index++) {
            const word: string = words[index];
            if (typeof word === 'string') {
                const capitalizedWord = word.charAt(0).toUpperCase() + word.slice(1)?.toLowerCase();
                capitalizedWords.push(capitalizedWord);
            }
        }
        return capitalizedWords.join(" ");
    }

    public static capitalize([first, ...rest]) {
        return first.toUpperCase() + rest.join('').toLowerCase();
    }

    public static capitalizeText(text: string): string {
        if (typeof text === 'string') {
            return text.charAt(0).toUpperCase() + text.slice(1)?.toLowerCase();
        }
        return text;
    }

    public static generateSerial() {
        'use strict';
        const chars = '1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
        const serialLength = 4
        const numberSeparations = 4
        let randomSerial = ""
        let randomNumber
        for (let separation = 0; separation < numberSeparations; separation++) {
            if (separation != 0) {
                randomSerial += '-'
            }
            for (let i = 0; i < serialLength; i = i + 1) {
                randomNumber = Math.floor(Math.random() * chars.length);
                randomSerial += chars.substring(randomNumber, randomNumber + 1);
            }
        }
        return randomSerial;
    }
}