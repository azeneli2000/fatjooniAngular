import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeshqipComponent } from './homeshqip/homeshqip.component';
import { HomeanglishtComponent } from './homeanglisht/homeanglisht.component';


const routes: Routes = [{path:'',component : HomeshqipComponent },
                        {path: 'en', component : HomeanglishtComponent},
                        {
                          path: 'admin',
                          loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
                        }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
