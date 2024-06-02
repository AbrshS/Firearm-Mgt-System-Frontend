import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
// import { GeneralComponent } from './general/general.component'; 
import { MatTabsModule } from '@angular/material/tabs';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule, Routes } from '@angular/router';
import { ChangePasswordComponent } from './Auth/Pages/change-password/change-password.component';
import { AccountInfoComponent } from './Auth/Pages/account-info/account-info.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
// import { OfficerModuleComponent } from './Pages/officer/officer-module/officer-module.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { AccessControlListComponent } from './Auth/Pages/access-control-list/access-control-list.component';
// import { SystemUserAccountsComponent } from './system-user-accounts/system-user-accounts.component';
import { DialogComponent } from './Pages/firearm-registry/dialog/dialog.component';

import { MatTableModule } from '@angular/material/table';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
// import { SettingComponent } from './setting/setting.component';
// import { FirearmSettingComponent } from './firearm-setting/firearm-setting.component';
import { AutomatedTasksComponent } from './Pages/automated-tasks/automated-tasks.component';
// import { BackupComponent } from './Pages/backup/backup.component';
import { LoginComponent } from './Auth/Pages/login/login.component';
import { DashboardComponent } from 'src/app/modules/dashboard/dashboard.component';
import { MatDividerModule } from '@angular/material/divider';
import { HighchartsChartModule } from 'highcharts-angular';
import { SharedModule } from './shared/shared.module';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
// import { SidebarComponent } from './sidebar/sidebar.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule} from '@angular/material/list';


import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { MenuCardsComponent } from './Pages/menu-cards/menu-cards.component';
import { IdComponent } from './id/id.component';
import { ToastrService } from 'ngx-toastr';

import { DataTableComponent } from './data-table/data-table.component';
import { DataFilterPipe } from './data-filter.pipe';
import { MatRadioModule } from '@angular/material/radio';
import { NgxPrintModule} from 'ngx-print';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { ReportVisualizationComponent } from './Pages/report-visualization/report-visualization.component';
import { IdModalComponent } from './id-modal/id-modal.component';
import { MapComponent } from './modules/map/map.component';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';

import { ChatComponent } from './modules/chat/chat.component';
import { IdCardComponent } from './id-card/id-card.component';
import { LicenseComponent } from './modules/license/license.component';
import { PagesModule } from './Pages/pages.module';


import { GridModule } from '@angular/flex-layout';
import { MatGridListModule } from '@angular/material/grid-list';
import { SettingsComponent } from './Pages/settings/settings.component'; 
import { NgToastModule } from 'ng-angular-popup'


import { ModalComponent } from './shared/Layouts/header/modal/modal.component';
import { TokenInterceptor } from './Auth/interceptors/token.interceptor';

const appRoutes: Routes = [ 
  {
    path: 'change-password', component: ChangePasswordComponent
  },
  {
    path: 'account-info', component: AccountInfoComponent
  },

  {
    path: 'AccessControlList', component: AccessControlListComponent
  },

  {
    path:'MenuCards', component:MenuCardsComponent
  }, 
  {
    path:'dashboard', component: DashboardComponent
  },
  {
    path:'header', component:DashboardComponent
  } ,
  {
    path:'header', component:DashboardComponent
  } ,
  {
    path:'backup', component: AutomatedTasksComponent
  },

  {
    path: 'ReportVisualization', component: ReportVisualizationComponent
  } ,
  {
    path: 'map', component: MapComponent
  } , 


  {
    path: 'OfficerLicense', component: IdCardComponent
  } , 
  {
    path: 'id', component: IdComponent
  } ,
  {
    path: 'license', component: LicenseComponent
  } , {
    path: 'visualization', component: ReportVisualizationComponent
  }
]

@NgModule({
    declarations: [
        AppComponent,
        ChangePasswordComponent,
        AccountInfoComponent,
        AccessControlListComponent,
        DialogComponent,
        AutomatedTasksComponent,
        LoginComponent,
        DashboardComponent,
        MenuCardsComponent,
        IdComponent,
        DataTableComponent,
        DataFilterPipe,
        ReportVisualizationComponent,
        IdModalComponent,
        MapComponent,
        ChatComponent,
        IdCardComponent,
        LicenseComponent,
        SettingsComponent,
    ],
    exports: [
        DataTableComponent,
    ],
    providers: [
        { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true }
    ],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatCardModule,
        MatMenuModule,
        MatButtonModule,
        MatToolbarModule,
        MatDialogModule,
        CommonModule,
        MatIconModule,
        MatTabsModule,
        FlexLayoutModule,
        RouterModule.forRoot(appRoutes),
        MatInputModule,
        MatFormFieldModule,
        FormsModule,
        MatCheckboxModule,
        MatPaginatorModule,
        ReactiveFormsModule,
        MatNativeDateModule,
        MatDatepickerModule,
        MatTableModule,
        MatOptionModule,
        MatSelectModule,
        MatDividerModule,
        HighchartsChartModule,
        SharedModule,
        MatSlideToggleModule,
        MatSidenavModule,
        MatListModule,
        HttpClientModule,
        MatRadioModule,
        NgxPrintModule,
        LeafletModule,
        GridModule,
        MatGridListModule,
        NgToastModule,

    ]
})

export class AppModule {

} 