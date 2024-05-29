import { Component } from "@angular/core";
import { Istd } from "../../models/student.interface";


@Component({
    selector : 'app-student',
    templateUrl : './student.component.html',
    styleUrls : ['./student.component.scss']
})
export class StudentComponent{
  stdArr :Array<Istd> = [
    {
        fname : "Jhon",
        lname : "Doe",
        email : "jd@gmail.com",
        contact : 12254851
    },
    {
        fname : "jen",
        lname : "Doe",
        email : "jd@gmail.com",
        contact : 12254851
    },
    {
        fname : "july",
        lname : "Doe",
        email : "jd@gmail.com",
        contact : 12254851
    },
    {
        fname : "jan",
        lname : "Doe",
        email : "jd@gmail.com",
        contact : 12254851
    },
    {
        fname : "jerry",
        lname : "Doe",
        email : "jd@gmail.com",
        contact : 12254851
    }

  ]
}