import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CarService } from '../../services/car.service';
import { CAR, COLOR } from '../../cars';
import { first, take } from 'rxjs';

@Component({
  selector: 'app-step1',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './step1.component.html',
  styleUrl: './step1.component.scss'
})
export class Step1Component implements OnInit {
  cars: CAR[] = [];
  carColors: COLOR[] = [];
  // codeModel: string = '';
  // codeColor: string = '';

  codeModelSelected: string = '';
  codeColorSelected: string = '';


  carColorsSelected: COLOR[] = [];

  carColorsShow?: COLOR[];


  constructor(private carService: CarService) { }

  ngOnInit(): void {
    this.carService.getCarModels().subscribe(res => {
      this.cars = res;
    });


    this.carService.codeModelSelectedService.pipe(take(1)).subscribe(a => this.codeModelSelected = a);
    console.log('this.codeModelSelected', this.codeModelSelected);

    this.carService.codeColorSelectedService.pipe(take(1)).pipe(take(1)).subscribe(a => this.codeColorSelected = a);
    console.log('this.codeColorSelected', this.codeColorSelected);

    this.carService.carColorsService.subscribe(a => this.carColorsSelected = a);
    console.log('this.carColorsSelected', this.carColorsSelected);
  }

  onSelectCarModel(e: any) {
    this.codeModelSelected = e.target.value;

    this.carService.codeModelService = this.codeModelSelected;

    this.carService.modelDescriptionService = this.getModelDescription(this.codeModelSelected);

    this.carColors = this.getCarColor(this.codeModelSelected);
    console.log('carColors', this.carColors);



    this.carService.carColorsService.next(this.carColors);


    this.carService.codeModelSelectedService.next(this.codeModelSelected);
  }

  onSelectCarColor(e: any) {
    this.codeColorSelected = e.target.value;

    console.log('this.codeColorSelected', this.codeColorSelected);


    this.carService.carColorDescriptionService = this.getCarColorDescription(this.codeColorSelected);

    console.log('this.carService.carColorDescriptionService', this.carService.carColorDescriptionService);

    this.carService.carColorPriceService = this.getCarColorPrice(this.codeColorSelected);

    this.carService.isStep2Service.next(false);

    this.carService.codeColorSelectedService.next(this.codeColorSelected);
  }

  getCarColor(codeModel: string) {
    for (let car of this.cars) {
      if (car.code === codeModel)
        return car.colors;
    }
    return [];
  }

  getCarColorDescription(codeColor: string) {
    for (let car of this.carColors) {
      if (car.code === codeColor)
        return car.description;
    }
    return '';
  }

  getCarColorPrice(codeColor: string) {
    for (let car of this.carColors) {
      if (car.code === codeColor)
        return car.price;
    }
    return;
  }

  getModelDescription(codeModel: string) {
    for (let car of this.cars) {
      if (car.code === codeModel)
        return car.description;
    }
    return '';
  }

  showImg() {
    this.carService.imgService = `https://interstate21.com/tesla-app/images/${this.codeModelSelected}/${this.codeColorSelected}.jpg`;
    return `https://interstate21.com/tesla-app/images/${this.codeModelSelected}/${this.codeColorSelected}.jpg`
  }
}
