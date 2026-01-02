import { Injectable } from '@angular/core';

export interface Parcelle {
  id: number;
  nom: string;
  surface: number;
  capteurs: number;
  localisation: string;
}

export interface Capteur {
  id: number;
  nom: string;
  type: string;
  valeur: number;
  unite: string;
  lastUpdate: Date;
}

export interface Robot {
  id: number;
  nom: string;
  statut: 'actif' | 'inactif' | 'en_mission';
  batterie: number;
  localisation: string;
}

export interface DashboardStats {
  parcelles: number;
  capteurs: number;
  robots: number;
  alertes: number;
  missionsEnCours: number;
  capteursDysfonctionne: number;
}

@Injectable({
  providedIn: 'root'
})
export class DataService {
  
  // Mock Data - Parcelles
  private mockParcelles: Parcelle[] = [
    { id: 1, nom: 'Parcelle A - Blé', surface: 2.5, capteurs: 5, localisation: 'Normandie' },
    { id: 2, nom: 'Parcelle B - Maïs', surface: 3.0, capteurs: 8, localisation: 'Île-de-France' },
    { id: 3, nom: 'Parcelle C - Orge', surface: 1.8, capteurs: 3, localisation: 'Hauts-de-France' },
    { id: 4, nom: 'Parcelle D - Soja', surface: 2.2, capteurs: 6, localisation: 'Bourgogne' },
  ];

  // Mock Data - Capteurs
  private mockCapteurs: Capteur[] = [
    { id: 1, nom: 'Capteur Humidité 1', type: 'Humidité', valeur: 65, unite: '%', lastUpdate: new Date() },
    { id: 2, nom: 'Capteur Température 1', type: 'Température', valeur: 18.5, unite: '°C', lastUpdate: new Date() },
    { id: 3, nom: 'Capteur Lumière 1', type: 'Luminosité', valeur: 850, unite: 'lux', lastUpdate: new Date() },
    { id: 4, nom: 'Capteur pH 1', type: 'pH', valeur: 7.2, unite: 'pH', lastUpdate: new Date() },
    { id: 5, nom: 'Capteur Azote 1', type: 'Nitrogène', valeur: 120, unite: 'mg/L', lastUpdate: new Date() },
  ];

  // Mock Data - Robots
  private mockRobots: Robot[] = [
    { id: 1, nom: 'Robot Scout 1', statut: 'actif', batterie: 85, localisation: 'Parcelle A' },
    { id: 2, nom: 'Robot Scout 2', statut: 'en_mission', batterie: 45, localisation: 'Parcelle B' },
    { id: 3, nom: 'Robot Agricole 1', statut: 'inactif', batterie: 20, localisation: 'Base' },
  ];

  getDashboardStats(): DashboardStats {
    return {
      parcelles: this.mockParcelles.length,
      capteurs: this.mockCapteurs.length * 4,
      robots: this.mockRobots.length,
      alertes: 3,
      missionsEnCours: 2,
      capteursDysfonctionne: 1,
    };
  }

  getParcelles(): Parcelle[] {
    return this.mockParcelles;
  }

  getParcelleById(id: number): Parcelle | undefined {
    return this.mockParcelles.find(p => p.id === id);
  }

  getCapteurs(): Capteur[] {
    return this.mockCapteurs;
  }

  getCapteursByParcelleId(parcelleId: number): Capteur[] {
    // Simulation : retourner les capteurs liés à une parcelle
    return this.mockCapteurs.slice(0, this.mockParcelles.find(p => p.id === parcelleId)?.capteurs || 3);
  }

  getRobots(): Robot[] {
    return this.mockRobots;
  }

  getRobotById(id: number): Robot | undefined {
    return this.mockRobots.find(r => r.id === id);
  }

  updateRobotStatus(robotId: number, statut: 'actif' | 'inactif' | 'en_mission'): void {
    const robot = this.mockRobots.find(r => r.id === robotId);
    if (robot) {
      robot.statut = statut;
    }
  }
}
