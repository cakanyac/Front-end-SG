import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService, DashboardStats, Parcelle } from '../../services/data.service';

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class DashboardComponent implements OnInit {
  stats!: DashboardStats;
  parcelles!: Parcelle[];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.stats = this.dataService.getDashboardStats();
    this.parcelles = this.dataService.getParcelles();
  }
}
