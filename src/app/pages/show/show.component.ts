import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Video } from 'src/app/interfaces/video';
import { VideosService } from 'src/app/services/videos.service';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styles: [
  ]
})
export class ShowComponent implements OnInit{

  $tam = '300px !important;';
  style = "width:"+ this.$tam + "height: " + this.$tam;

  private videosSevice = inject(VideosService);
  private route = inject(ActivatedRoute);
  private router = inject(Router);

  video !: Video;
  id!: number;

  constructor(){ }

  ngOnInit(){
    this.id = this.route.snapshot.params['id'];

    this.videosSevice.find(this.id).subscribe((data: Video)=>{
      this.video = data;
    });
  }

  getVideo(){
    return 'http://127.0.0.1:8000/' + this.video.files[0].file_path;
  }

}
