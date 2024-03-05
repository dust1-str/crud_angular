import { Component,OnInit } from '@angular/core';
import { TableComponent } from '../table/table.component';
import { CommonModule } from '@angular/common';
import { Object } from '../Core/Interfaces/object';
import { InfoService } from '../Core/Services/info.service';
import { Router } from '@angular/router';
import { authGuard } from '../auth.guard';


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

constructor(private equipoService: InfoService , private router: Router) { }

  ngOnInit(): void {
    if(!authGuard){
      this.router.navigate(['/login']);
    }
    else{
      this.obtenerDatos();

    }

  }

  obtenerDatos() {
    this.equipoService.obtenerEquipos().subscribe(
      data => {
        this.elementos = data;
      },
      error => {
        console.error('Error al obtener equipos', error);
      }
    );
  }

  editarElemento(id: number) {
    this.router.navigate(['/updateform', id]);
  }


  eliminarElemento(id: number) {
    if (confirm('¿Estás seguro de que quieres eliminar este elemento?')) {
      this.equipoService.eliminarequipo(id).subscribe(
        data => {
          location.reload();
        },      
        error => {
          console.error('Error al eliminar equipo', error);
        }
      );
    }
    }


  agregarElemento(event: any) {
    this.router.navigate(['/createform']);
  }
}
