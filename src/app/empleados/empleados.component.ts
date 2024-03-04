import { Component, OnInit } from '@angular/core';
import { EmpleadoService } from '../Core/Services/empleado.service';
import { Objeto } from '../Core/Interfaces/objeto';
import { TableComponent } from '../table/table.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-empleados',
  standalone: true,
  imports: [TableComponent,CommonModule],
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.css']
})

export class EmpleadosComponent implements OnInit {
  elementos: Objeto[] = [];
  columnas: string[] = ['id', 'nombre', 'cargo', 'salario']; 

  constructor(private empleadoService: EmpleadoService) { }

  ngOnInit(): void {
    this.obtenerDatos();

  }

  obtenerDatos() {
    this.empleadoService.obtenerEmpleados().subscribe(
      data => {
        this.elementos = data;
      },
      error => {
        console.error('Error al obtener empleados', error);
      }
    );
  }

  editarElemento(id: number) {
    console.log('Editar elemento con ID:', id);
  }

  eliminarElemento(id: number) {
    console.log('Eliminar elemento con ID:', id);
  }
  agregarElemento(id: number) {
    console.log('Agregar elemento');
  }
}
