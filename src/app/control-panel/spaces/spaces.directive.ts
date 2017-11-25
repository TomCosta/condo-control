import { Directive, Input, OnInit, OnDestroy } from '@angular/core';
import * as spacesActions from './store/spaces.actions';
import { Subscription } from 'rxjs/Subscription';
import { Store } from '@ngrx/store';
import { Actions } from '@ngrx/effects';

import * as fromSpaces from './store/spaces.reducers';
import { FormGroupDirective } from '@angular/forms';
// import * as spaceActions from './store/spaces.actions';

@Directive({
  selector: '[appSpacesForm]'
})
export class SpacesDirective  implements OnInit, OnDestroy {

  constructor(private formGroupDirective: FormGroupDirective,
              private store: Store<fromSpaces.FeatureState>,
              private actions$: Actions) { }

  @Input() ('form') path: string;

  formChange: Subscription;

  ngOnInit() {
    this.store.select(state => state.spaces['updatedItem']).take(1).subscribe(formValue => {
      this.formGroupDirective.form.patchValue(formValue);
  });

  this.formChange = this.formGroupDirective.form.valueChanges
  .subscribe(value => {
    this.store.dispatch({
      type: spacesActions.UPDATE_FORM,
      payload: {
        value,
        path: 'updatedItem',
      }
    });
  });

}

ngOnDestroy() {
  //Called once, before the instance is destroyed.
  //Add 'implements OnDestroy' to the class.

  this.formChange.unsubscribe();
}
}
