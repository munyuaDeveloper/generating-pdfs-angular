import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PdfModuleRoutingModule } from './pdf-module-routing.module';
import { RunningStatementComponent } from './running-statement/running-statement.component';
import { BillingComponent } from './billing/billing.component';
import { PackedComponent } from './packed/packed.component';
import { PaymentsComponent } from './payments/payments.component';
import { ArrearsComponent } from './arrears/arrears.component';
import { OutletComponent } from './outlet/outlet.component';
import { StatementAccountComponent } from './statement-account/statement-account.component';


@NgModule({
  declarations: [
    OutletComponent,
    RunningStatementComponent,
    BillingComponent,
    PackedComponent,
    PaymentsComponent,
    ArrearsComponent,
    StatementAccountComponent,
  ],
  imports: [
    CommonModule,
    PdfModuleRoutingModule
  ]
})
export class PdfModuleModule { }
