import { NgModule } from '@angular/core';

const MAT_DIALOG_GLOBAL_CONFIG: MatDialogConfig = {
width: '700px',
disableClose: true,
hasBackdrop: true

};

const MAT_SNACK_BAR_GLOBAL_CONFIG: MatSnackBarConfig = {
duration: 2500,
verticalPosition: 'bottom',
horizontalPosition: 'center'
};

import {
  MatCardModule,
   MatFormFieldModule,
   MatInputModule,
   MatDialogModule,
   MatButtonModule,
   MatSnackBarModule,
   MatCheckboxModule,
   MatSelectModule,
   MatToolbarModule,
   MatIconModule,
   MatDialogConfig,
   MAT_DIALOG_DEFAULT_OPTIONS,
   MAT_SNACK_BAR_DEFAULT_OPTIONS,
   MatSnackBarConfig} from '@angular/material';

const MATERIAL_MODULES = [
  MatIconModule,
  MatCardModule,
  MatFormFieldModule,
  MatInputModule,
  MatDialogModule,
  MatButtonModule,
  MatSnackBarModule,
  MatCheckboxModule,
  MatSelectModule,
  MatToolbarModule
];


@NgModule({
  declarations: [],
  exports: [ ...MATERIAL_MODULES],
  providers:
[
  { provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: MAT_DIALOG_GLOBAL_CONFIG},
  { provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: MAT_SNACK_BAR_GLOBAL_CONFIG}
]

})
export class MaterialModule { }
