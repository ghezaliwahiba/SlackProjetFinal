import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChannelComponent } from './core/sidebar/channel/channel.component';
import { UserComponent } from './core/sidebar/user/user.component';

const routes: Routes = [
  { path: 'channels', component: ChannelComponent },
  { path: 'users', component: UserComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
