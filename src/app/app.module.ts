import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Components
import { AppComponent } from './app.component';
import { KeepTicTacToeComponents } from './components/index';


@NgModule({
  declarations: [
    AppComponent,
    KeepTicTacToeComponents
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
