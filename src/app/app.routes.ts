import { Routes } from '@angular/router';
import { AlbumsPageComponent } from './albums/albums.component';
import { ListsPageComponent } from './lists/lists.component';
import { MembersPageComponent } from './members/members.component';
import { JournalPageComponent } from './journal/journal.component';

export const appRoutes: Routes = [
  { path: 'albums', component: AlbumsPageComponent },
  { path: 'lists', component: ListsPageComponent },
  { path: 'members', component: MembersPageComponent },
  { path: 'journal', component: JournalPageComponent },
  { path: '', redirectTo: '/albums', pathMatch: 'full' },
  { path: '**', redirectTo: '/albums' }
];