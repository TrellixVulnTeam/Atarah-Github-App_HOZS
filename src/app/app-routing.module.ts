import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
<<<<<<< HEAD
import { RepositoriesComponent } from './repositories/repositories.component';
import { ProfileComponent } from './profile/profile.component';



const routes: Routes = [
=======
import { RepositoriesComponent } from './Components/repositories/repositories.component';
import { ProfileComponent } from './Components/profile/profile.component';


const routes: Routes = [

>>>>>>> ae1dd57ec6dae27633b92117a83565b93effa088
  { path: 'profile', component: ProfileComponent},
  { path: 'repositories', component: RepositoriesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
