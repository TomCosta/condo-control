import { Injectable } from '@angular/core';

import { AngularFireDatabase } from 'angularfire2/database';
import * as firebase from 'firebase';
import { Upload } from './upload.model';


@Injectable()
export class UploadService {
  constructor(private db: AngularFireDatabase) { }

  pushUpload(upload: Upload, basePath: string) {
    basePath = '/' + basePath + '/';
    const storageRef = firebase.storage().ref();
    const uploadTask = storageRef.child(basePath + (+ new Date).toString(36) + upload.file.name).put(upload.file);
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

  deleteFileStorage(name: string, basePath: string) {
    // basePath = basePath + '/';
    // name = name.substring(name.lastIndexOf('spaces') + 3, name.lastIndexOf('?'));
    // console.log(name);
    let storageRef = firebase.storage().ref();
    storageRef.child(basePath + name).delete();
  }
}
