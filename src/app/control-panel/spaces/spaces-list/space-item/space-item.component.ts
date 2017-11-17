import { Component, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Store } from '@ngrx/store';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

import { Space } from '../../../shared/space.model';
import * as SpacesActions from '../../store/spaces.actions';
import * as fromSpaces from '../../store/spaces.reducers';

@Component({
  selector: 'app-space-item',
  templateUrl: './space-item.component.html',
  styleUrls: ['./space-item.component.scss']
})
export class SpaceItemComponent {
  @Input() space: Space;
  @Input() index: number;
  @Input() addMode: boolean;
  private editMode = false;
  private modalReference: any;
  private enableSB = false;
  updatedSpaceName: string;
  updatedPicture: string;
  closeResult: string;

  constructor(private modalService: NgbModal,
              private store: Store<fromSpaces.FeatureState>) { }

  onEnableEdit() {
    this.editMode = true;

    this.updatedSpaceName = this.space.name;
    this.updatedPicture = this.space.picture;

  }
  onUpdate() {
    this.onCancelEdit();
    const updatedSpace = new Space(this.updatedSpaceName, this.updatedPicture);
    this.store.dispatch(new SpacesActions.UpdateSpaceRequest({$key: this.space.$key, updatedSpace: updatedSpace}));
  }

  onCancelEdit() {
    this.editMode = false;
    // this.updatedSpace = this.space;
  }

  onCancelAdd() {
    this.store.dispatch(new SpacesActions.SwitchAddMode(false));
  }

  onDelete() {
    this.store.dispatch(new SpacesActions.DeleteSpaceRequest(this.space.$key));
  }

  onAddSpace(form: NgForm) {
    const value = form.value;
    const newSpace: Space = new Space(value.spaceName, 'foto');

    // this.spacesService.addSpace(newSpace);
    this.store.dispatch(new SpacesActions.AddSpaceRequest(newSpace));
    this.store.dispatch(new SpacesActions.SwitchAddMode(false));
  }

  open(content) {
    this.modalReference = this.modalService.open(content);
  }

  onConfirmExclusion () {
    this.modalReference.close();
    this.onDelete();

  }

  showSnackBar() {
    this.enableSB = true;

    setTimeout(() => {
      this.enableSB = !this.enableSB;
    }, 2000);
  }
}
