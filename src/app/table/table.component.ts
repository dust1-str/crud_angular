import { Component, Input, Output, EventEmitter  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Object } from '../Core/Interfaces/object';
import { AnimacionComponent } from '../animacion/animacion.component';
@Component({
  selector: 'app-table',
  standalone: true,
  imports: [CommonModule, AnimacionComponent],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css',
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
