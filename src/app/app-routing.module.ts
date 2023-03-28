import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SortingPageComponent } from "./pages/sorting-page/sorting-page.component";
import { MainPageComponent } from "./pages/main-page/main-page.component";
import { PathfindingPageComponent } from "./pages/pathfinding-page/pathfinding-page.component";

const routes: Routes = [
  {
    path: '',
    title: 'Algorithm Visualizer',
    component: MainPageComponent,
  },
  {
    path: 'sorting',
    title: 'Sorting Visualizer',
    component: SortingPageComponent,
  },
  {
    path: 'pathfinding',
    title: 'Pathfinding Visualizer',
    component: PathfindingPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
