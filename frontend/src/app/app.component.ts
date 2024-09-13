import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { AddCursoComponent } from './components/add-curso/add-curso.component';
import { ViewsCursoComponent } from './components/views-curso/views-curso.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AddCursoComponent, ViewsCursoComponent, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'frontend';
}
