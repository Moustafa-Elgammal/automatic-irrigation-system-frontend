import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Plot } from 'src/app/models/plots';
import { PlotsService } from 'src/app/service/plots.service';

@Component({
  selector: 'app-update-plot',
  templateUrl: './update-plot.component.html',
  styleUrls: ['./update-plot.component.css']
})
export class UpdatePlotComponent implements OnInit {

  plot: Plot = new Plot();

  constructor(
    private plotService: PlotsService,
    private router: Router,
    private activatedRoute: ActivatedRoute
    ) { }

  ngOnInit(): void {
    let id = this.activatedRoute.snapshot.paramMap.get('id');    
    if(id){
      this.plotService.getPlot(+id)
    .subscribe(data => this.plot = data);
    } 
    else{
      this.router.navigateByUrl("/plots");
    }

  }

  async updatePlot()
  {
    this.plotService.updatePlot(this.plot);
    await this.router.navigateByUrl("/plots");
  }

  onChangeDate(value: string | number | Date)
  {
    this.plot.slot = new Date(value);
  }

}
