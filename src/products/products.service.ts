import { Injectable, NotFoundException } from "@nestjs/common";
import { Product } from "./product.module";


@Injectable()
export class ProductsService{
   private products:Product[]=[]

    insertProduct(title:string,price:number,description:string):string{
        const prodId=Math.random().toString();
        const newProduct=new Product(prodId,title,price,description)
        this.products.push(newProduct)
        return prodId
    }

    getProducts(){
        return [...this.products];
    }

    getProductById(id:string){
        const product= this.findProductById(id)[0]
        return {...product}
    }

    editProductById(id:string,title:string,price:number, description:string){
        const [product,index]=this.findProductById(id)
        const updated={...product}
        if(title){
            updated.title=title
        }
        if(price){
            updated.price=price
        }
        if(description){
            updated.description=description
        }
        this.products[index]=updated
        return null
    }

    deleteProduct(id:string){
        const index=this.findProductById(id)[1]
        this.products.splice(index,1)
    }

    private findProductById(id:string):[Product,number]{
        const index= this.products.findIndex((prod)=>prod.id===id)
        const product=this.products[index]
        if(!product){
            throw new NotFoundException('Not found')
        }
        return [product,index]
    }
}