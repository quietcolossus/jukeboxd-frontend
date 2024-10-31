import { Routes } from '@angular/router';
import { AlbumsPageComponent } from './components/albums-page/albums-page.component';
import { ListsPageComponent } from './components/lists-page/lists-page.component';
import { MembersPageComponent } from './components/members-page/members-page.component';
import { JournalPageComponent } from './components/journal-page/journal-page.component';

export const appRoutes: Routes = [
  { path: 'albums', component: AlbumsPageComponent },
  { path: 'lists', component: ListsPageComponent },
  { path: 'members', component: MembersPageComponent },
  { path: 'journal', component: JournalPageComponent },
  { path: '', redirectTo: '/albums', pathMatch: 'full' },
  { path: '**', redirectTo: '/albums' }
];