import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { State, CAR, COLOR, OPTION } from '../cars';

@Injectable({
  providedIn: 'root'
})
export class CarService {


  constructor(private http: HttpClient) { }

  getCarModels(): Observable<CAR[]> {
    return this.http.get<CAR[]>('http://localhost:4200/models');
  }

  getCarOptions(codeModel: string): Observable<OPTION> {
    return this.http.get<OPTION>(`http://localhost:4200/options/${codeModel}`);
  }
  codeModelService: string = '';

  imgService: string = '';
  modelDescriptionService: string = '';
  // modelDescriptionService = new BehaviorSubject('');

  configDescriptionService: string = '';
  rangeService: number | undefined;
  speedService: number | undefined;
  priceService: number = 0;
  carColorDescriptionService: string | undefined;
  carColorPriceService: any;
  yokePriceService: number = 0;
  towPriceService: number = 0;
  isShowYokeService: boolean | undefined;
  isShowTowService: boolean | undefined;

  isStep2Service = new BehaviorSubject(true);
  isStep3Service = new BehaviorSubject(true);

  // cars: CAR[] = [];
  carColorsService = new BehaviorSubject<COLOR[]>([]);
  carOptionsService = new BehaviorSubject<OPTION>({
    configs: [],
    towHitch: false,
    yoke: false
  });
  // // codeModelService = new BehaviorSubject('');
  // codeColorService = new BehaviorSubject('');


  isCheckedYokeService = new BehaviorSubject(false);
  isCheckedTowService = new BehaviorSubject(false);

  codeModelSelectedService = new BehaviorSubject('');
  codeColorSelectedService = new BehaviorSubject('');

  carIdSelectedServie = new BehaviorSubject(-1);


  // private initialState: State = {
  //   codeModelSelected: '',
  //   codeColorSelected: '',
  //   // isCheckedYoke: false,
  //   // isCheckedTow: false
  // };

  // appState$ = new BehaviorSubject<State>(this.initialState);


}
