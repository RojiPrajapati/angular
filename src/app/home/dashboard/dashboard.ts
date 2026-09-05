import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../../services/api';

@Component({
  imports: [],
  selector: 'app-dashboard',
  styleUrl: './dashboard.scss',
  templateUrl: './dashboard.html',
})
export class Dashboard implements OnInit {

  private router = inject(Router);
  private activatedRoute = inject(ActivatedRoute);
  private apiService = inject(ApiService);

  ngOnInit(): void {

    this.apiService.getAllProduct().subscribe(
      (response: any) => {
        console.log(response);
      }
    );

  }
}