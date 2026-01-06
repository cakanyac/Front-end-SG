import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService, Robot } from '../../services/data.service';

@Component({
  selector: 'app-robot',
  imports: [CommonModule],
  templateUrl: './robot.html',
  styleUrl: './robot.css',
})
export class RobotComponent implements OnInit {
  robots: Robot[] = [];
  loading = true;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getRobots().subscribe({
      next: (robots) => {
        this.robots = robots;
        this.loading = false;
      },
      error: (err) => {
        console.error('Error loading robots:', err);
        this.loading = false;
      }
    });
  }

  getStatusColor(statut: string): string {
    switch (statut) {
      case 'actif':
        return '#28a745';
      case 'en_mission':
        return '#ffc107';
      case 'inactif':
        return '#dc3545';
      default:
        return '#6c757d';
    }
  }

  getStatusLabel(statut: string): string {
    switch (statut) {
      case 'actif':
        return 'Actif';
      case 'en_mission':
        return 'En mission';
      case 'inactif':
        return 'Inactif';
      default:
        return 'Unknown';
    }
  }
}
