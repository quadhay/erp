export default class _date {
    constructor(param) {
        this.date = new Date(param)
        this.month = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12']
    }

    _getTime() {
        let hour = this.date.getHours()
        return `${this.date.getDate()}/${this.month[this.date.getMonth()]}/${this.date.getFullYear()}, ${hour}:${this.date.getMinutes()}:${this.date.getSeconds()} ${this.period(hour)}`
    }

    period(hour = 0){
        return hour < 12 ? 'AM' : 'PM'
    }
}