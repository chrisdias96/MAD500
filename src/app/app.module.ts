import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ContentCardComponent } from './content-card/content-card.component';
import { SafePipe } from './safe.pipe';
import { ContentListComponent } from './content-list/content-list.component';
import {ContentTaggedPipe} from './content-tagged.pipe';
import {FormsModule} from '@angular/forms';
import { TextDecorationDirective } from './text-decoration.directive';
import { CreateContentComponent } from './create-content/create-content.component';

@NgModule({
  declarations: [
    AppComponent,
    ContentCardComponent,
    SafePipe,
    ContentListComponent,
    ContentTaggedPipe,
    TextDecorationDirective,
    CreateContentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
