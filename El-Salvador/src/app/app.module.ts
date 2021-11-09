import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SanSalvadorComponent } from './components/san-salvador/san-salvador.component';
import { HomeComponent } from './components/home/home.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { LaPazComponent } from './components/la-paz/la-paz.component';
import { AhuachapanComponent } from './components/ahuachapan/ahuachapan.component';
import { CaballasComponent } from './components/caballas/caballas.component';
import { ChalatenangoComponent } from './components/chalatenango/chalatenango.component';
import { CuscatlanComponent } from './components/cuscatlan/cuscatlan.component';
import { LaUnionComponent } from './components/la-union/la-union.component';
import { SanMiguelComponent } from './components/san-miguel/san-miguel.component';
import { LaLibertadComponent } from './components/la-libertad/la-libertad.component';
import { SanVicenteComponent } from './components/san-vicente/san-vicente.component';
import { SantaAnaComponent } from './components/santa-ana/santa-ana.component';
import { MorazanComponent } from './components/morazan/morazan.component';
import { UsulutanComponent } from './components/usulutan/usulutan.component';
import { SonsonateComponent } from './components/sonsonate/sonsonate.component';
import { RegistroComponent } from './components/registro/registro.component';


@NgModule({
  declarations: [
    AppComponent,
    SanSalvadorComponent,
    HomeComponent,
    FormularioComponent,
    LaPazComponent,
    AhuachapanComponent,
    CaballasComponent,
    ChalatenangoComponent,
    CuscatlanComponent,
    LaUnionComponent,
    SanMiguelComponent,
    LaLibertadComponent,
    SanVicenteComponent,
    SantaAnaComponent,
    MorazanComponent,
    UsulutanComponent,
    SonsonateComponent,
    RegistroComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
