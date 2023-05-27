import { Component, EventEmitter, Output } from '@angular/core';
import { Assignment } from '../assignment.model';

@Component({
  selector: 'app-add-assignment',
  templateUrl: './add-assignment.component.html',
  styleUrls: ['./add-assignment.component.css']
})
export class AddAssignmentComponent {
  //champs du formulaire
  nomDevoir = "";
  dateDeRendu!: Date;

  @Output() //envoyer un evenement du fils au père

  nouvelAssignment = new EventEmitter<Assignment>();

  onSubmit(event: any) {
    console.log("la date est : " + this.dateDeRendu);
    //verification si les champs ne sont pas vides
    if (this.nomDevoir === "") return;
    if (this.dateDeRendu === undefined) return;

    let nouvelAssignment = new Assignment(); 
    nouvelAssignment.nom =this.nomDevoir;
    nouvelAssignment.dateDeRendu = this.dateDeRendu;
    nouvelAssignment.rendu = false;
    // on envoi l'assignement qu'on vient de créer
    //attaché à un évènement du nom "nouvelAssignment"
    //remarque : ici, dans ce composant, le même nom est aussi l'emetteur de l'évènement
    this.nouvelAssignment.emit(nouvelAssignment)
  }


}
