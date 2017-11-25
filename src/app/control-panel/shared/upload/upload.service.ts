import { Injectable } from '@angular/core';

import { AngularFireDatabase } from 'angularfire2/database';
import * as firebase from 'firebase';
import { Upload } from './upload.model';


@Injectable()
export class UploadService {
  constructor(private db: AngularFireDatabase) { }
  private basePath = '/uploads/';

  pushUpload(upload: Upload) {
    const storageRef = firebase.storage().ref();
    const uploadTask = storageRef.child(this.basePath + upload.file.name).put(upload.file);
    uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
      (snapshot) =>  {
        // upload in progress
        upload.progress = Math.round((uploadTask.snapshot.bytesTransferred / uploadTask.snapshot.totalBytes) * 100);
      },
      (error) => {
        // upload failed
        upload.error = error.message;
        upload.progress = 0;
        setTimeout(() => {
          upload.error = null;
        }, 8000);
      },
      () => {
        // upload success
        upload.url = uploadTask.snapshot.downloadURL;
      }
    );
  }
}
