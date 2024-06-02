import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BarComponent } from './widgets/bar/bar.component';
import { HighchartsChartModule } from 'highcharts-angular';
import { CardComponent } from './widgets/card/card.component';
import { PieComponent } from './widgets/pie/pie.component';
import { PieAComponent } from './widgets/pie-a/pie-a.component';
import { PieBComponent } from './widgets/pie-b/pie-b.component';
import { TableAComponent } from './widgets/table-a/table-a.component';
import { MatTableModule } from '@angular/material/table';
import { DonutComponent } from './widgets/donut/donut.component';
import { HeaderComponent } from './Layouts/header/header.component'; 
import { FooterComponent } from './Layouts/footer/footer.component'; 
import { ModalComponent } from './Layouts/header/modal/modal.component';
//modules 
import { MatCardModule } from '@angular/material/card'; 
import { MatToolbarModule } from '@angular/material/toolbar';  
import { MatButtonModule } from '@angular/material/button';
// import { MatIconModule } from '@angular/material/icon'; 
import { MatMenuModule } from '@angular/material/menu'; 
// import { MatSidenavModule } from '@angular/material/sidenav'; 
// import { MatToolbarModule } from '@angular/material/toolbar'; // Import MatToolbarModule for toolbar
import { MatSidenavModule } from '@angular/material/sidenav'; // Import MatSidenavModule for sidenav
import { MatListModule } from '@angular/material/list'; // Import MatListModule for list
import { MatExpansionModule } from '@angular/material/expansion'; // Import MatExpansionModule for expansion panel
import { MatIconModule } from '@angular/material/icon';
import { BannerComponent } from './Layouts/banner/banner.component';
import { BarWeeklyComponent } from './widgets/bar-weekly/bar-weekly.component';
import { BarMonthlyComponent } from './widgets/bar-monthly/bar-monthly.component';
import { BarYearlyComponent } from './widgets/bar-yearly/bar-yearly.component';
import { ProfileSidenavComponent } from './Layouts/header/profile-sidenav/profile-sidenav.component'; // Import MatIconModule for icons 
import { MatDialogModule } from '@angular/material/dialog'; 
import {MatTooltipModule} from '@angular/material/tooltip'; 
import {MatBadgeModule} from '@angular/material/badge';  
import { RouterModule } from '@angular/router';
import { WarningCardComponent } from './widgets/warning-card/warning-card.component';
import { NotificationComponent } from './widgets/notification/notification.component';

@NgModule({
  declarations: [
    BarComponent,
    CardComponent,
    PieComponent,
    PieAComponent,
    PieBComponent,
    TableAComponent,
    
    DonutComponent,
    HeaderComponent,
    FooterComponent,
    ModalComponent,
    BannerComponent,
    BarWeeklyComponent,
    BarMonthlyComponent,
    BarYearlyComponent,
    ProfileSidenavComponent,
    WarningCardComponent,
    NotificationComponent,

  ], 
  imports: [
    CommonModule,
    HighchartsChartModule,
    MatTableModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule, 
    MatMenuModule,
    MatSidenavModule,
    MatListModule,
    MatExpansionModule, 
    MatButtonModule,
    MatDialogModule,
    MatTooltipModule,
    MatBadgeModule,
    RouterModule,
  ], 
  exports: [
    CardComponent,
    PieComponent,
    PieAComponent,
    PieBComponent,
    TableAComponent,
    DonutComponent,
    BarComponent,
    HeaderComponent, 
    FooterComponent, 
    BannerComponent, 
    BarMonthlyComponent, 
    BarWeeklyComponent, 
    BarYearlyComponent ,
    ProfileSidenavComponent, 
    ModalComponent, 
    WarningCardComponent, 
    NotificationComponent

  ]
})
export class SharedModule { } 