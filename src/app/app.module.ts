import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AppRoutingModule } from './app-routing.module';

// for AngularFireDatabase
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireDatabase} from 'angularfire2/database';
// for AngularFireAuth

import { AngularFireAuth } from 'angularfire2/auth';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  MatButtonModule, MatCheckboxModule,
  MatFormFieldModule, MatInputModule,
  MatTableModule, MatToolbarModule, MatIconModule, MatTabsModule, MatExpansionModule, MatGridListModule, MatCardModule, MatRadioModule
  , MatSelectModule, MatDatepickerModule, MatNativeDateModule, MatProgressSpinnerModule, MatSnackBarModule, MatDialogModule, MatMenuModule,
  MatDividerModule, MatSlideToggleModule, MatListModule, MatSidenavModule
} from '@angular/material';
import { environment } from 'src/environments/environment';
import { AngularFireModule } from '@angular/fire';
import { SingupComponent } from './singup/singup.component';
import { FirebaseService } from './services/firebase.service';
import { LayoutModule } from '@angular/cdk/layout';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AuthGuard } from 'firebase-authentication-with-angular-7/src/app/core/auth.guard';
import { AngularFireAuthGuard, AngularFireAuthGuardModule } from '@angular/fire/auth-guard';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    SingupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatButtonModule, MatCheckboxModule, MatFormFieldModule, MatInputModule,
    MatTableModule, MatToolbarModule, MatIconModule, MatTabsModule, MatExpansionModule,
    MatCardModule, MatGridListModule, MatRadioModule, MatSelectModule, MatDatepickerModule,
    MatNativeDateModule, MatProgressSpinnerModule, MatSnackBarModule, MatDialogModule,
    MatMenuModule, MatDividerModule, MatSlideToggleModule, MatListModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFireDatabaseModule,  
    LayoutModule,
    MatSidenavModule,
    MatToolbarModule,
    MatButtonModule,
    FlexLayoutModule,
    
    
 
  ],
  providers: [FirebaseService,AngularFireAuthGuard],
  exports: [ AppComponent, AngularFireAuthGuardModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
