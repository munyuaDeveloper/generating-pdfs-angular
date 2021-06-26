import { CurrencyPipe, DatePipe, TitleCasePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import * as pdfMake from "pdfmake/build/pdfmake";
import * as pdfFonts from 'pdfmake/build/vfs_fonts';
import { ReplaceUnderscorePipe } from 'src/app/replace-underscore.pipe';
(<any>pdfMake).vfs = pdfFonts.pdfMake.vfs;

export interface Invoice_fee_schedule {
	id: string;
	name: string;
	transaction_code: string;
}

export interface Invoice_item {
	id: string;
	invoice_item: string;
	narration: string;
	amount: string;
	invoice: string;
}

export interface BillInterface {
	id: string;
	reference_number: string;
	amount: string;
	outstanding_amount: string;
	status: string;
	account_type: string;
	account_number: string;
	invoice_fee_schedule: Invoice_fee_schedule;
	date_created: string;
	date_due: string;
	invoice_items: Invoice_item[];
}
// FOR ANGULAR 8
// import pdfMake from "pdfmake/build/pdfmake";
// import pdfFonts from "pdfmake/build/vfs_fonts";
// import { ReplaceUnderscorePipe } from '../../replace-underscore.pipe';
// pdfMake.vfs = pdfFonts.pdfMake.vfs;
@Component({
  selector: 'app-billing',
  templateUrl: './billing.component.html',
  styleUrls: ['./billing.component.scss']
})
export class BillingComponent implements OnInit {

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
    },
    {
      "id": "054e40cb-4a07-4287-a410-7d4a9629f69b",
      "reference_number": "LE14W5KET",
      "amount": "1000.00",
      "outstanding_amount": "0.00",
      "status": "COMPLETE",
      "account_type": "TENANT",
      "account_number": "LD9TK30G1SZ",
      "invoice_fee_schedule": {
        "id": "f8343f00-667f-466b-8ebb-580d9e41341a",
        "name": "WATER METER READING",
        "transaction_code": "WATER_METER_READING"
      },
      "date_created": "2021-05-10T01:24:50.553663",
      "date_due": "2021-05-10T01:24:50.553663",
      "invoice_items": [
        {
          "id": "069f745e-f374-4ef2-ab1d-b0226b69c6be",
          "invoice_item": "WATER METER READING",
          "narration": "WATER_METER_READING",
          "amount": "1000.00",
          "invoice": "054e40cb-4a07-4287-a410-7d4a9629f69b"
        }
      ]
    },
    {
      "id": "afd369a5-f267-4853-b03d-4b39c7eb21df",
      "reference_number": "LE1OA1Z4A",
      "amount": "100.00",
      "outstanding_amount": "0.00",
      "status": "COMPLETE",
      "account_type": "TENANT",
      "account_number": "LD9TK30G1SZ",
      "invoice_fee_schedule": {
        "id": "cc88e20d-d9e3-46aa-aa13-1c2e37fdf0c5",
        "name": "MONTHLY RENT",
        "transaction_code": "MONTHLY_RENT"
      },
      "date_created": "2021-05-10T01:24:50.475878",
      "date_due": "2021-05-10T01:24:50.475878",
      "invoice_items": [
        {
          "id": "6af6d009-afa3-4e14-932f-09e33e29f286",
          "invoice_item": "MONTHLY RENT",
          "narration": "MONTHLY_RENT",
          "amount": "100.00",
          "invoice": "afd369a5-f267-4853-b03d-4b39c7eb21df"
        }
      ]
    },
    {
      "id": "ff14c04c-06b5-49ec-801c-7a737fe17700",
      "reference_number": "LE1WFYMT1",
      "amount": "200.00",
      "outstanding_amount": "0.00",
      "status": "COMPLETE",
      "account_type": "TENANT",
      "account_number": "LD9TK30G1SZ",
      "invoice_fee_schedule": {
        "id": "cc88e20d-d9e3-46aa-aa13-1c2e37fdf0c5",
        "name": "MONTHLY RENT",
        "transaction_code": "MONTHLY_RENT"
      },
      "date_created": "2021-05-10T01:24:22.337198",
      "date_due": "2021-05-10T01:24:22.337198",
      "invoice_items": [
        {
          "id": "00fd176a-fdf0-4bdb-9590-7a3d86c43614",
          "invoice_item": "MONTHLY RENT",
          "narration": "MONTHLY_RENT",
          "amount": "200.00",
          "invoice": "ff14c04c-06b5-49ec-801c-7a737fe17700"
        }
      ]
    },
    {
      "id": "1e361cdc-c313-4a2b-aed0-880e7c66a08c",
      "reference_number": "LE1KJ00ZG",
      "amount": "200.00",
      "outstanding_amount": "0.00",
      "status": "COMPLETE",
      "account_type": "TENANT",
      "account_number": "LD9TK30G1SZ",
      "invoice_fee_schedule": {
        "id": "cc88e20d-d9e3-46aa-aa13-1c2e37fdf0c5",
        "name": "MONTHLY RENT",
        "transaction_code": "MONTHLY_RENT"
      },
      "date_created": "2021-05-10T01:23:20.575402",
      "date_due": "2021-05-10T01:23:20.575402",
      "invoice_items": [
        {
          "id": "5522b8df-0c9d-4bf6-b700-1707c5226ee5",
          "invoice_item": "MONTHLY RENT",
          "narration": "MONTHLY_RENT",
          "amount": "200.00",
          "invoice": "1e361cdc-c313-4a2b-aed0-880e7c66a08c"
        }
      ]
    },
    {
      "id": "5e190752-d40d-4140-b9b1-67635d6cc3fd",
      "reference_number": "LE1BI990S",
      "amount": "2000.00",
      "outstanding_amount": "0.00",
      "status": "COMPLETE",
      "account_type": "TENANT",
      "account_number": "LD9TK30G1SZ",
      "invoice_fee_schedule": {
        "id": "a282244e-c424-4342-9087-c8b995e79003",
        "name": "GARBAGE FEE",
        "transaction_code": "GARBAGE_FEE"
      },
      "date_created": "2021-05-10T01:23:10.061578",
      "date_due": "2021-05-10T01:23:10.061578",
      "invoice_items": [
        {
          "id": "cb4b3e0f-61f0-44ab-b33a-120902f7653e",
          "invoice_item": "GARBAGE FEE",
          "narration": "GARBAGE_FEE",
          "amount": "2000.00",
          "invoice": "5e190752-d40d-4140-b9b1-67635d6cc3fd"
        }
      ]
    },
    {
      "id": "07127e8b-1f07-48b3-9057-3572976808a3",
      "reference_number": "LE1L5PSJY",
      "amount": "100.00",
      "outstanding_amount": "0.00",
      "status": "COMPLETE",
      "account_type": "TENANT",
      "account_number": "LD9TK30G1SZ",
      "invoice_fee_schedule": {
        "id": "a282244e-c424-4342-9087-c8b995e79003",
        "name": "GARBAGE FEE",
        "transaction_code": "GARBAGE_FEE"
      },
      "date_created": "2021-05-10T01:23:00.252968",
      "date_due": "2021-05-10T01:23:00.252968",
      "invoice_items": [
        {
          "id": "c6979c2c-13a4-4efb-a228-437b1a5837e9",
          "invoice_item": "GARBAGE FEE",
          "narration": "GARBAGE_FEE",
          "amount": "100.00",
          "invoice": "07127e8b-1f07-48b3-9057-3572976808a3"
        }
      ]
    },
    {
      "id": "dcc76737-5369-4e6a-9bde-82743cd09ece",
      "reference_number": "LE1G1BX5Q",
      "amount": "200.00",
      "outstanding_amount": "0.00",
      "status": "COMPLETE",
      "account_type": "TENANT",
      "account_number": "LD9TK30G1SZ",
      "invoice_fee_schedule": {
        "id": "6d4f4940-08f9-476e-ab97-acc93749f850",
        "name": "HOUSE DEPOSIT",
        "transaction_code": "HOUSE_DEPOSIT"
      },
      "date_created": "2021-05-10T00:47:45.537140",
      "date_due": "2021-05-10T00:47:45.537140",
      "invoice_items": [
        {
          "id": "a54559d0-b3d0-49d2-a76f-df85630344e9",
          "invoice_item": "HOUSE DEPOSIT",
          "narration": "HOUSE_DEPOSIT",
          "amount": "200.00",
          "invoice": "dcc76737-5369-4e6a-9bde-82743cd09ece"
        }
      ]
    },
    {
      "id": "f01e6022-30fe-40d4-a294-a4164781658b",
      "reference_number": "LE1VQT89O",
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
      "date_created": "2021-05-10T00:47:11.148747",
      "date_due": "2021-05-10T00:47:11.148747",
      "invoice_items": [
        {
          "id": "099250f8-c6c7-4afb-8d62-2896019a4745",
          "invoice_item": "HOUSE DEPOSIT",
          "narration": "HOUSE_DEPOSIT",
          "amount": "100.00",
          "invoice": "f01e6022-30fe-40d4-a294-a4164781658b"
        }
      ]
    },
    {
      "id": "3d6737ae-b332-4b48-8402-2a5c30624315",
      "reference_number": "LE1OB1P56",
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
      "date_created": "2021-05-10T00:45:49.675732",
      "date_due": "2021-05-10T00:45:49.675732",
      "invoice_items": [
        {
          "id": "4a6bfa9c-f6fd-413d-9a04-77fbe81e4c84",
          "invoice_item": "HOUSE DEPOSIT",
          "narration": "HOUSE_DEPOSIT",
          "amount": "100.00",
          "invoice": "3d6737ae-b332-4b48-8402-2a5c30624315"
        }
      ]
    },
    {
      "id": "91ccd3eb-a7ee-4e5c-92e4-036cccadfaa0",
      "reference_number": "LE155FLPG",
      "amount": "300.00",
      "outstanding_amount": "0.00",
      "status": "COMPLETE",
      "account_type": "TENANT",
      "account_number": "LD9TK30G1SZ",
      "invoice_fee_schedule": {
        "id": "6d4f4940-08f9-476e-ab97-acc93749f850",
        "name": "HOUSE DEPOSIT",
        "transaction_code": "HOUSE_DEPOSIT"
      },
      "date_created": "2021-05-10T00:42:31.770897",
      "date_due": "2021-05-10T00:42:31.770897",
      "invoice_items": [
        {
          "id": "6b5617de-8d2c-4c06-affe-403ed79b0f94",
          "invoice_item": "HOUSE DEPOSIT",
          "narration": "HOUSE_DEPOSIT",
          "amount": "300.00",
          "invoice": "91ccd3eb-a7ee-4e5c-92e4-036cccadfaa0"
        }
      ]
    },
    {
      "id": "4aed9fed-8b03-4206-bfe9-0ec84cade2d5",
      "reference_number": "LE1H5JUH1",
      "amount": "200.00",
      "outstanding_amount": "0.00",
      "status": "COMPLETE",
      "account_type": "TENANT",
      "account_number": "LD9TK30G1SZ",
      "invoice_fee_schedule": {
        "id": "6d4f4940-08f9-476e-ab97-acc93749f850",
        "name": "HOUSE DEPOSIT",
        "transaction_code": "HOUSE_DEPOSIT"
      },
      "date_created": "2021-05-10T00:42:01.027519",
      "date_due": "2021-05-10T00:42:01.027519",
      "invoice_items": [
        {
          "id": "4ce5d9eb-e1ac-4a6f-8d06-db78e83dfbcc",
          "invoice_item": "HOUSE DEPOSIT",
          "narration": "HOUSE_DEPOSIT",
          "amount": "200.00",
          "invoice": "4aed9fed-8b03-4206-bfe9-0ec84cade2d5"
        }
      ]
    },
    {
      "id": "15c83578-f00d-4fae-918b-50a26d39952f",
      "reference_number": "LE1G7O6LR",
      "amount": "100.00",
      "outstanding_amount": "0.00",
      "status": "COMPLETE",
      "account_type": "TENANT",
      "account_number": "LD9TK30G1SZ",
      "invoice_fee_schedule": {
        "id": "a282244e-c424-4342-9087-c8b995e79003",
        "name": "GARBAGE FEE",
        "transaction_code": "GARBAGE_FEE"
      },
      "date_created": "2021-05-10T00:40:36.728186",
      "date_due": "2021-05-10T00:40:36.728186",
      "invoice_items": [
        {
          "id": "7f4b9448-ddf7-4514-8bcf-313a0f5499c2",
          "invoice_item": "GARBAGE FEE",
          "narration": "GARBAGE_FEE",
          "amount": "100.00",
          "invoice": "15c83578-f00d-4fae-918b-50a26d39952f"
        }
      ]
    }
  ];

  constructor(private dateFormatter: DatePipe,
    private replaceUderscore: ReplaceUnderscorePipe,
    private titleCase: TitleCasePipe,
    private currencyPipe: CurrencyPipe) { }

  ngOnInit(): void {
  }

  generatePDF() {
    let docDefinition = {
      pageOrientation: 'landscape',
      content: [

        {
          text: 'Billing Information \n\n',
          bold: true,
          fontSize: 14,
        },
        {
          table: {
            widths: ['auto', 'auto', 'auto', '12%', 'auto', 'auto', 'auto', '*'],
            body: this.returnBillingInformation(this.bills)
          },
          layout: {
            fillColor: function (rowIndex: number, node: any, columnIndex: any) {
              return (rowIndex % 2 !== 0) ? '#F0F0F0' : null;
            }
          }
        },
      ],
      styles: {
        header: {
          fontSize: 11,
          bold: true,
        },
        body: {
          fontSize: 10,
        },
      }
    };

    pdfMake.createPdf(docDefinition).open();
  }


  returnBillingInformation(bills: BillInterface[]) {
    let bills_list: any = [
      [
        {
          text: '#',
          style: 'header',
          margin: [0, 7]
        },
        {
          text: 'REFERENCE NUMBER',
          style: 'header',
          margin: [0, 7]
        },
        {
          text: 'TOTAL AMOUNT',
          style: 'header',
          margin: [0, 7]
        },
        {
          text: 'OUTSTANDING AMOUNT',
          style: 'header',
          margin: [0, 7]
        },
        {
          text: 'STATUS',
          style: 'header',
          margin: [0, 7]
        },
        {
          text: 'BILLING ITEM',
          style: 'header',
          margin: [0, 7]
        },
        {
          text: 'ACCOUNT NUMBER',
          style: 'header',
          margin: [0, 7]
        },
        {
          text: 'DATE GENERATED',
          style: 'header',
          margin: [0, 7]
        },
      ]
    ]
    let payment_record = []

    if (bills.length > 0) {
      for (let i = 0; i < bills.length; i++) {
        const details = bills[i];
        let content: any = [];
        let color = null;
        if (details['status'] === 'COMPLETE') {
          color = '#198754'
        } else {
          color = '#ff8000'
        }
        content.splice(0, 0, i + 1);
        content.splice(1, 0, { text: details['reference_number'], style: 'body', bold: true });
        content.splice(2, 0, { text: this.currencyPipe.transform(details['amount'], ' '), style: 'body',});
        content.splice(3, 0, { text: this.currencyPipe.transform(details['outstanding_amount'], ' '), style: 'body' });
        content.splice(4, 0, { text: details['status'], style: 'body', color: color});
        content.splice(5, 0, { text: details['invoice_fee_schedule']['name'], style: 'body' });
        content.splice(6, 0, { text: details['account_number'], style: 'body' });
        content.splice(7, 0, { text: this.dateFormatter.transform(details['date_created'], 'medium'), style: 'body' });
        bills_list.push(content);
      }

    } else {
      payment_record = [
        {
          colSpan: 8,
          text: '',
          style: 'body'
        },
        {
          text: '',
          style: 'body'
        },
        {
          text: '',
          style: 'body'
        },
        {
          text: '',
          style: 'body'
        },
        {
          text: '',
          style: 'body'
        },
        {
          text: '',
          style: 'body'
        },
        {
          text: '',
          style: 'body'
        },
        {
          text: '',
          style: 'body'
        },
      ]

      bills_list.push(payment_record)
    }

    return bills_list;
  }
}
