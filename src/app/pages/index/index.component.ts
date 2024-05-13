import { Component, OnInit, inject } from '@angular/core';
import { Video, FilesVideo } from 'src/app/interfaces/video';
import { VideosService } from 'src/app/services/videos.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styles: [
  ]
})
export class IndexComponent implements OnInit{
  $tam = '300px !important;';
  style = "width:"+ this.$tam + "height: " + this.$tam;

  private videosSevice = inject(VideosService);

  videos : Video[] = [];

  constructor(){ }

  ngOnInit(){
    this.videosSevice.getIndex().subscribe((data : any)  =>{
      this.videos = data;
    });
  }

  getVideo(video : Video){
    if(!!video.files[0].file_path){
      return 'http://127.0.0.1:8000/' + video.files[0].file_path;
    }
    return 'http://127.0.0.1:8000/storage/prueba.mp4';
  }
}
