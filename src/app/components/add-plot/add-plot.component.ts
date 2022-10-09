import { Component, OnInit } from '@angular/core';
import { Plot } from 'src/app/models/plots';
import { PlotsService } from 'src/app/service/plots.service';

@Component({
  selector: 'app-add-plot',
  templateUrl: './add-plot.component.html',
  styleUrls: ['./add-plot.component.css']
})
export class AddPlotComponent implements OnInit {
  
  plot: Plot = new Plot();
  date: Date = new Date();

  constructor(private plotService: PlotsService) { }

  ngOnInit(): void {
    this.plot.period = 1;
    this.plot.amount = 1;
  }

  savePlot(){
    this.plotService.addPlot(this.plot);
  }

}
