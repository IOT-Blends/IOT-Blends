import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';
import { NavigationComponent } from './navigation/navigation.component';

const moduleImport = [MaterialModule, CommonModule, ReactiveFormsModule];

@NgModule({
  declarations: [NavigationComponent],
  imports: [moduleImport],
  exports: [moduleImport, NavigationComponent],
})
export class SharedModule {}
