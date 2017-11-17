import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

import { Space } from '../../shared/space.model';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class SpacesService {

  constructor(private db: AngularFireDatabase) {}

  getAllSpaces(): Observable<any[]> {
    return this.db.list<Space>('/spaces').snapshotChanges();
  }
}
