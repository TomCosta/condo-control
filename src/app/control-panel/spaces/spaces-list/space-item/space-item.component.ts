import { Component, Input } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Space } from '../../../shared/space.model';
import { SpacesService } from '../../spaces.service';

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
  // updatedSpaceName: string;
  // updatedSpace: Space;

  updatedSpaceName: string;
  updatedPicture: string;

  constructor(private spacesService: SpacesService) { }

  onEnableEdit() {
    this.editMode = true;

    this.updatedSpaceName = this.space.name;
    this.updatedPicture = this.space.picture;
    // console.log(this.updatedSpace);

  }
  onUpdate() {
    this.onCancelEdit();
    const updatedSpace = new Space(this.updatedSpaceName, this.updatedPicture);
    this.spacesService.updateSpace(updatedSpace, this.index);
  }

  onCancelEdit() {
    this.editMode = false;
    // this.updatedSpace = this.space;
  }

  onCancelAdd() {
    this.spacesService.addModeActivated.next(false);
  }

  onDelete() {
    this.spacesService.deleteSpace(this.index);
  }

  onAddSpace(form: NgForm) {
    const value = form.value;
    const newSpace: Space = new Space(value.spaceName);

    this.spacesService.addSpace(newSpace);
  }

  onKeydown(event) {
    if (event.key === 'Escape') {
      this.onCancelEdit();
    }
  }
}
