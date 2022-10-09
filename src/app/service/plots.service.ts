import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { map, Observable } from 'rxjs';
import { Plot } from '../models/plots';

@Injectable({
  providedIn: 'root'
})
export class PlotsService {

  private url: string = "http://localhost:8080/api/v1/plots";

  constructor(
    private client: HttpClient,
    private router:  Router
    ) { }



  getPlots(): Observable<Plot[]>{
    return this.client.get <Plot[]>(this.url).pipe(
      map(response => response)
    );
  }


  getPlot(id: number): Observable<Plot>{
    return this.client.get <Plot>(`${this.url}/${id}`).pipe(
      map(response => response)
    );
  }

  addPlot(plot: Plot){
    this.client.post<Plot>(this.url, plot).subscribe( (data) => {
      this.router.navigateByUrl("/plots");
    });
  }

  updatePlot(plot: Plot){
    this.client.post<Plot>(`${this.url}/${plot.id}`, plot).subscribe((data) => {});
  }

  deletePlot(id: number): Observable<any>{
    return this.client.delete(`${this.url}/${id}`, {responseType: 'text'});
  }
}
