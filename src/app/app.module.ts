import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ContentCardComponent } from './content-card/content-card.component';
import { SafePipe } from './safe.pipe';
import { DirectiveDirective } from './directive.directive';

@NgModule({
  declarations: [
    AppComponent,
    ContentCardComponent,
    SafePipe,
    DirectiveDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent, ContentCardComponent]
})
export class AppModule { }
