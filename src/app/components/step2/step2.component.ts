import { Component, OnInit } from '@angular/core';
import { CarService } from '../../services/car.service';
import { OPTION } from '../../cars';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-step2',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './step2.component.html',
  styleUrl: './step2.component.scss'
})
export class Step2Component implements OnInit {
  carOption: OPTION = {
    configs: [],
    towHitch: false,
    yoke: false
  };

  range: number | undefined;
  speed: number | undefined;
  price: number | undefined;

  isTow: boolean | undefined;
  isYoke: boolean | undefined;

  isShow = false;

  img2 = this.carService.imgService;

  isTowCheck?: boolean;
  isYokeCheck?: boolean;


  id!: number;

  idSelected?: number;

  carOptionsSelected?: OPTION

  constructor(private carService: CarService) { }
  ngOnInit(): void {
    // console.log('this.carService.codeModelService2', this.carService.codeModelService);

    this.carService.getCarOptions(this.carService.codeModelService).subscribe((res) => {
      this.carOption = res;
      this.isTow = this.carOption.towHitch;
      this.isYoke = this.carOption.yoke;
    });
    this.carService.isCheckedTowService.subscribe(a => this.isTowCheck = a);
    this.carService.isCheckedYokeService.subscribe(a => this.isYokeCheck = a);

    this.carService.carOptionsService.subscribe(a => this.carOptionsSelected = a);

    this.carService.carIdSelectedServie.subscribe(a => this.idSelected = a);
    console.log('this.idSelected', this.idSelected);

  }

  onSelectConfig(e: any) {
    this.id = e.target.value;
    this.isShow = true;
    this.carService.isStep3Service.next(false);
    for (let config of this.carOption.configs) {
      if (config.id == this.id) {
        this.range = config.range;
        this.carService.rangeService = this.range;
        this.speed = config.speed;
        this.carService.speedService = this.speed;
        this.price = config.price;
        this.carService.priceService = this.price;
        this.carService.configDescriptionService = config.description;
      }
    }
    this.carService.carIdSelectedServie.next(this.id)
  }

  isYokeChecked(e: any) {
    if (e.target.checked) {
      this.carService.isShowYokeService = e.target.checked;
      this.carService.yokePriceService = 1000;
      this.carService.isCheckedYokeService.next(true);
    } else {
      this.carService.yokePriceService = 0;
      this.carService.isShowYokeService = e.target.checked;
      this.carService.isCheckedYokeService.next(false);
    }
  }

  isTowChecked(e: any) {
    if (e.target.checked) {
      this.carService.isShowTowService = e.target.checked;
      this.carService.towPriceService = 1000;
      this.carService.isCheckedTowService.next(true);
    } else {
      this.carService.towPriceService = 0;
      this.carService.isShowTowService = e.target.checked;
      this.carService.isCheckedTowService.next(false);
    }
  }

}
