import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SanSalvadorComponent } from './components/san-salvador/san-salvador.component';
import { HomeComponent } from './components/home/home.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { LaPazComponent } from './components/la-paz/la-paz.component';
import { AhuachapanComponent } from './components/ahuachapan/ahuachapan.component';
import { CaballasComponent } from './components/caballas/caballas.component';
import { ChalatenangoComponent } from './components/chalatenango/chalatenango.component';
import { CuscatlanComponent } from './components/cuscatlan/cuscatlan.component';
import { LaLibertadComponent } from './components/la-libertad/la-libertad.component';
import { LaUnionComponent } from './components/la-union/la-union.component';
import { MorazanComponent } from './components/morazan/morazan.component';
import { SanMiguelComponent } from './components/san-miguel/san-miguel.component';
import { SanVicenteComponent } from './components/san-vicente/san-vicente.component';
import { SantaAnaComponent } from './components/santa-ana/santa-ana.component';
import { UsulutanComponent } from './components/usulutan/usulutan.component';
import { SonsonateComponent } from './components/sonsonate/sonsonate.component';
import { RegistroComponent } from './components/registro/registro.component';


const routes: Routes = [
  { path: 'sansalvador',
  component: SanSalvadorComponent
},{
  path: 'inicio',
  component: HomeComponent
},{
  path: 'form',
  component: FormularioComponent
},{
  path: 'paz',
  component : LaPazComponent
},{
  path: 'ahuachapan',
  component : AhuachapanComponent
},{
  path : 'cabañas',
  component : CaballasComponent
},{
  path : 'chalate',
  component : ChalatenangoComponent
},{
  path : 'cusca',
  component : CuscatlanComponent
},{
  path : 'libertad',
  component : LaLibertadComponent
},{
  path : 'union',
  component : LaUnionComponent
},{
  path : 'morazan',
  component : MorazanComponent
},{
  path : 'miguel',
  component : SanMiguelComponent
},{
  path : 'vicente',
  component : SanVicenteComponent
},{
  path : 'ana',
  component : SantaAnaComponent
},{
  path : 'usulutan',
  component : UsulutanComponent
},{
  path : 'sonsonate',
  component : SonsonateComponent
},{
  path :'registro',
  component : RegistroComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
