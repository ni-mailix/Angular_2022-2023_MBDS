import { Component } from '@angular/core';
import { Assignment } from './assignment.model';

@Component({
  selector: 'app-assignments',
  templateUrl: './assignments.component.html',
  styleUrls: ['./assignments.component.css']
})
export class AssignmentsComponent {
  titre = 'Liste des devoirs à rendre';
  c = "orange";
  ajoutActive = false;
  nomDevoir = "";
  dateDeRendu!: Date;
  assignmentSelectionne!: Assignment;
  formVisible=false;
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
 


  ngOnInit(): void {
    console.log("Composant instacié et rendu HTML effectué (le composant est visible dans la page HTMS")
    setTimeout(() => {
      this.ajoutActive = true;
    }, 3000);
  }

  onSubmit(event: any) {
    console.log("la date est : " + this.dateDeRendu);
    //verification si les champs ne sont pas vides
    if (this.nomDevoir === "") return;
    if (this.dateDeRendu === undefined) return;

    let nouvelAssignment = new Assignment();
    nouvelAssignment.nom = this.nomDevoir;
    nouvelAssignment.dateDeRendu = this.dateDeRendu;
    nouvelAssignment.rendu = false;

    this.assignments.push(nouvelAssignment);
  }

  onAssignmentClick(assignment : Assignment) {
    console.log("Assignment cliqué :" + assignment.nom)
    this.assignmentSelectionne = assignment;
  }
  onAddAssignmentBtnClick (){
    this.formVisible = true;
  }
onNouvelAssignment(a:Assignment) {
  this.assignments.push(a);

  this.formVisible = false;
}
}
