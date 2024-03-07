import { Component , OnInit} from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { InfoService } from '../Core/Services/info.service';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-update-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './update-form.component.html',
  styleUrl: './update-form.component.css'
})

export class UpdateFormComponent implements OnInit{  
  id = 0;

  updateForm = new FormGroup({
    nombre: new FormControl( this.route.snapshot.params['nombre'], [Validators.required, Validators.minLength(5)]),
    apodo: new FormControl(this.route.snapshot.params['apodo'], [Validators.required, Validators.minLength(4)]),
    fundacion: new FormControl(this.route.snapshot.params['fundacion'], [Validators.required, Validators.minLength(8)])
  });

  constructor(private infoService: InfoService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
  }

  crear() {
    console.log(this.id);

    const nombre = this.updateForm.value.nombre;
    const apodo = this.updateForm.value.apodo;
    const fundacion = this.updateForm.value.fundacion;

    if (nombre && apodo && fundacion) {
      this.infoService.actualizarequipo(this.id ,nombre, apodo, fundacion).subscribe({
        next: (data) => {
          console.log(data);
          this.router.navigate(['/equipos']);
        },
        error: error => {
          if (error.status === 'invalid token' || error.status === 'token not found') {
            this.router.navigate(['/login']);
          }
          console.log(error);
        }
      });
    }

  }
}
