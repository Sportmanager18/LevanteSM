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
  private equipos: Array<any> = [];
  public static cjugador: object;
  public static cequipo: object;
  public jugadores: Array<object> = [];
  public Equipos: FormGroup;
  public fmostrar:number=0;
  public id:number;
  constructor(public navCtrl: NavController,private builder:FormBuilder, public navParams: NavParams) {
    this.Equipos = builder.group({
      Equipo: ['', Validators.required]
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConvocadoPage');
    firebase.database().ref('/Equipos/').on('value', (snapshot) => {
      this.equipos = [];
      console.log(snapshot.val());
      snapshot.forEach((snap) => {
        this.equipos.push(snap.val());
        return false;
      });
      console.log(this.equipos);
    });
  }
  buscarjugadores(form){
    ConvocadoPage.cequipo=form.value.Equipo;
    firebase.database().ref('/' + form.value.Equipo + '/Jugadores/').on('value', (snapshot) => {
      this.jugadores = snapshot.val();
      console.log(this.jugadores);
    });
    document.getElementById("mostrar").style.display="block";
  }
  seleccionar(jugador){
    console.log(jugador);
    ConvocadoPage.cjugador=jugador;
    this.navCtrl.pop();
  }
}
