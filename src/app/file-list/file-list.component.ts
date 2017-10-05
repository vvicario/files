import { Component, OnInit } from '@angular/core';
import { FilesService } from '../services/files.service';

@Component({
  selector: 'app-file-list',
  templateUrl: './file-list.component.html',
  styleUrls: ['./file-list.component.css']
})
export class FileListComponent implements OnInit {

  constructor(private fileService: FilesService) { }

  ngOnInit() {
    this.fileService.getBucketFiles().subscribe(
      data => {
        console.log(data);
    },
      err => console.error(err)
);

  }

}
