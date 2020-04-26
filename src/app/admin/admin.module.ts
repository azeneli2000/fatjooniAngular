import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import{ReactiveFormsModule,FormsModule} from '@angular/forms';
import { AdminprojekteComponent } from './adminprojekte/adminprojekte.component';
import { AdminsettingsComponent } from './adminsettings/adminsettings.component';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';

const routes: Routes = [{path:'projekte',component : AdminprojekteComponent },
                        {path: 'settings', component : AdminsettingsComponent},
                        {path: '', component : AdminComponent},
];

@NgModule({
  declarations: [AdminprojekteComponent, AdminsettingsComponent,AdminComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
     ReactiveFormsModule,FormsModule
  ]
})
export class AdminModule { }
