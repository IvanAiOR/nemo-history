import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuSymbolsComponent } from './components/menu-symbols/menu-symbols.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MenuTableComponent } from './components/menu-table/menu-table.component';
import { TableOfDetailsComponent } from './components/table-of-details/table-of-details.component';
import { HistoricalChartComponent } from './components/chart/chart.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuSymbolsComponent,
    MenuTableComponent,
    TableOfDetailsComponent,
    HistoricalChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
