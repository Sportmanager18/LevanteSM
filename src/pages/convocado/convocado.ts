import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {JugadoresProvider} from '../../providers/jugadores/jugadores';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import firebase from 'firebase';

/**
 * Generated class for the ConvocadoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-convocado',
  templateUrl: 'convocado.html',
})
export class ConvocadoPage {
  private equipos: Array<object> = [];
  public Equipos: FormGroup;
  public id:number;
  constructor(public navCtrl: NavController,private builder:FormBuilder, public navParams: NavParams) {
    this.Equipos = builder.group({
      Equipo: ['', Validators.required]
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConvocadoPage');
    firebase.database().ref('/').on('value', (snapshot) => {
      this.equipos = snapshot.val();
      console.log(snapshot.val());
    });
  }
  seleccionar(jugador){
    
  }
}
