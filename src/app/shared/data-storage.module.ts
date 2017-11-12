// import { Injectable } from '@angular/core';
// import { SpacesService } from '../control-panel/spaces/spaces.service';
// import { HttpClient } from '@angular/common/http';
// import { Space } from '../control-panel/shared/space.model';


// @Injectable()
// export class DataStorageService{

//   constructor(private httpClient: HttpClient,
//               private spacesService: SpacesService) {}

//   getSpaces() {
//     this.httpClient.get<Space[]>('https://controlecondo.firebaseio.com/')
//       .map(
//         (spaces) => {
//           return spaces;
//         }
//       )
//       .subscribe(
//         (spaces: Space[]) => {

//         }
//       )
//   }
// }
