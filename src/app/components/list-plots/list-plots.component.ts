import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Plot } from 'src/app/models/plots';
import { PlotsService } from 'src/app/service/plots.service';

@Component({
  selector: 'app-list-plots',
  templateUrl: './list-plots.component.html',
  styleUrls: ['./list-plots.component.css']
})
export class ListPlotsComponent implements OnInit {

  plots: Plot[] = [];

  constructor(private plotService: PlotsService, private router: Router) { }

  ngOnInit(): void {
    this.plotService.getPlots()
    .subscribe(data => this.plots = data);
  }

  toggleSensor(plot: Plot): void{
    this.plotService.updatePlot(plot);
  }

  deletePlot(id: number){
    if (confirm("Are you deleting this?!") == true) {
      this.plotService.deletePlot(id)
      .subscribe(data => {
        this.ngOnInit();
      });
    }
  }
}
