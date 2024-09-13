import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Curso } from '../interface/interface';
import { UUID } from 'crypto';

@Injectable({
  providedIn: 'root'
})
export class AddserviceService {

  apiUrl = "http://127.0.0.1:8000/api/vi/"
  constructor(private http: HttpClient) { }

  getData(): Observable<any>{
    return this.http.get<any>(this.apiUrl)
  }

  getUserID(id: UUID): Observable<any>{
    return this.http.get(`${this.apiUrl}${id}`)
  }

  addCurso(curso: Curso): Observable<Curso>{
    return this.http.post<Curso>(`${this.apiUrl}`, curso)
    
  }

  updateCurso(curso: Curso, id: UUID): Observable<Curso>{
    console.log(id)
    return this.http.put<Curso>(`${this.apiUrl}${id}`, curso)
  }

  deleteCurso(curso: Curso): Observable<Curso>{
    return this.http.delete<Curso>(`${this.apiUrl}${curso.id}`)
  }
}
