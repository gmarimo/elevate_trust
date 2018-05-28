import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { CreateaccountPage} from '../pages/createaccount/createaccount';
import { LoginPage } from '../pages/login/login';
import { ProfilePage} from '../pages/profile/profile';
import { RolePage } from '../pages/role/role';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    CreateaccountPage,
    LoginPage,
    ProfilePage,
    RolePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    CreateaccountPage,
    LoginPage,
    ProfilePage,
    RolePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
