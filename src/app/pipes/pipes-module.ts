import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImagenPipe } from '../pipes/imagen-pipe';
import { ParesPipe } from './pares-pipe';


@NgModule({
  declarations: [
  ],
  exports: [
    ImagenPipe,
    ParesPipe
  ],
  imports: [
    CommonModule,
    ImagenPipe,
    ParesPipe
  ]
})
export class PipesModule { }
