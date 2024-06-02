import { NgModule, importProvidersFrom } from '@angular/core';
import { CommonModule } from '@angular/common';  

//Components
import { FirearmRegistryComponent } from './firearm-registry/firearm-registry.component'; 
import { OfficerComponent } from './officer/officer.component'; 
import { PoagComponent } from './poag/poag.component';  
import { CivillianComponent } from './civillian/civillian.component'; 
import { IofcComponent } from './iofc/iofc.component';  
import { DestroyedTableComponent } from './destroyed-table/destroyed-table.component'; 
import { HmtsComponent } from './hmts/hmts.component';
import { SystemUserAccountsComponent,EditUserDialog  } from './system-user-accounts/system-user-accounts.component';
import { LossTableComponent } from './loss-table/loss-table.component';

//Modal - Components 
import { DistructionComponent } from './destroyed-table/distruction/distruction.component';
import { OfficerModuleComponent  } from './officer/officer-module/officer-module.component'; 
import { PoagModalComponent } from './poag/poag-modal/poag-modal.component';  
import { ReturnModalComponent } from './return-modal/return-modal.component'; 
import { RecoveryComponent } from './recovery/recovery.component'; 
import { CivilComponent } from './civillian/civil/civil.component'; 
import { IofcModalComponent } from './iofc/iofc-modal/iofc-modal.component'; 
import { HmtsModalComponent } from './hmts/hmts-modal/hmts-modal.component';
import { UserModalComponent } from './system-user-accounts/user-modal/user-modal.component'; 
import { LossComponent } from './loss-table/loss/loss.component'; 

//Modules    
import { SharedModule } from '../shared/shared.module';
import { MatIconModule } from '@angular/material/icon'; 
import { MatCardModule } from '@angular/material/card'; 
import { MatTableModule } from '@angular/material/table'; 
import { FormsModule } from '@angular/forms';
import { MatOptionModule } from '@angular/material/core'; 
import { MatToolbarModule } from '@angular/material/toolbar';  
import { ReactiveFormsModule } from '@angular/forms'; 
import { MatSidenavModule } from '@angular/material/sidenav';
import { FirearmWithdrawComponent } from './Pending-operations/firearm-withdraw/firearm-withdraw.component';
import {MatExpansionModule} from '@angular/material/expansion'; 
import { MatButtonModule } from '@angular/material/button'; 
import {MatTabsModule} from '@angular/material/tabs';
// import { SettingsComponent } from './settings/settings.component';  
// import { ModalComponent } from '../shared/Layouts/header/modal/modal.component'; 
import { MatSelectModule } from '@angular/material/select';
import { LostDestroyedComponent } from './lost-destroyed/lost-destroyed.component';
import { FirearmHolderCatagoriesComponent } from './firearm-holder-catagories/firearm-holder-catagories.component';
import { OfficerPendingComponent } from './Pending-operations/Pendings/officer-pending/officer-pending.component';
import { CivillianPendingComponent } from './Pending-operations/Pendings/civillian-pending/civillian-pending.component';
import { PoagPendingComponent } from './Pending-operations/Pendings/poag-pending/poag-pending.component';
import { IofcPendingComponent } from './Pending-operations/Pendings/iofc-pending/iofc-pending.component';
import { HmtsPendingComponent } from './Pending-operations/Pendings/hmts-pending/hmts-pending.component';
import { LossPendingComponent } from './Pending-operations/Pendings/loss-pending/loss-pending.component';
import { DistructionPendingComponent } from './Pending-operations/Pendings/distruction-pending/distruction-pending.component';
import { RecoverPendingComponent } from './Pending-operations/Pendings/recover-pending/recover-pending.component';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
// import { UserTestComponent } from './system-user-accounts/user-test/user-test.component';
import { MatDialogContent } from '@angular/material/dialog';
import { MatDialogModule } from '@angular/material/dialog'; 

@NgModule({
  declarations: [
    FirearmRegistryComponent,
    OfficerComponent,
    PoagComponent,
    OfficerModuleComponent,
    PoagModalComponent,
    ReturnModalComponent,
    RecoveryComponent,
    CivilComponent,
    CivillianComponent,
    IofcComponent,
    IofcModalComponent,
    DestroyedTableComponent,
    DistructionComponent,
    HmtsComponent,
    HmtsModalComponent,
    SystemUserAccountsComponent,
    UserModalComponent ,
    LossComponent,
    LossTableComponent,
    FirearmWithdrawComponent,
    LostDestroyedComponent,
    FirearmHolderCatagoriesComponent,
    OfficerPendingComponent,
    CivillianPendingComponent,
    PoagPendingComponent,
    IofcPendingComponent,
    HmtsPendingComponent,
    LossPendingComponent,
    DistructionPendingComponent,
    RecoverPendingComponent,
    EditUserDialog               
  ],

  imports: [
    CommonModule,
    MatIconModule,
    MatCardModule,
    MatTableModule,
    SharedModule, 
    FormsModule,
    MatOptionModule,
    MatToolbarModule,
    ReactiveFormsModule,
    MatSidenavModule,
    MatExpansionModule,
    MatButtonModule, 
    MatTabsModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatDialogModule
  ], 

  exports: [
    OfficerModuleComponent,
    PoagModalComponent,
    ReturnModalComponent,
    RecoveryComponent,
    LostDestroyedComponent,
    UserModalComponent,
    ReturnModalComponent
  ]
}) 

export class PagesModule { }