import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Assignment } from '../assignment.model';

@Component({
  selector: 'app-assignment-detail',
  templateUrl: './assignment-detail.component.html',
  styleUrls: ['./assignment-detail.component.css']
})
export class AssignmentDetailComponent {
  @Input()
  assignmentTransmis?: Assignment;

  @Output()
  deleteAssignment = new EventEmitter();

  onDeleteAssignment() {
    console.log("effacé");
    if (!this.assignmentTransmis) return;
    //on emet l'evenemet deleteAssignment
    this.deleteAssignment.emit();
    //pour cacher le detail, on met l'assignment à null
    this.assignmentTransmis = undefined;
  }
}
