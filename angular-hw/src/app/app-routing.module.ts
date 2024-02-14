import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { CategoriasComponent } from './components/categorias/categorias.component';
import { ClientesComponent } from './components/clientes/clientes.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { LifecycleComponent } from './components/lifecycle/lifecycle.component';
import { PedidosComponent } from './components/pedidos/pedidos.component';
import { ProductosComponent } from './components/productos/productos.component';
import { UsuariosComponent } from './components/usuarios/usuarios.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'app',
    component: MainLayoutComponent,
    children: [
      {
        path: 'categorias',
        component: CategoriasComponent
      },
      {
        path: 'clientes',
        component: ClientesComponent
      },
      {
        path: 'contacto',
        component: ContactoComponent
      },
      {
        path: 'lifecyle',
        component: LifecycleComponent
      },
      {
        path: 'pedidos',
        component: PedidosComponent
      },
      {
        path: 'productos',
        component: ProductosComponent
      },
      {
        path: 'usuarios',
        component: UsuariosComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
