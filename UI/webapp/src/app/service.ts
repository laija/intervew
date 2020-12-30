import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class Service {

    constructor(private http: HttpClient){
    }

    getResult(operation, body): any {
        let url = "/posts/" + operation;
        return this.http.post( url, body);
    }
}