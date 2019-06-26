import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { LoginGuard } from './guards/login.guard';

const routes: Routes = [
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule',canActivate: [AuthGuard]  },
  { path: 'barcode',  loadChildren: './barcode/barcode.module#BarcodePageModule',canActivate: [AuthGuard]  },
  { path: 'about', loadChildren: './about/about.module#AboutPageModule',canActivate: [AuthGuard] },
  { path: 'search', loadChildren: './search/search.module#SearchPageModule', canActivate: [AuthGuard]},
  { path: 'likes', loadChildren: './likes/likes.module#LikesPageModule' ,canActivate: [AuthGuard] },
  { path: 'detail', loadChildren: './detail/detail.module#DetailPageModule',canActivate: [AuthGuard]  },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule', canActivate: [LoginGuard]},
  { path: 'forgot-password', loadChildren: './forgot-password/forgot-password.module#ForgotPasswordPageModule' },
  { path: 'reset-password', loadChildren: './reset-password/reset-password.module#ResetPasswordPageModule' },
  { path: 'new-product', loadChildren: './new-product/new-product.module#NewProductPageModule' },
  { path: 'upload-modal', loadChildren: './upload-modal/upload-modal.module#UploadModalPageModule' },
  { path: '**',              loadChildren: './tabs/tabs.module#TabsPageModule',canActivate: [AuthGuard]  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
