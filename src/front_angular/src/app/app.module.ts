import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/chat/header/header.component';
import { ErrorComponent } from './error/error/error.component';

import { HttpClientModule } from '@angular/common/http';
import { ChannelComponent } from './core/sidebar/channel/channel.component';
import { FormMessageComponent } from './core/chat/form-message/form-message.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ErrorComponent,
    ChannelComponent,
    FormMessageComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
