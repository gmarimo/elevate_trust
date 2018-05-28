import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoadingController} from 'ionic-angular';
import { AlertController } from 'ionic-angular';

/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public loadingCtrl: LoadingController,private alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }
  createprofile()
{
 this.loader(); 
}  loader() {
    let loading = this.loadingCtrl.create({
      spinner:"bubbles",
      content: 'creating profile...'
    });
  
    loading.present();
  
    setTimeout(() => {
      loading.dismiss();
    }, 5000);
    setTimeout(() => {
      this.create();
    }, 1000);
  }
  create(){
      let alert = this.alertCtrl.create({
        
        //title: 'Profile was successifully created..',
        subTitle: 'Your profile was succesifully created..',
        buttons: ['Ok']
      });
      alert.present();
    
  }

}
