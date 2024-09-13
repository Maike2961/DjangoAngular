import { Component, Input, OnInit } from '@angular/core';
import { AddserviceService } from '../../services/addservice.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Curso } from '../../interface/interface';

@Component({
  selector: 'app-update-curso',
  standalone: true,
  imports: [FormsModule, CommonModule, ReactiveFormsModule],
  templateUrl: './update-curso.component.html',
  styleUrl: './update-curso.component.css'
})
export class UpdateCursoComponent implements OnInit {

  title: string = ''
  content: string = ''
  category: string = ''


  constructor(private service: AddserviceService, private route: ActivatedRoute, private router: Router) { }

  formulario = new FormGroup({
    title: new FormControl('', [Validators.required]),
    content: new FormControl('', [Validators.required]),
    category: new FormControl('', [Validators.required])
  });

  ngOnInit(): void{
    const id = this.route.snapshot.params['id'];
    this.service.getUserID(id).subscribe((data) => {
      const dados = data?.Users

      this.title = dados['title']
      this.content = dados['content']
      this.category = dados['category']
    })
  }

  onSubmit(){
    const id = this.route.snapshot.params['id']
    if(this.formulario.valid){
      const EdidadoCurso = {
        title: this.formulario.value.title!,
        content: this.formulario.value.content!,
        category: this.formulario.value.category!
      }
      this.service.updateCurso(EdidadoCurso, id).subscribe((data)=>{
        console.log(data)
      })
    }
    this.router.navigate(['/'])
  }
}
