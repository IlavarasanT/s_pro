import { Component, Input, OnInit } from '@angular/core';
import { SharedWebAPIService } from '../shared-web-api.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  constructor(private service:SharedWebAPIService) {   }
  ngOnInit(): void {
  }
  form = new FormGroup({                                               
    productName: new FormControl('', [Validators.required]),
    productDesc: new FormControl('',[Validators.required]),
   productPrice: new FormControl('', [Validators.required]),
   productQty: new FormControl('',[Validators.required]),
   PhotoFilePath:new FormControl ('',[Validators.required]),
   PhotoFileName: new FormControl('', [Validators.required]),
   logo: new FormControl(null,null),
 });
 PhotoFileName!:string;
  PhotoFilePath!:string;
  productQty!:number;
  productName!:string;
  productDesc!:string;
  productPrice!:string;
  imageSrc!:any
  uploadPhoto(files: any) {
  const file = files.files[0];
const readers = new FileReader();
      readers.onload = e => this.imageSrc = readers.result as string;
     readers.readAsDataURL(file);


}
onSubmit(){
var productDetails={ProductName:this.productName,ProductDesc:this.productDesc,ProductPrice:this.productPrice,ProductQuantity:this.productQty,ProductImage:this.imageSrc}
console.log(productDetails.ProductImage)
this.service.postMethod("/saveproduct", productDetails).subscribe((res: any) => {
     console.log(res.toString());
     document.location.href='/products';
   })


}
 
}
