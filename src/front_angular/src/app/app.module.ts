import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/chat/header/header.component';
import { ErrorComponent } from './error/error/error.component';
import { HttpClientModule } from '@angular/common/http';
import { ChannelComponent } from './core/sidebar/channel/channel.component';
import { ListMessagesComponent } from './core/chat/list-messages/list-messages.component';
import { UserComponent } from './core/sidebar/user/user.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormMessageComponent } from './core/chat/form-message/form-message.component';
import { ChatComponent } from './core/chat/chat.component';
import { LayoutChatComponent } from './core/chat/layout-chat/layout-chat.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LayoutSidebarComponent } from './core/sidebar/layout-sidebar/layout-sidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ErrorComponent,
    ChannelComponent,
    ListMessagesComponent,
    UserComponent,
    FormMessageComponent,
    ChatComponent,
    LayoutChatComponent,
    LayoutSidebarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgbModule,
    CommonModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
