import { Injectable } from '@angular/core';
import { Assignment } from '../assignments/assignment.model';
import { Observable, of } from 'rxjs';

@Injectable({ // on peut injecter dans le constructeur des composants qui en ont besoin
  providedIn: 'root' //dans toutes les composants
})
export class AssignmentsService {
//tableau de devoir à rendre
assignments: Assignment[] = [
  {
    nom: "Devoir Angular de Mr Buffa",
    dateDeRendu: new Date("01/06/2023"),
    rendu: false
  },
  {
    nom: "Devoir Angular de Mr Galli",
    dateDeRendu: new Date("12/04/2023"),
    rendu: true
  },
  {
    nom: "Devoir Angular de Mr Mopolo",
    dateDeRendu: new Date("01/05/2023"),
    rendu: true
  }
]
  constructor() { }

  getAssignments():Observable<Assignment[]> {
    //normalement on doit envoyer une requete HTTP
    //sur un web service, et ca peut prendre du temps
    //on a besoin d'attendre que les données arrivent
    //angular utilise pour cela la notion d'observable, 
    //qui veut dire charger petit à petit les données
    //et les lires respectivements suivant leur arrivé ou chargement
    //of() permet de créer un observable qui va
    //contenir les données du tableau assignments
    return of(this.assignments);
  }
}
