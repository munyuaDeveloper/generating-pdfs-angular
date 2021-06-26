import { CurrencyPipe, DatePipe, TitleCasePipe } from '@angular/common';
import { ReplaceUnderscorePipe } from 'src/app/replace-underscore.pipe';
import { Component, OnInit } from '@angular/core';
import * as pdfMake from "pdfmake/build/pdfmake";
import * as pdfFonts from 'pdfmake/build/vfs_fonts';
(<any>pdfMake).vfs = pdfFonts.pdfMake.vfs;

export interface RunningStatement {
	id: string;
	account_id: string;
	amount: string;
	date_created: string;
	description: string;
	entry_type: string;
	authorized_by: string;
}
// FOR ANGULAR 8
// import pdfMake from "pdfmake/build/pdfmake";
// import pdfFonts from "pdfmake/build/vfs_fonts";
// import { ReplaceUnderscorePipe } from '../../replace-underscore.pipe';
// pdfMake.vfs = pdfFonts.pdfMake.vfs;
@Component({
  selector: 'app-running-statement',
  templateUrl: './running-statement.component.html',
  styleUrls: ['./running-statement.component.scss']
})
export class RunningStatementComponent implements OnInit {

  runningStatements: RunningStatement[] = [
    {
        "id": "e5b93db8-115b-4e35-b446-e3493e777991",
        "account_id": "1ea71cb2-f727-4099-877d-5e80361ba320",
        "amount": "-100.00",
        "date_created": "2021-05-10T01:24:50.750464",
        "description": "HOUSE_DEPOSIT bill",
        "entry_type": "INVOICE",
        "authorized_by": "40a48e08-f128-4d42-a906-817dc9a44eef"
    },
    {
        "id": "3f22c189-d94e-4a6e-bb33-c987485efaef",
        "account_id": "1ea71cb2-f727-4099-877d-5e80361ba320",
        "amount": "-1000.00",
        "date_created": "2021-05-10T01:24:50.567900",
        "description": "WATER_METER_READING bill",
        "entry_type": "INVOICE",
        "authorized_by": "40a48e08-f128-4d42-a906-817dc9a44eef"
    },
    {
        "id": "24fa6829-ae00-420c-9eea-649ceb915ac5",
        "account_id": "1ea71cb2-f727-4099-877d-5e80361ba320",
        "amount": "-100.00",
        "date_created": "2021-05-10T01:24:50.488713",
        "description": "MONTHLY_RENT bill",
        "entry_type": "INVOICE",
        "authorized_by": "40a48e08-f128-4d42-a906-817dc9a44eef"
    },
    {
        "id": "4be3c5be-b772-4bdc-9944-19beaf50ea6a",
        "account_id": "1ea71cb2-f727-4099-877d-5e80361ba320",
        "amount": "-200.00",
        "date_created": "2021-05-10T01:24:22.355104",
        "description": "MONTHLY_RENT bill",
        "entry_type": "INVOICE",
        "authorized_by": "40a48e08-f128-4d42-a906-817dc9a44eef"
    },
    {
        "id": "a19b2a5b-a8dd-4448-ba12-d3cd24bda0d4",
        "account_id": "1ea71cb2-f727-4099-877d-5e80361ba320",
        "amount": "-200.00",
        "date_created": "2021-05-10T01:23:20.590655",
        "description": "MONTHLY_RENT bill",
        "entry_type": "INVOICE",
        "authorized_by": "40a48e08-f128-4d42-a906-817dc9a44eef"
    },
    {
        "id": "bc13fe06-645e-42af-b5d1-e2c98d9282f3",
        "account_id": "1ea71cb2-f727-4099-877d-5e80361ba320",
        "amount": "-2000.00",
        "date_created": "2021-05-10T01:23:10.086158",
        "description": "GARBAGE_FEE bill",
        "entry_type": "INVOICE",
        "authorized_by": "40a48e08-f128-4d42-a906-817dc9a44eef"
    },
    {
        "id": "d7706ae2-cad1-422e-8882-6355f428a6be",
        "account_id": "1ea71cb2-f727-4099-877d-5e80361ba320",
        "amount": "-100.00",
        "date_created": "2021-05-10T01:23:00.267198",
        "description": "GARBAGE_FEE bill",
        "entry_type": "INVOICE",
        "authorized_by": "40a48e08-f128-4d42-a906-817dc9a44eef"
    },
    {
        "id": "ad879b04-fe37-4260-9ca0-59117efa326d",
        "account_id": "1ea71cb2-f727-4099-877d-5e80361ba320",
        "amount": "20000.00",
        "date_created": "2021-05-10T01:22:07.221541",
        "description": "Payment for LD9TK30G1SZ Amount 20000",
        "entry_type": "PAYMENT",
        "authorized_by": "SYSTEM"
    },
    {
        "id": "f0cba705-bc55-4f6d-a959-1318ca8bc96c",
        "account_id": "1ea71cb2-f727-4099-877d-5e80361ba320",
        "amount": "20000.00",
        "date_created": "2021-05-10T01:22:03.367837",
        "description": "Payment for LD9TK30G1SZ Amount 20000",
        "entry_type": "PAYMENT",
        "authorized_by": "SYSTEM"
    },
    {
        "id": "4a1b092b-4ba9-4c59-a5c5-ff8248dddcdd",
        "account_id": "1ea71cb2-f727-4099-877d-5e80361ba320",
        "amount": "20000.00",
        "date_created": "2021-05-10T01:21:56.518723",
        "description": "Payment for LD9TK30G1SZ Amount 20000",
        "entry_type": "PAYMENT",
        "authorized_by": "SYSTEM"
    },
    {
        "id": "3b8bc75f-2794-4486-8520-a63b309419ba",
        "account_id": "1ea71cb2-f727-4099-877d-5e80361ba320",
        "amount": "20000.00",
        "date_created": "2021-05-10T01:21:51.025137",
        "description": "Payment for LD9TK30G1SZ Amount 20000",
        "entry_type": "PAYMENT",
        "authorized_by": "SYSTEM"
    },
    {
        "id": "e3c6b5b6-db45-472e-8007-924a8a17c61d",
        "account_id": "1ea71cb2-f727-4099-877d-5e80361ba320",
        "amount": "20000.00",
        "date_created": "2021-05-10T01:21:45.918806",
        "description": "Payment for LD9TK30G1SZ Amount 20000",
        "entry_type": "PAYMENT",
        "authorized_by": "SYSTEM"
    },
    {
        "id": "c9512768-9574-4e56-ac4d-da421a0e7e4a",
        "account_id": "1ea71cb2-f727-4099-877d-5e80361ba320",
        "amount": "20000.00",
        "date_created": "2021-05-10T01:21:39.710449",
        "description": "Payment for LD9TK30G1SZ Amount 20000",
        "entry_type": "PAYMENT",
        "authorized_by": "SYSTEM"
    },
    {
        "id": "cf378dba-ccd6-47b2-ba59-2edbadf35688",
        "account_id": "1ea71cb2-f727-4099-877d-5e80361ba320",
        "amount": "20000.00",
        "date_created": "2021-05-10T01:21:32.479754",
        "description": "Payment for LD9TK30G1SZ Amount 20000",
        "entry_type": "PAYMENT",
        "authorized_by": "SYSTEM"
    },
    {
        "id": "9a93828c-2982-4eb6-8e32-3f28275c1377",
        "account_id": "1ea71cb2-f727-4099-877d-5e80361ba320",
        "amount": "20000.00",
        "date_created": "2021-05-10T01:19:39.240476",
        "description": "Payment for LD9TK30G1SZ Amount 20000",
        "entry_type": "PAYMENT",
        "authorized_by": "SYSTEM"
    }
]



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
          text: 'Running Statements\n\n',
          bold: true,
          fontSize: 14,
        },
        {
          table: {
            widths: ['auto', '48%','auto','auto', '*'],
            body: this.returnRunningStatements(this.runningStatements)
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


  returnRunningStatements(paymentList: RunningStatement[]) {
    let payments: any = [
      [
        {
          text: '#',
          style: 'header',
          margin: [0, 7]
        },
        {
          text: 'ITEM',
          style: 'header',
          margin: [0, 7]
        },
        {
          text: 'TYPE',
          style: 'header',
          margin: [0, 7]
        },
        {
          text: 'AMOUNT',
          style: 'header',
          margin: [0, 7]
        },
        {
          text: 'DATE',
          style: 'header',
          margin: [0, 7]
        },
      ]
    ]
    let payment_record =[]

    if(paymentList.length > 0) {
      for( let i=0; i<paymentList.length; i++){
        const details = paymentList[i];
        let content: any = [];
        let color = null;
        if(details['entry_type'] === 'PAYMENT'){
          color = '#198754'
        }else {
          color = '#ff8000'
        }
        content.splice(0, 0, i + 1);
        content.splice(1, 0, {text: details['description'], style: 'body', bold: true});
        content.splice(2, 0, {text: details['entry_type'], style: 'body', color: color});
        content.splice(3, 0, {text: this.currencyPipe.transform(details['amount'], ' '), style: 'body'});
        content.splice(5, 0, {text: this.dateFormatter.transform(details['date_created'], 'medium'), style: 'body'});
        payments.push(content);
      }

    }else {
      payment_record = [
        {
          colSpan: 5,
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

      payments.push(payment_record)
    }

    return payments;
  }
}
