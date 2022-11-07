import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';
import { AuthService } from 'src/app/auth.service';
import { faL } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public totalItem : number = 0;
  public searchTerm !: string;
  constructor(private cartService : CartService,private authService:AuthService) { }

  ngOnInit(): void {
    this.cartService.getProducts()
    .subscribe(res=>{
      this.totalItem = res.length;
    })
    var token = localStorage.getItem("Email");

    if (token !== undefined && token !== "" && token != null) {
      this.logoShow1=false;
      this.logoShow2=true;
    }
    else{
      this.logoShow1=true;
      this.logoShow2=false;
    }
  }
  search(event:any){
    this.searchTerm = (event.target as HTMLInputElement).value;
    console.log(this.searchTerm);
    this.cartService.search.next(this.searchTerm);
  }
  public logoShow1=true
  public logoShow2=false
  logout(){
    this.logoShow2=false;
    localStorage.setItem('Email', '');
    this.authService.isLoggedIn();
    document.location.href='/login';
  }
}
