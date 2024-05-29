import { Component, OnInit } from "@angular/core";


@Component({
    selector : 'app-product',
    templateUrl : './product.component.html',
    styleUrls : ['./product.component.scss']
})
export class ProductComponent implements OnInit{
    bgColor : string = "yellowgreen"
    isProductAvailable !: boolean

    productName : string = "Samsung";
    productId : number = 1234;
    productStatus : string ="dispached";
    infoHtml : string = '<p class="alert alert-info">I dont have goals I have targets</p>';
    constructor(){}
   
    onKeyUp(eve : any){
        // console.log(eve)
        console.log((eve.target as HTMLInputElement).value);
    }
    ngOnInit(): void {
        this.isProductAvailable = Math.random() >.5 ? true : false
        
    }

    getBgColor():string{
        return this.isProductAvailable? 'yellowgreen' : '#ccc'
}

}