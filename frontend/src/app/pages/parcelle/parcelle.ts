import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService, Parcelle, Capteur } from '../../services/data.service';

@Component({
  selector: 'app-parcelle',
  imports: [CommonModule],
  templateUrl: './parcelle.html',
  styleUrl: './parcelle.css',
})
export class ParcelleComponent implements OnInit {
  parcelles!: Parcelle[];
  capteurs!: Capteur[];
  selectedParcelle!: Parcelle;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.parcelles = this.dataService.getParcelles();
    this.selectedParcelle = this.parcelles[0];
    this.loadCapteurs();
  }

  selectParcelle(parcelle: Parcelle): void {
    this.selectedParcelle = parcelle;
    this.loadCapteurs();
  }

  private loadCapteurs(): void {
    this.capteurs = this.dataService.getCapteursByParcelleId(this.selectedParcelle.id);
  }
}
