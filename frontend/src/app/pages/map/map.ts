import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService, Parcelle } from '../../services/data.service';

@Component({
  selector: 'app-map',
  imports: [CommonModule],
  templateUrl: './map.html',
  styleUrl: './map.css',
})
export class MapComponent implements OnInit {
  parcelles!: Parcelle[];
  selectedParcelle: Parcelle | null = null;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.parcelles = this.dataService.getParcelles();
  }

  selectParcelle(parcelle: Parcelle): void {
    this.selectedParcelle = parcelle;
  }
}
