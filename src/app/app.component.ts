import { Component } from '@angular/core';
import { AsyncPipe, JsonPipe } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CarService } from './services/car.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AsyncPipe, JsonPipe, RouterOutlet, RouterLink,],
  templateUrl: './app.component.html'
})
export class AppComponent {
  isStep2: boolean | undefined;
  isStep3: boolean | undefined;

  constructor(private carService: CarService) {
    this.carService.isStep2Service.subscribe(a => this.isStep2 = a);
    this.carService.isStep3Service.subscribe(a => this.isStep3 = a);
  }

  name = 'Angular';

}
