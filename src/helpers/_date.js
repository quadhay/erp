export default class dateFormatter {
    constructor() {
        this.month = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12']
    }

    getTime(time) {
        let date = new Date(time),
            hour = date.getHours()

        return `${date.getDate()}/${this.month[date.getMonth()]}/${date.getFullYear()}, ${hour}:${date.getMinutes()}:${date.getSeconds()} ${this.period(hour)}`
    }

    period(hour = 0){
        return hour < 12 ? 'AM' : 'PM'
    }
}