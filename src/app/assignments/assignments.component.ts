import { Component } from '@angular/core';
import { Assignment } from './assignment.model';
import { AssignmentsService } from '../shared/assignments.service';

@Component({
  selector: 'app-assignments',
  templateUrl: './assignments.component.html',
  styleUrls: ['./assignments.component.css']
})
export class AssignmentsComponent {
  titre = 'Liste des devoirs à rendre';
  c = "orange";
  nomDevoir = "";
  dateDeRendu!: Date;
  assignmentSelectionne!: Assignment;
  formVisible = false;
  assignments: Assignment[]=[];

  constructor(private assignmentsService:AssignmentsService) { // pour appeller le service, il faut un construtor private

  }


  ngOnInit(): void {
    console.log("Composant instacié et rendu HTML effectué (le composant est visible dans la page HTMS")
    this.assignmentsService.getAssignments()
    .subscribe(assignments => {
      this.assignments = assignments;
      console.log ("Données recues");
    });
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

  onAssignmentClick(assignment: Assignment) {
    console.log("Assignment cliqué :" + assignment.nom)
    this.assignmentSelectionne = assignment;
  }
  onAddAssignmentBtnClick() {
    this.formVisible = true;
  }
  onNouvelAssignment(a: Assignment) {
    this.assignments.push(a);

    this.formVisible = false;
  }
  onDeleteAssignment() {
    //pour supprimer on passe à la methode splice
    //l'index de l'assignment à supprimer et
    //le nomre d'element à supprimer (ici 1)
    const index = this.assignments.indexOf(this.assignmentSelectionne);
    this.assignments.splice(index, 1);
  }
}
