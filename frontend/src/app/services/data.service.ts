import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Parcelle {
  id: string;
  nom: string;
  superficie: number;
  culture: string;
  type_sol: string;
  latitude: number;
  longitude: number;
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
  private apiUrl = 'http://localhost:8080/api/v1';

  constructor(private http: HttpClient) {}

  // PARCELLES
  getParcelles(): Observable<Parcelle[]> {
    return this.http.get<Parcelle[]>(`${this.apiUrl}/parcelles`);
  }

  getParcelleById(id: string): Observable<Parcelle> {
    return this.http.get<Parcelle>(`${this.apiUrl}/parcelles/${id}`);
  }

  createParcelle(parcelle: Omit<Parcelle, 'id'>): Observable<Parcelle> {
    return this.http.post<Parcelle>(`${this.apiUrl}/parcelles`, parcelle);
  }

  updateParcelle(id: string, parcelle: Partial<Parcelle>): Observable<Parcelle> {
    return this.http.put<Parcelle>(`${this.apiUrl}/parcelles/${id}`, parcelle);
  }

  deleteParcelle(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/parcelles/${id}`);
  }

  // CAPTEURS
  getCapteurs(): Observable<Capteur[]> {
    return this.http.get<Capteur[]>(`${this.apiUrl}/capteurs`);
  }

  getCapteursByParcelleId(parcelleId: string): Observable<Capteur[]> {
    return this.http.get<Capteur[]>(`${this.apiUrl}/parcelles/${parcelleId}/capteurs`);
  }

  createCapteur(capteur: Omit<Capteur, 'id'>): Observable<Capteur> {
    return this.http.post<Capteur>(`${this.apiUrl}/capteurs`, capteur);
  }

  updateCapteur(id: number, capteur: Partial<Capteur>): Observable<Capteur> {
    return this.http.put<Capteur>(`${this.apiUrl}/capteurs/${id}`, capteur);
  }

  deleteCapteur(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/capteurs/${id}`);
  }

  // ROBOTS
  getRobots(): Observable<Robot[]> {
    return this.http.get<Robot[]>(`${this.apiUrl}/robots`);
  }

  getRobotById(id: number): Observable<Robot> {
    return this.http.get<Robot>(`${this.apiUrl}/robots/${id}`);
  }

  createRobot(robot: Omit<Robot, 'id'>): Observable<Robot> {
    return this.http.post<Robot>(`${this.apiUrl}/robots`, robot);
  }

  updateRobot(id: number, robot: Partial<Robot>): Observable<Robot> {
    return this.http.put<Robot>(`${this.apiUrl}/robots/${id}`, robot);
  }

  updateRobotStatus(id: number, statut: 'actif' | 'inactif' | 'en_mission', batterie?: number, localisation?: string): Observable<Robot> {
    const body = { statut, batterie, localisation };
    return this.http.put<Robot>(`${this.apiUrl}/robots/${id}/statut`, body);
  }

  deleteRobot(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/robots/${id}`);
  }

  // DASHBOARD - À DÉFINIR AVEC MAËL
  // Pour l'instant, retourner les stats en comptant les entités
  getDashboardStats(): Observable<DashboardStats> {
    return this.http.get<DashboardStats>(`${this.apiUrl}/dashboard/stats`);
  }
}
