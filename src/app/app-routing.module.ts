import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomePageModule) },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'select-events',
    loadChildren: () => import('./select-events/select-events.module').then(m => m.SelectEventsPageModule)
  },
  {
    path: 'registration',
    loadChildren: () => import('./registration/registration.module').then( m => m.RegistrationPageModule)
  },
  {
    path: 'header',
    loadChildren: () => import('./header/header.module').then( m => m.HeaderPageModule)
  },
  {
    path: 'footer',
    loadChildren: () => import('./footer/footer.module').then( m => m.FooterPageModule)
  },
  {
    path: 'dashboard1',
    loadChildren: () => import('./dashboard1/dashboard1.module').then( m => m.Dashboard1PageModule)
  },
  {
    path: 'new-participant',
    loadChildren: () => import('./new-participant/new-participant.module').then( m => m.NewParticipantPageModule)
  },
  {
    path: 'setting',
    loadChildren: () => import('./setting/setting.module').then( m => m.SettingPageModule)
  },
 
  {
    path: 'message-setting',
    loadChildren: () => import('./message-setting/message-setting.module').then( m => m.MessageSettingPageModule)
  },
  {
    path: 'badge-setting1',
    loadChildren: () => import('./badge-setting1/badge-setting1.module').then( m => m.BadgeSetting1PageModule)
  },
  {
    path: 'walk-in-registration',
    loadChildren: () => import('./walk-in-registration/walk-in-registration.module').then( m => m.WalkInRegistrationPageModule)
  },
  {
    path: 'walk-registration-setting3',
    loadChildren: () => import('./walk-registration-setting3/walk-registration-setting3.module').then( m => m.WalkRegistrationSetting3PageModule)
  },
  {
    path: 'self-check-setting',
    loadChildren: () => import('./self-check-setting/self-check-setting.module').then( m => m.SelfCheckSettingPageModule)
  },
  {
    path: 'basic-setting',
    loadChildren: () => import('./basic-setting/basic-setting.module').then( m => m.BasicSettingPageModule)
  },
  {
    path: 'design-setting',
    loadChildren: () => import('./design-setting/design-setting.module').then( m => m.DesignSettingPageModule)
  },
  {
    path: 'printer-option',
    loadChildren: () => import('./printer-option/printer-option.module').then( m => m.PrinterOptionPageModule)
  },
  {
    path: 'qr-code',
    loadChildren: () => import('./qr-code/qr-code.module').then( m => m.QRCodePageModule)
  },
  {
    path: 'guest-list',
    loadChildren: () => import('./guest-list/guest-list.module').then( m => m.GuestListPageModule)
  },
  {
    path: 'walk-in-registration1',
    loadChildren: () => import('./walk-in-registration1/walk-in-registration1.module').then( m => m.WalkInRegistration1PageModule)
  },
  {
    path: 'self-check-in',
    loadChildren: () => import('./self-check-in/self-check-in.module').then( m => m.SelfCheckInPageModule)
  },
  {
    path: 'search',
    loadChildren: () => import('./search/search.module').then( m => m.SearchPageModule)
  },
  {
    path: 'message-customisation',
    loadChildren: () => import('./message-customisation/message-customisation.module').then( m => m.MessageCustomisationPageModule)
  },
  {
    path: 'self-check-in-kiosk',
    loadChildren: () => import('./self-check-in-kiosk/self-check-in-kiosk.module').then( m => m.SelfCheckInKioskPageModule)
  },
  {
    path: 'self-check-in-kiosk4',
    loadChildren: () => import('./self-check-in-kiosk4/self-check-in-kiosk4.module').then( m => m.SelfCheckInKiosk4PageModule)
  },
  {
    path: 'self-check-in-kiosk9',
    loadChildren: () => import('./self-check-in-kiosk9/self-check-in-kiosk9.module').then( m => m.SelfCheckInKiosk9PageModule)
  },
  {
    path: 'self-check-in-kiosk10',
    loadChildren: () => import('./self-check-in-kiosk10/self-check-in-kiosk10.module').then( m => m.SelfCheckInKiosk10PageModule)
  },
  {
    path: 'self-check-in-kiosk11',
    loadChildren: () => import('./self-check-in-kiosk11/self-check-in-kiosk11.module').then( m => m.SelfCheckInKiosk11PageModule)
  },
  {
    path: 'self-check-in-kiosk12',
    loadChildren: () => import('./self-check-in-kiosk12/self-check-in-kiosk12.module').then( m => m.SelfCheckInKiosk12PageModule)
  },
  {
    path: 'self-check-in-kiosk13',
    loadChildren: () => import('./self-check-in-kiosk13/self-check-in-kiosk13.module').then( m => m.SelfCheckInKiosk13PageModule)
  },
  {
    path: 'self-check-in-kiosk15',
    loadChildren: () => import('./self-check-in-kiosk15/self-check-in-kiosk15.module').then( m => m.SelfCheckInKiosk15PageModule)
  },
  {
    path: 'settings',
    loadChildren: () => import('./settings/settings.module').then( m => m.SettingsPageModule)
  },
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
