import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { ConexionService } from '../services/conexion.service';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent  {

  editarItems: any =
  {
   name: ''
  };
 pruebaItems: any;
 lista: any =
 {
    name: ''
 };
 constructor(private conexion: ConexionService)
 {
   this.conexion.listaItems().subscribe(item =>
   {
   this.pruebaItems = item;
   console.log(this.pruebaItems);
   });
  }

  // tslint:disable-next-line:typedef
  agregar()
  {
    this.conexion.agregarItem(this.lista);
    this.lista.name = '';
  }

  // tslint:disable-next-line:typedef
  eliminar(item)
  {
   this.conexion.eliminarItem(item);
  }

  // tslint:disable-next-line:typedef
  editar(item)
  {
   this.editarItems = item;
  }

  // tslint:disable-next-line:typedef
  agregarItemEditado()
  {
    this.conexion.editarItem(this.editarItems);
  }

}
