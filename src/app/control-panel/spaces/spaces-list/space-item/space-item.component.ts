import { Component, Input, OnDestroy, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Store } from '@ngrx/store';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { Space } from '../../../shared/space.model';
import * as SpacesActions from '../../store/spaces.actions';
import * as fromSpaces from '../../store/spaces.reducers';
import { UploadService } from '../../../shared/upload/upload.service';
import { Upload } from '../../../shared/upload/upload.model';
import { Subscription } from 'rxjs/Subscription';

import 'rxjs/add/operator/take';

@Component({
  selector: 'app-space-item',
  templateUrl: './space-item.component.html',
  styleUrls: ['./space-item.component.scss'],
  providers: []
})
export class SpaceItemComponent implements OnDestroy {
  @Input() space: Space;
  @Input() index: number;
  @Input() addMode: boolean;
  private editMode = false;
  private modalReference: any;
  private enableSB = false;
  updatedSpaceName: string;
  updatedPicture: string;
  closeResult: string;
  selectedFiles: FileList;
  currentUpload: Upload;

  subscription: Subscription;
  @ViewChild('editConfirm') private editConfirm;

  constructor(private modalService: NgbModal,
              private store: Store<fromSpaces.FeatureState>,
              private upSvc: UploadService
              ) { }

  ngOnDestroy() {
    // this.subscription.unsubscribe();
  }
  uploadSingle(event) {
    this.selectedFiles = event.target.files;
    const file = this.selectedFiles.item(0);
    this.currentUpload = new Upload(file);
    this.upSvc.pushUpload(this.currentUpload);
  }

  onEnableEdit() {

    this.subscription = this.store.select('spaces').take(1).subscribe(
      (data) => {
        if (data.selectedItem === null) {
          this.store.dispatch(new SpacesActions.SelectSpace(this.space.$key));
          this.editMode = true;
          this.updatedSpaceName = this.space.name;
          this.updatedPicture = this.space.picture;
        } else {
          this.open(this.editConfirm);
        }
      }
    );
  }

  onUpdate() {
    this.onCancelEdit();
    const updatedSpace = new Space(this.updatedSpaceName, this.updatedPicture);
    this.store.dispatch(new SpacesActions.UpdateSpaceRequest({$key: this.space.$key, updatedSpace: updatedSpace}));
  }

  updatingItem() {
    this.store.dispatch(new SpacesActions.UpdateForm({name: this.updatedSpaceName, picture: this.updatedPicture}));
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
    const newSpace: Space = new Space(value.spaceName, this.currentUpload.url);

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
  onConfirmSaveEdit() {
    let key: string;
    let name: string;
    let picture: string;
    const newItem = this.store.select('spaces').subscribe(
        (item) => {
          key = item.selectedItem;
          name = item.updatedItem.name;
          picture = item.updatedItem.picture;
        });
    const newSpace = new Space(name, picture);
    delete(newSpace.$key);
    this.store.dispatch(new SpacesActions.UpdateSpaceRequest({$key: key, updatedSpace: newSpace}));
    newItem.unsubscribe();
    this.onCancelEditModal();
  }

  onCancelEditModal () {
    this.modalReference.close();
    this.onCancelEdit();
    this.store.dispatch(new SpacesActions.SelectSpace(null));
  }

  showSnackBar() {
    this.enableSB = true;

    setTimeout(() => {
      this.enableSB = !this.enableSB;
    }, 5000);
  }
}
