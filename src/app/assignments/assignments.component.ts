import { Component } from '@angular/core';

@Component({
  selector: 'app-assignments',
  templateUrl: './assignments.component.html',
  styleUrls: ['./assignments.component.css']
})
export class AssignmentsComponent {
  titre ='Liste des devoirs à rendre';
  c="orange";
  //tableau de devoir à rendre
  assignments = [
    {
      nom : "Devoir Angular de Mr Buffa",
      dateDeRendu : "01/06/2023",
      rendu : false
    },
    {
      nom : "Devoir Angular de Mr Galli",
      dateDeRendu : "15/04/2023",
      rendu : true
    },
    {
      nom : "Devoir Angular de Mr Mopolo",
      dateDeRendu : "01/05/2023",
      rendu : true
    }
  ]
}
