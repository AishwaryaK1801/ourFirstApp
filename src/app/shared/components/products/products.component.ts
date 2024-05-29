import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from "@angular/core";


@Component({
    selector : 'app-products',
    templateUrl : './products.component.html',
    styleUrls : ['./products.component.scss']
})
export class ProductsComponent implements OnInit, OnDestroy{
    isDisabled : boolean = false;
    // by using ViewChild decorator we have selected element reference in th ts file
    //in below case productNameRef is ts property. 
    //generaly we give same name as element reference(productName) in such case to understand it better
    // but here we have used name as productNameRef 
    //ElementRef - it is a type
    @ViewChild('productName') productNameRef !:ElementRef
    getProductName :string = "Samsung";
    productCount :number =0;


    constructor(){}
   
    ngOnInit(): void {
        console.log(`Btn clicked`)
    }
    
    
    // onProductAdd(product : HTMLInputElement){
        //     // console.log(product)
        //     console.log(product.value)
        // }
        
        
    onProductAdd(){
        let val = this.productNameRef.nativeElement.value;
        // it will give that element on which we have given element reference
        this.getProductName=val;
        // console.log(val)
        // this.productCount=this.productCount+1;
    
        if(this.productCount<10){
            this.productCount+=1
        }
    }
    onProductRemove(){
        if(this.productCount>0){
            // this.productCount=this.productCount-1;
        this.productCount-=1
        }
    }

    ngOnDestroy(){
        console.log('Product Component is destroyed')
    }
}


//some examples of decorators-
//component decorator
//module decorator

//types of decorator
//class decorator
//method decorator 
//property decorator
//parameter