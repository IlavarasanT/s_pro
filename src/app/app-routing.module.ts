import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './component/cart/cart.component';
import { ProductsComponent } from './component/products/products.component';
import { RegistrationformComponent} from './component/registrationform/registrationform.component';
import { FooterComponent } from './component/footer/footer.component';
import { LoginComponent } from './component/login/login.component';
import { MainpageComponent} from './component/mainpage/mainpage.component';
import { NewmainpageComponent } from './component/newmainpage/newmainpage.component';

const routes: Routes = [
  {path:'', redirectTo:'products',pathMatch:'full'},
  {path:'products', component: ProductsComponent},
  {path:'cart', component: CartComponent},
  {path: 'registrationform',component:RegistrationformComponent},
  {path: 'footer',component:FooterComponent},
  {path:'login', component:LoginComponent},
  {path:'mainpage', component:MainpageComponent},
  {path:'newmainpage', component:NewmainpageComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
