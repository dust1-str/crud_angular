import { Component, Input, Output, EventEmitter  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Object } from '../Core/Interfaces/object';
import { trigger,state,style,animate,transition } from '@angular/animations';
@Component({
  selector: 'app-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css',
  animations: [
    trigger('mostrar', [
      state('open', style({
        transform: 'translateX(0)',
        opacity: 1,
      })),
      state('closed', style({
        transform: 'translateX(-100%)',
        opacity: 0,
        offset: 1.0
      })),
      transition('open => closed', [
        animate('1.5s')
      ]),
      transition('closed => open', [
        animate('2s')
      ]),
    ]),]
})

export class TableComponent {
  isOpen = true;
  estadocuadro = 'estado1'
  estadotexto = 'open';
  estadotextos = 'open';
  imagenUrl = 'assets/xd.png';
  toggle() {
    this.isOpen = !this.isOpen;
  }

  ngOnInit() {
    console.log('Columnas cargadas en Tabla:', this.columnas);
    console.log('Elementos cargados en Tabla :', this.elementos);
  }

  @Input() elementos: Object[] = [];
  @Input() columnas: string[] = [];
  @Output() editar = new EventEmitter<number>();
  @Output() eliminar = new EventEmitter<number>();
  @Output() agregar = new EventEmitter();


  emitirEditar(id: number) {
    this.editar.emit(id);
  }

  mostrar() {
    this.estadotexto = this.estadotexto === 'open' ? 'closed' : 'open';
  }
  emitirEliminar(id: number) {
    this.eliminar.emit(id);
  }

  emitirAgregarElemento() {
    this.agregar.emit();
  }
}
