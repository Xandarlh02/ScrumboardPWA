import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

//PrimeNG
import {RippleModule} from 'primeng/ripple';
import {ButtonModule} from 'primeng/button';
import {MenubarModule} from 'primeng/menubar';
import {SidebarModule} from 'primeng/sidebar';
import {TooltipModule} from 'primeng/tooltip';
import {TimelineModule} from 'primeng/timeline';
import {CardModule} from 'primeng/card';
import {AvatarModule} from 'primeng/avatar';
import {SkeletonModule} from 'primeng/skeleton';
import {TabViewModule} from 'primeng/tabview';
import {ToastModule} from 'primeng/toast';
import {TableModule} from 'primeng/table';
import {FileUploadModule} from 'primeng/fileupload';
import {ImageModule} from 'primeng/image';
import {DialogModule} from 'primeng/dialog';
import {InputTextModule} from 'primeng/inputtext';

import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { environment } from '../environments/environment';
import { ScrumboardComponent } from './scrumboard/scrumboard.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ScrumboardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,

    //PrimeNG
    InputTextModule,
    DialogModule,
    ImageModule,
    FileUploadModule,
    TableModule,
    TabViewModule,
    AvatarModule,
    CardModule,
    TooltipModule,
    SidebarModule,
    MenubarModule,
    ButtonModule,
    RippleModule,


    HttpClientModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
