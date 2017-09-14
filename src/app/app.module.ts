import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { RouterModule, Routes } from '@angular/router';
import { SharedService} from './shared.service';

import { AppComponent } from './app.component';
import { EntryComponentComponent } from './entry-component/entry-component.component';
import { DisplayComponentComponent } from './display-component/display-component.component';

const appRoutes: Routes = [
  {path: 'datainput', component: EntryComponentComponent},
  {path: 'dataoutput', component: DisplayComponentComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    EntryComponentComponent,
    DisplayComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
