import { Component, OnInit, ViewChild} from '@angular/core';
import { AppService } from './app.service';
import { Agents } from './agents.modul';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  data: Agents;
  isolatedCountrysCount = {};
  mostIsolatedCountry: string;

  constructor(private appService: AppService) {}

  ngOnInit(){
    this.appService.getData()
      .subscribe((result: Agents) => {
        this.data = result;
        this.getMostIsolatedCountry(result);
      });

  }

  getMostIsolatedCountry(data) {
    let agentsIolated = {};
    data.forEach((v) => {
      if(agentsIolated.hasOwnProperty(v.agent)) {
        agentsIolated[v.agent] = {'isolated': false};
      }else{
        agentsIolated[v.agent] = {'isolated': true};
      }
    });

    data.forEach((v) => {
      if(agentsIolated[v.agent].isolated) {
        if(this.isolatedCountrysCount.hasOwnProperty(v.country)) {
          this.isolatedCountrysCount[v.country] += 1;
        }else{
          this.isolatedCountrysCount[v.country] = 1;
        }
      }
    });
    this.mostIsolatedCountry = Object.keys(this.isolatedCountrysCount).reduce((a, b) => this.isolatedCountrysCount[a] > this.isolatedCountrysCount[b] ? a : b);
  }
}
