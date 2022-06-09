import { Component } from '@angular/core';
import { RealStateService } from '../services/realState.service';

@Component({
  selector: 'app-vivens-component',
  templateUrl: './vivens.component.html',
  providers: [RealStateService]
})

export class VivensComponent {
  products = [];

  constructor(private realStateService: RealStateService) {
  }
  ngOnInit() {

    this.realStateService.getRealStateData().subscribe((data: any[]) => {
      console.log(data);
      this.products = data;
    });
  };
   
}
