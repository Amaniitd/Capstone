import { BaseModel } from "./baseModel";


export class Movie extends BaseModel{
    constructor (name = "", producer = "", rating = 0) {
        super();
        this.name = name;
        this.rating = rating;
        this.producer = producer;
    }
}

