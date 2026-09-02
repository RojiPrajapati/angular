import { AfterViewInit, Component, OnInit, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeService } from './services/home.service';

@Component({
  selector: 'app-home',
  imports: [RouterOutlet],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class HomeComponent implements OnInit, AfterViewInit {

  public homeService = inject(HomeService);

  total: number = 0;
  message: string = 'Not Rendered';

  ngOnInit(): void {
    this.message = 'Rendering...';

    let x = 5;
    let b = 423;

    this.total = this.homeService.sum(x, b);

    console.log(this.homeService.getDateFromLoginPage());
  }

  ngAfterViewInit(): void {
    this.message = 'Rendered';
  }
}