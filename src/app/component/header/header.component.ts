import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Abonne } from 'src/app/model/AbonneModel';
import { AbonneService } from 'src/app/service/abonne.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  AbonneData!:any;
  formModal!:any;
  formValue!:FormGroup;
  number!:number;
  showAdd!:boolean;
  showUpdate!:boolean;
  abonneModel: Abonne = new Abonne()

  constructor(private formbuilder: FormBuilder, private api: AbonneService) { }

  ngOnInit(): void {
    this.number=-1;
    this.formModal = new window.bootstrap.Modal(
      document.getElementById('AbonneModal')
    );
    this.formValue = this.formbuilder.group({
      nom : [''],
      prenom : [''],
      age : [''],
      sexe : [''],
      rue : [''],
      profession : [''],
      id_motivation : [''],
      code_postal : [''],
      ville : [''],
      paye : [''],
      telephone : [''],
      email : [''],
    })
    this.getAbonne();

  }
  openModal(){
    this.formModal.show();

  }
  doSomeThing(){
    this.formModal.hide();
  }
  clickAddAbonne(){
    this.formValue.reset();
    this.showAdd = true;
    this.showUpdate= false
  }

  getAbonne(){
    this.api.getAbonne()
    .subscribe(res=>{
      this.AbonneData=res
    })
  }

}
