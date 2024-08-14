import { Component } from '@angular/core';
import { CarService } from '../../services/car.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-step3',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './step3.component.html',
  styleUrl: './step3.component.scss'
})
export class Step3Component {
  constructor(private carService: CarService) { }

  modelDescription = this.carService.modelDescriptionService;
  configDescription = this.carService.configDescriptionService;
  range = this.carService.rangeService;
  speed = this.carService.speedService;
  price = this.carService.priceService;
  carColorDescription = this.carService.carColorDescriptionService;
  carColorPrice = this.carService.carColorPriceService;
  isShowYoke = this.carService.isShowYokeService;
  isTowYoke = this.carService.isShowTowService;
  yokePrice = this.carService.yokePriceService;
  towPrice = this.carService.towPriceService;
  totalCost: number | undefined;
  img3 = this.carService.imgService;

  totalPrice() {
    return this.price + this.carColorPrice + this.towPrice + this.yokePrice;
  }
}
