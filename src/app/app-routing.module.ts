import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExpertiseComponent } from './expertise/expertise.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ContactComponent } from './contact/contact.component';


const routes: Routes = [
  {path:'',component:NavbarComponent,
    children:[
    {path:'expertise',component:ExpertiseComponent},
    {path:'contact',component:ContactComponent}
 
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
