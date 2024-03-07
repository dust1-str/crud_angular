import { animate, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-animacion',
  standalone: true,
  imports: [],
  templateUrl: './animacion.component.html',
  styleUrl: './animacion.component.css',
  animations:[
    trigger('fadeIn',[
      transition(':enter',[
        style({opacity:0}),
        animate('2000ms',style({opacity:1})),
      ]),
    ])
  ]
})
export class AnimacionComponent {

}
