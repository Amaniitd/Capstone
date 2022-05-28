export class BaseModel{
    constructor(){
        this.id = 0;
    }
    load(rawData) {
        for (let prop in rawData) {
            this[prop] = rawData[prop];
        }
    }
}
