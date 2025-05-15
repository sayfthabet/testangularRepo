import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddVehiculeSayfeddinethabetComponentComponent } from './add-vehicule-sayfeddinethabet-component/add-vehicule-sayfeddinethabet-component.component';
import { VehiculeSayfeddinethabetComponentComponent } from './vehicule-sayfeddinethabet-component/vehicule-sayfeddinethabet-component.component';

const routes: Routes = [
  { path: '', redirectTo: 'vehicules', pathMatch: 'full' },
  { path: 'vehicules', component: VehiculeSayfeddinethabetComponentComponent },
  { path: 'ajouter', component: AddVehiculeSayfeddinethabetComponentComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
