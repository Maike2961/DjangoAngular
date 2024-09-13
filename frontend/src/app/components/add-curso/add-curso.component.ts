import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { AddserviceService } from '../../services/addservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-curso',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './add-curso.component.html',
  styleUrl: './add-curso.component.css'
})
export class AddCursoComponent {
  
  formulario = new FormGroup({
    title: new FormControl('', [Validators.required]),
    content: new FormControl('', [Validators.required]),
    category: new FormControl('', [Validators.required])
  });

  constructor(private service: AddserviceService,  private router: Router) { }

  postCurso() {
    if (this.formulario.valid) {
      const novoCurso = {
        title: this.formulario.value.title!,
        content: this.formulario.value.content!,
        category: this.formulario.value.category!
      }
      this.service.addCurso(novoCurso).subscribe({
        next: () => {
          console.log(novoCurso)
          this.formulario.reset()
        },
        error: () => {
          this.formulario.reset()
          console.log('erro')
        }
      })
    }
    alert('Curso Adicionado')
    this.router.navigate(['/'])
  }
}
