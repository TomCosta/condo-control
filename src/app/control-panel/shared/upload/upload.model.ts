export class Upload {
  file: File;
  url: string;
  progress: number;
  error: string = null;
  constructor(file: File) {
    this.file = file;
  }
}
