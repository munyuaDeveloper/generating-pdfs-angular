import { Component, OnInit } from '@angular/core';
import { ArrearsInterface, BillInterface, PaymentInterface, RunningStatement, StatementAccount } from '../interfaces/data.interface';
import { PropertyInterface } from '../packed/packed.component';

@Component({
  selector: 'app-outlet',
  templateUrl: './outlet.component.html',
  styleUrls: ['./outlet.component.scss']
})
export class OutletComponent implements OnInit {
  runningStatements: RunningStatement[] = [
    {
      "id": "e5b93db8-115b-4e35-b446-e3493e777991",
      "account_id": "1ea71cb2-f727-4099-877d-5e80361ba320",
      "amount": "-100.00",
      "date_created": "2021-05-10T01:24:50.750464",
      "description": "HOUSE_DEPOSIT bill",
      "entry_type": "INVOICE",
      "authorized_by": "40a48e08-f128-4d42-a906-817dc9a44eef"
    }
  ]
  StatementsOfAccounts: StatementAccount[] = [
    {
      "id": "e5b93db8-115b-4e35-b446-e3493e777991",
      "account_id": "1ea71cb2-f727-4099-877d-5e80361ba320",
      "amount": "-100.00",
      "date_created": "2021-05-10T01:24:50.750464",
      "description": "HOUSE_DEPOSIT bill",
      "entry_type": "INVOICE",
      "authorized_by": "40a48e08-f128-4d42-a906-817dc9a44eef"
    },
  ]

  payments: PaymentInterface[] = [
    {
      "id": "16335934-812a-4868-97af-861540de4fa0",
      "payment_account": {
        "id": "cc24a6a0-3208-4c40-acb6-114f7b978842",
        "account_number": "40402118",
        "account_name": "MPESA PAYBILL",
        "payment_channel": "9dd68339-bd0e-4591-96f9-d08dca73accc"
      },
      "bill_reference_number": "LD9TK30G1SZ",
      "transaction_number": "ZBK798et080",
      "channel_transaction_number": "ZBK79er8080",
      "amount": "20000.00",
      "amount_remaining": "18800.00",
      "customer_name": "Peterson Muriga",
      "customer_account_number": "2980",
      "date_of_transaction": "2022-03-31T10:15:20",
      "date_created": "2021-05-10T01:25:16.643228",
      "transaction_status": "WAITING_SETTLEMENT"
    },
  ]
  properties: PropertyInterface[] = [
    {
      "id": "3483bd4b-0696-4c75-b525-c709cc15d76e",
      "name": "Property 1",
      "property_number": "9090090",
      "property_status": {
        "id": "b8c34393-52b2-4665-b017-a70d7c293ca0",
        "name": "ACTIVE",
        "code": "ACTIVE"
      },
      "property_category": {
        "id": "a155d924-b8d0-4660-bb4b-79cca6fae9ea",
        "name": "APARTMENTS",
        "code": "APARTMENTS"
      }
    }
  ]
  bills: BillInterface[] = [
    {
      "id": "1695091e-dc82-47a4-bf17-5fd65501d93d",
      "reference_number": "LE10XOJUW",
      "amount": "100.00",
      "outstanding_amount": "0.00",
      "status": "COMPLETE",
      "account_type": "TENANT",
      "account_number": "LD9TK30G1SZ",
      "invoice_fee_schedule": {
        "id": "6d4f4940-08f9-476e-ab97-acc93749f850",
        "name": "HOUSE DEPOSIT",
        "transaction_code": "HOUSE_DEPOSIT"
      },
      "date_created": "2021-05-10T01:24:50.733462",
      "date_due": "2021-05-10T01:24:50.733462",
      "invoice_items": [
        {
          "id": "cef54abb-daa8-48cf-9c2b-4007150353e5",
          "invoice_item": "HOUSE DEPOSIT",
          "narration": "HOUSE_DEPOSIT",
          "amount": "100.00",
          "invoice": "1695091e-dc82-47a4-bf17-5fd65501d93d"
        }
      ]
    }
  ];
  arrears: ArrearsInterface[] = [
    {
      "id": "45b17c2a-1988-41e3-95a7-8e56bd28daac",
      "current_balance": "236000.00",
      "previous_balance": "236100.00",
      "last_updated": "2021-05-10T01:24:50.755728",
      "account_id": "1ea71cb2-f727-4099-877d-5e80361ba320",
      "account_details": {
        "id": "1ea71cb2-f727-4099-877d-5e80361ba320",
        "account_number": "LD9TK30G1SZ",
        "old_account_number": "909090",
        "estate_unit": null,
        "account_status": {
          "id": "d4bde099-fb1f-422a-8164-b10dcf38dc68",
          "code": "ACTIVE",
          "name": "ACTIVE"
        },
        "tenant": {
          "id": "d13680c3-fe17-4bdd-8b67-90c5a1bdd853",
          "names": "PETERSON MUCHIRI muriga",
          "identification_number": "202020",
          "identification_type": "ID NUMBER"
        },
        "date_opened": "2021-06-23T02:24:21.715406",
        "date_closed": null
      }
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
