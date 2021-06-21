import { Component } from '@angular/core';

interface User {
    name: string
    lastName: string
    age: number
}
@Component({
    selector: "app-own",
    templateUrl: './own.component.html',
    styleUrls: ['./own.component.css']
})
export class OwnComponent {
    listUsers: User[] = [
        {
            name: "Victor",
            lastName: "Diaz",
            age: 35
        },
        {
            name: "Oscar",
            lastName: "Perez",
            age: 44
        },
        {
            name: "Ericka",
            lastName: "Peralta",
            age: 30
        },
        {
            name: "Priscila",
            lastName: "Aviles",
            age: 20
        },
        {
            name: "Camila",
            lastName: "Diaz",
            age: 6
        },
        {
            name: "Mathias",
            lastName: "Diaz",
            age: 10
        }
    ];

    constructor(){
        this.listUsers.map(user => console.log(user.name));
    }
}
