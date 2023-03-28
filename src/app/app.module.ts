import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// ANGULAR MATERIAL
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
// \ANGULAR MATERIAL

// Кастомные компоненты
import { SortingPageComponent } from './pages/sorting-page/sorting-page.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { PathfindingPageComponent } from './pages/pathfinding-page/pathfinding-page.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { SortingChartComponent } from './shared/components/sorting-chart/sorting-chart.component';
// \Кастомные модули

@NgModule({
  declarations: [
    AppComponent,
    SortingPageComponent,
    MainPageComponent,
    PathfindingPageComponent,
    HeaderComponent,
    SortingChartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,

    // Кастомные модули


    // \Кастомные модули


    // ANGULAR MATERIAL
    MatToolbarModule,
    MatButtonModule
    // \ANGULAR MATERIAL
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
