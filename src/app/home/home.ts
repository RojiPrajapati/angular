import { Component, effect, EventEmitter, Input, Output } from '@angular/core';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';

@Component({
  imports: [],
  selector: 'app-home',
  styleUrl: './home.scss',
  templateUrl: './home.html',
})
export class Home {
  message: string ='';  

  // constructor(
  //   private ActivatedRoute: ActivatedRoute
  // ){
  //   this.ActivatedRoute.queryParams.subscribe(
  //     (params)=>{
  //       this.message =params['message'];
  //       console.log(this.message);
  //     }
  //   );
  // }

  constructor(private router: Router){
    effect(()=>{
      console.log(this.router.lastSuccessfulNavigation()?.extras.state?.['data']);
    });
  }
}