import { Routes } from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {PostDetailComponent} from "./components/post-detail/post-detail.component";

export const routeConfig: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Home page'
  },
  {
    path: 'details/:id',
    component: PostDetailComponent,
    title: 'Home details'
  }
];

export default routeConfig;
