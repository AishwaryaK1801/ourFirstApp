import { Component } from "@angular/core";





@Component({
    selector : "app-skills",
    templateUrl : "./skills.component.html",
    styleUrls : ["./skills.component.scss"]
})
export class skillsComponent{
    skills : Array<string> = ["Js", "Ts", "Angular", "Node"];
}