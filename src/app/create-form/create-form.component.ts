import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { InfoService } from '../Core/Services/info.service';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-create-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './create-form.component.html',
  styleUrls: ['./create-form.component.css']
})
export class CreateFormComponent{

  createForm = new FormGroup({
    nombre: new FormControl('', [Validators.required, Validators.minLength(5)]),
    apodo: new FormControl('', [Validators.required, Validators.minLength(4)]),
    fundacion: new FormControl('', [Validators.required, Validators.minLength(8)])
  });

  constructor(private infoService: InfoService, private router: Router) { }

  crear() {
    const nombre = this.createForm.value.nombre;
    const apodo = this.createForm.value.apodo;
    const fundacion = this.createForm.value.fundacion;

    if (nombre && apodo && fundacion) {
      this.infoService.crearequipo(nombre, apodo, fundacion).subscribe({
        next: (data) => {
          console.log(data);
          this.router.navigate(['/equipos']);
        },
        error: error => {
          console.log(error.error.message);
        }
      });
    }

  }
}