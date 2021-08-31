import {Component, OnInit} from '@angular/core';
import {Aeroflot} from '../classes/Aeroflot';
import {RussianRailways} from '../classes/RussianRailways';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.scss']
})
export class OffersComponent implements OnInit {

  km: number = 0;
  age: number = 0;
  weight: number = 0;
  aeroflot: { name: string, cost: number }[] = [{name: '0', cost: -1}];
  rr: { name: string, cost: number }[] = [{name: '0', cost: -1}];

  constructor() {
  }

  ngOnInit(): void {
    let aeroflot = new Aeroflot(this.km, this.age, this.weight);
    let rr = new RussianRailways(this.km, this.age, this.weight);
    this.aeroflot.push({name: 'Эконом', cost: aeroflot.economyTicketCost()});
    this.aeroflot.push({name: 'Продвинутый', cost: aeroflot.proTicketCost()});
    this.aeroflot.push({name: 'Люкс', cost: aeroflot.luxTicketCost()});
    this.rr.push({name: 'Эконом', cost: rr.economyTicketCost()});
    this.rr.push({name: 'Продвинутый', cost: rr.proTicketCost()});
    this.rr.push({name: 'Люкс', cost: rr.luxTicketCost()});
    this.aeroflot = this.aeroflot.filter(el => el.cost !== -1);
    this.rr = this.rr.filter(el => el.cost !== -1 );

  }
}
