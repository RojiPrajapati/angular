import { Service } from '@angular/core';

@Service()
export class HomeService {

    sum(a:number, b:number): number{
        return a + b;
    }

    getDateFromLoginPage(): string{
        //api call logic
        let data= 'Date from backend';
        return data;
    }
}
