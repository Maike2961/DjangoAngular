import { Component, OnInit } from '@angular/core';
import { AddserviceService } from '../../services/addservice.service';
import { Curso } from '../../interface/interface';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-views-curso',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './views-curso.component.html',
  styleUrl: './views-curso.component.css'
})
export class ViewsCursoComponent implements OnInit {

  constructor(private cursoService: AddserviceService){}

  lista: Curso[] = []

  ngOnInit(): void{
    this.cursoService.getData().subscribe((data)=>{
      this.lista = data?.Users
    })
  }
  DeleteCurso(curso: Curso){
    this.cursoService.deleteCurso(curso).subscribe(()=>{
      this.lista = this.lista.filter((t) => t.id !== curso.id)
    })
  }
}
