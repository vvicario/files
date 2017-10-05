import { FileListComponent } from './file-list/file-list.component';
import { HomeComponent } from './home/home.component';


export const AppRoutes = [
    { path: '', pathMatch: 'full', redirectTo: '/home' },
    { path: 'home', component: HomeComponent },
    { path: 'file-list', component: FileListComponent }
];