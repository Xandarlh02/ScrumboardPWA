import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { File } from 'src/models/file';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent implements OnInit {

  uploadedFiles: any[] = [];
  filename = ''

  tempObj: File = new File;  
  form:any


  display: boolean = false;
  display2: boolean = false;

  //This gets set when the dialog is opened, 
  //and the row you click on gets sent into the method "showDialog"
  displayedFile:any

  constructor(public sanitizer: DomSanitizer) { }

  ngOnInit(): void { }

  //Handles uploading and clears the form after succesful upload
  uploadFile() {
      this.uploadedFiles.push(this.tempObj);
      console.log(this.tempObj)
      this.display2 = false;
      this.form.clear();
  }

  //This makes a tempObj, which is neccesary in order to map the uploaded file to our file Model, 
  // and to change the filename
  beforeUploadDialog(event: { files: any; }, form:any){
    this.display2 = true;
    this.tempObj = {
      name:event.files[0].name,
      url:event.files[0].objectURL?.changingThisBreaksApplicationSecurity,
      size:event.files[0].size,
      type:event.files[0].type
    }
    this.form = form

  }
  
  showDialog(file:any) {
    console.log(file)
    this.displayedFile = file
    this.display = true;
  }

  //Takes the "blob url" recieved from the upload and makes it displayable 
  getSafeUrl(url:string) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);     
  }

}
