import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChannelComponent } from './core/sidebar/channel/channel.component';
import { FormMessageComponent } from './core/chat/form-message/form-message.component';
import { UserComponent } from './core/sidebar/user/user.component';
import { ChatComponent } from './core/chat/chat.component';
import { ListMessagesComponent } from './core/chat/list-messages/list-messages.component';

const routes: Routes = [
  { path: 'chat/:id', component: ChatComponent },
  { path: 'edit/:id', component: ListMessagesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
