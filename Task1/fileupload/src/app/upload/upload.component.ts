import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {
  messages:any;
  constructor() { }
  ngOnInit() {
  }
 
onFileChange(event) {
const size=event.srcElement.files[0].size;
alert(size)
if(size>=25000)
    {  this.messages="Sorry! Upload file is not more than 1MB";
 
    }
else{
 
this.messages="File Succesfully Updated...";
 
}
}
}

 


