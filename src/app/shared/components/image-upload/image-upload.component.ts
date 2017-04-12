import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-image-upload',
  templateUrl: './image-upload.component.html',
  styleUrls: ['./image-upload.component.scss']
})
export class ImageUploadComponent implements OnInit {

  @Output() image: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

 handleOnChange(event) {
    const files: any = event.dataTransfer ? event.dataTransfer.files : event.target.files;
    const files_list = [];
    const pattern = /image-*/;
    for (let i = 0; i < files.length; i++) {
      files_list.push(files[i]);
    }
    files_list.forEach((file: File) => {
      if (!file.type.match(pattern)) {
        alert('Remove non image format files');
        return;
      }
      const reader = new FileReader();
      reader.onload = this.handleReaderLoaded.bind(this);
      reader.readAsDataURL(file);
    });
  }

  private handleReaderLoaded(e) {
    const reader = e.target;
    const imageUrl = reader.result;
    this.image.emit(imageUrl);
  }


}
