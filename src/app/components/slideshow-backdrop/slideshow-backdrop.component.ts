import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { Pelicula } from 'src/app/interfaces/interfaces';
import { PipesModule } from 'src/app/pipes/pipes-module';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-slideshow-backdrop',
  templateUrl: './slideshow-backdrop.component.html',
  styleUrls: ['./slideshow-backdrop.component.scss'],
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],  
  imports: [CommonModule, IonicModule, PipesModule],
})
export class SlideshowBackdropComponent  implements OnInit {

  @Input() peliculas: Pelicula[] = [];

  constructor() { }

  ngOnInit() {}

}
