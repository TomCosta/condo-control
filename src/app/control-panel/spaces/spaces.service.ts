import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

import { Space } from '../shared/space.model';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class SpacesService {

  constructor(private db: AngularFireDatabase) {}

  getAllSpaces(): Observable<any[]> {
    return this.db.list<Space>('/spaces').snapshotChanges();
  }

  fromJson(json: any[]): Space[] {
        return json.map(res => {
        const $key = res.payload.key;
        const space: Space = {$key, ...res.payload.val()};
        return space;
      }
    );
  }

  checkItem(item: string) {
    return item == null ? null : item;

  }
}
