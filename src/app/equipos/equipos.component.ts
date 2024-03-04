import { Component,OnInit } from '@angular/core';
import { TableComponent } from '../table/table.component';
import { CommonModule } from '@angular/common';
import { Object } from '../Core/Interfaces/object';
import { InfoService } from '../Core/Services/info.service';

@Component({
  selector: 'app-equipos',
  standalone: true,
  imports: [TableComponent,CommonModule],
  templateUrl: './equipos.component.html',
  styleUrl: './equipos.component.css'
})

export class EquiposComponent {
elementos:Object[]=[];
columnas:string[]=['id','nombre','apodo','fundacion'];

constructor(private equipoService: InfoService) { }

  ngOnInit(): void {
    this.obtenerDatos();

  }

  obtenerDatos() {
    this.equipoService.obtenerEquipo().subscribe(
      data => {
        this.elementos = data;
        console.log(this.elementos)
      },
      error => {
        console.error('Error al obtener equipos', error);
      }
    );
  }

  editarElemento(id: number) {
    console.log('Editar elemento con ID:', id);
  }


  eliminarElemento(id: number) {
    console.log('Eliminar elemento con ID:', id);
    this.equipoService.eliminarequipo(id).subscribe(
      data => {
        console.log('Equipo eliminado');
        location.reload();
      },
      error => {
        console.error('Error al eliminar equipo', error);
      }
    );
  }
  agregarElemento(id: number) {
    console.log('Agregar elemento');
  }
}
