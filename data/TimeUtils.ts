export enum TimeOfDay {
    Morning = 'Morning',
    Afternoon = 'Afternoon',
    Evening = 'Evening',
    Night = 'Night',
}

export class TimeUtils {
    private static now: Date = new Date();
    public static setFakeTime(now: Date): void {
        this.now = now;
    }
    public static getTimeOfDay(): TimeOfDay {
        const hours = this.now.getHours();
        if (2 < hours && hours < 12) {
            // 2am - 12pm is morning
            return TimeOfDay.Morning;
        } else if (12 <= hours && hours < 19) {
            // 12pm - 7pm is afternoon
            return TimeOfDay.Afternoon;
        } else if (19 <= hours && hours < 23) {
            // 7pm - 11pm is evening
            return TimeOfDay.Evening;
        } else {
            // 11pm - 2am is night
            return TimeOfDay.Night;
        }
    }
    public static isMorning(): boolean {
        return this.getTimeOfDay() === TimeOfDay.Morning;
    }
    public static isAfternoon(): boolean {
        return this.getTimeOfDay() === TimeOfDay.Afternoon;
    }
    public static isEvening(): boolean {
        return this.getTimeOfDay() === TimeOfDay.Evening;
    }
    public static isNight(): boolean {
        return this.getTimeOfDay() === TimeOfDay.Night;
    }
}

// [Testing] 设定虚假时间用于测试
TimeUtils.setFakeTime(new Date(new Date().setHours(19)));
