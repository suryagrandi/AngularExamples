import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private fb: FormBuilder) {}
  submitted = false;
  form = this.fb.group({

    img: ['', Validators.required]
  });
  get f() { return this.form.controls; }
  public imagePath;
  imgURL: any;
  public message: string;

  preview(files) {
    if (files.length === 0)
      return;

    var mimeType = files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      this.message = "Only images are supported.";
      return;
    }

    var reader = new FileReader();
    this.imagePath = files;
    reader.readAsDataURL(files[0]);
    reader.onload = (_event) => {
      this.imgURL = reader.result;
    }
  }

  onSubmit() {
    this.submitted = true;

    if (this.form.invalid) {
        return;
    }
    alert("Image Uploaded Successfully");
    this.form.reset();
    this.imgURL = false;
  }
}

