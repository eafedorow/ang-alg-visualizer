import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// ANGULAR MATERIAL

// \ANGULAR MATERIAL

// Кастомные компоненты
import { SortingPageComponent } from './pages/sorting-page/sorting-page.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { PathfindingPageComponent } from './pages/pathfinding-page/pathfinding-page.component';
import { HeaderComponent } from './shared/components/header/header.component';
// \Кастомные модули

@NgModule({
  declarations: [
    AppComponent,
    SortingPageComponent,
    MainPageComponent,
    PathfindingPageComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    // Кастомные модули


    // \Кастомные модули


    // ANGULAR MATERIAL


    // \ANGULAR MATERIAL
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
