import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './component/cart/cart.component';
import { ProductsComponent } from './component/products/products.component';
import { RegistrationformComponent} from './component/registrationform/registrationform.component';
import { FooterComponent } from './component/footer/footer.component';
import { LoginComponent } from './component/login/login.component';
import { MainpageComponent} from './component/mainpage/mainpage.component';
import { NewmainpageComponent } from './component/newmainpage/newmainpage.component';
import { AddProductComponent } from './add-product/add-product.component';
import { AuthGuard } from './services/auth.guard';
import { AuthService } from './auth.service';

const routes: Routes = [
  {path:'', redirectTo:'mainpage',pathMatch:'full'},
  {path:'products', component: ProductsComponent,canActivate:[AuthGuard]},
  {path:'cart', component: CartComponent,canActivate:[AuthGuard]},
  {path: 'registrationform',component:RegistrationformComponent},
  {path: 'footer',component:FooterComponent,canActivate:[AuthGuard]},
  {path:'login', component:LoginComponent},
  {path:'mainpage', component:MainpageComponent},
  {path:'newmainpage', component:NewmainpageComponent,canActivate:[AuthGuard]},
  {path:'addproduct',component:AddProductComponent,canActivate:[AuthGuard]},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers:[AuthService]
})
export class AppRoutingModule { }
