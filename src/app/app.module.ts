import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyAccessFormComponent, SnackBarComponent } from './my-access-form/my-access-form.component';
import { MaterialModules } from './material-modules';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    MyAccessFormComponent,
    SnackBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule.withConfig({ warnOnNgModelWithFormControl: 'never' }),
    MaterialModules,
  ],
  entryComponents: [MyAccessFormComponent, SnackBarComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
