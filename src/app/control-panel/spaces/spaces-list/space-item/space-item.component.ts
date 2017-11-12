import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/operator/take';

import { Space } from '../../../shared/space.model';
// import { SpacesService } from '../../spaces.service';
import * as SpacesActions from '../../store/spaces.actions';
import * as fromSpaces from '../../store/spaces.reducers';

@Component({
  selector: 'app-space-item',
  templateUrl: './space-item.component.html',
  styleUrls: ['./space-item.component.scss']
})
export class SpaceItemComponent implements OnInit, OnDestroy {
  @Input() space: Space;
  @Input() index: number;
  private addMode: boolean;
  private editMode = false;
  // updatedSpaceName: string;
  // updatedSpace: Space;
  private subscription: Subscription;
  updatedSpaceName: string;
  updatedPicture: string;

  constructor(
              // private spacesService: SpacesService,
              private store: Store<fromSpaces.FeatureState>) { }

  ngOnInit() {
    this.subscription = this.store.select('spaces')
      .take(1)
      .subscribe(
        data => {
          if (data.addMode) {
            this.addMode = data.addMode;
          } else {
            this.addMode = false;
          }
        }
      );
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onEnableEdit() {
    this.editMode = true;

    this.updatedSpaceName = this.space.name;
    this.updatedPicture = this.space.picture;
    // console.log(this.updatedSpace);

  }
  onUpdate() {
    this.onCancelEdit();
    const updatedSpace = new Space(this.updatedSpaceName, this.updatedPicture);
    // this.spacesService.updateSpace(updatedSpace, this.index);
    this.store.dispatch(new SpacesActions.UpdateSpace({index: this.index, updatedSpace}));
  }

  onCancelEdit() {
    this.editMode = false;
    // this.updatedSpace = this.space;
  }

  onCancelAdd() {
    // this.spacesService.addModeActivated.next(false);
    this.store.dispatch(new SpacesActions.SwitchAddMode(false));
  }

  onDelete() {
    // this.spacesService.deleteSpace(this.index);
    this.store.dispatch(new SpacesActions.DeleteSpace(this.index));
  }

  onAddSpace(form: NgForm) {
    const value = form.value;
    const newSpace: Space = new Space(value.spaceName);

    // this.spacesService.addSpace(newSpace);
    this.store.dispatch(new SpacesActions.AddSpace(newSpace));
    this.store.dispatch(new SpacesActions.SwitchAddMode(false));
  }
}
