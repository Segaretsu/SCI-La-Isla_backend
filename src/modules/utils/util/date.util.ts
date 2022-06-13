import { DateTime } from "luxon";

export class DateUtil {
    public static getCurrentDate() {
        return DateTime.local().toISODate()
    }

    public static getCurrentDateTypeJsDate () {
        return DateTime.local().toJSDate();
    }

    public static getCurrentDateTime() {
        return DateTime.local().toISO()
    }

    public static getCurrentDateWithFirstDayOfMounth(): string {
        return DateTime.fromObject({ day: 1, hour: 0, }).toISODate()
    }

    public static getCurrentDateWithLastDayOfMounth() {
        return DateTime.fromObject({ day: 1, hour: 0, }).plus({ month: 1 }).minus({ day: 1 }).toISODate()
    }
    // Notificaciones
    public static getDiaAndMes(date) {
        const diaMes = DateTime.fromJSDate(date);
        return diaMes.toFormat("dd '/' MMMM");
    }

    public static getTiempo(date) {
        const diaMes = DateTime.fromJSDate(date);
        return diaMes.toFormat("t");
    }

    public static getDateWithFirstDayByMounth(month = getMes()) {
        return DateTime.fromObject({ day: 1, month: month, hour: 0, }).toISODate()
    }
}

function getMes() {
    return DateTime.local().get('month');
}