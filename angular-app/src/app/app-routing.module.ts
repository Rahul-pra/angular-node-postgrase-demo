import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { FileComponent } from './file/file.component';

const routes: Routes = [
  { path: '', redirectTo: '/product', pathMatch: 'full' }, // redirect to `first-component`
  { path: 'product', component: ProductComponent },
  { path: 'file', component: FileComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
