import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../material/material.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';



@NgModule({
  declarations: [DashboardComponent, LoginComponent, PageNotFoundComponent],
  imports: [
    CommonModule, RouterModule, MaterialModule, FormsModule
  ],
  exports: [DashboardComponent, LoginComponent]
})
export class CoreModule { }
