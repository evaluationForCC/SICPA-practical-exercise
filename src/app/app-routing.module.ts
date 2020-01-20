import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CpaletteComponent } from './cpalette/cpalette.component'; // Add this

const routes: Routes = [
  { path: '', component: CpaletteComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
