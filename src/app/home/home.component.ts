import {Component, OnInit, ViewChild} from '@angular/core';
import {NbDialogService} from "@nebular/theme";
import {OffersComponent} from "../offers/offers.component";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  @ViewChild('kilometers') km: any = 0;
  @ViewChild('age') age: any = 0;
  @ViewChild('weight') weight: any = 0;

  constructor(private dialogService: NbDialogService) {
  }

  ngOnInit(): void {
  }

  sendData() {
    this.dialogService.open(OffersComponent, {
      autoFocus: false,
      context: {
        km: this.km.nativeElement.value,
        age: this.age.nativeElement.value,
        weight: this.weight.nativeElement.value
      }
    })
  }

}
