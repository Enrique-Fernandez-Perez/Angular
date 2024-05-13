import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { VideosService } from '../../services/videos.service';
import { Router } from '@angular/router';
import { AuthStateService } from '../../shared/auth-state.service';

@Component({
  selector: 'app-edit',
  templateUrl: './add.component.html',
  styles: [ ]
})
export class AddComponent {

  form!: FormGroup;

  imageSrc : string ='';
  selectedImage!: any;
  categorias : any = [];

  log ?: any;

  /*------------------------------------------
  --------------------------------------------
  Created constructor
  --------------------------------------------
  --------------------------------------------*/
  constructor(
    public videoService: VideosService,
    private router: Router,
    private authStatus : AuthStateService
  ) { }

  /**
   * Write code on Method
   *
   * @return response()
   */
  ngOnInit(): void {
    this.form = new FormGroup({
      titulo: new FormControl('', [Validators.required]),
      descripcion: new FormControl('', Validators.required),
      file: new FormControl('', Validators.required),
    });

    this.getLog();
    if(!this.log){
      this.router.navigateByUrl('login');
    }
  }

  getLog() {
    this.authStatus.userAuthState.subscribe(data => this.log = data);
  }

  /**
   * Write code on Method
   *
   * @return response()
   */
  get f(){
    return this.form.controls;
  }

  /**
   * Write code on Method
   *
   * @return response()
   */
  submit(form : FormGroup){
    // console.log(this.form.value);

    const formData = new FormData();

    formData.append('titulo',form.value.titulo);
    formData.append('descripcion',form.value.descripcion);
    formData.append('destinatario',form.value.destinatario);
    formData.append('categoria_id',form.value.categoria_id);
    formData.append('file', this.selectedImage);

    // console.log(formData);

    this.videoService.create(formData).subscribe((res:any) => {
      this.router.navigateByUrl('');
    });
  }

  onSelectFile(event : any){
    if(event.target.files.length > 0){
      const file = event.target.files[0];
      this.selectedImage = file;
    }
  }

}
