export class DateUtil {

    static getCurrentDate() {
        return new Date();
    }

}

export enum Formats {
    BD_DATE_FORMAT = 'DD/MM/YYYY',
    INPUT_DATE_FORMAT = 'YYYY-MM-DD',
}