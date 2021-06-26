import { CurrencyPipe, DatePipe, TitleCasePipe } from '@angular/common';
import { ReplaceUnderscorePipe } from 'src/app/replace-underscore.pipe';
import { Component, OnInit } from '@angular/core';
import * as pdfMake from "pdfmake/build/pdfmake";
import * as pdfFonts from 'pdfmake/build/vfs_fonts';
(<any>pdfMake).vfs = pdfFonts.pdfMake.vfs;


// FOR ANGULAR 8
// import pdfMake from "pdfmake/build/pdfmake";
// import pdfFonts from "pdfmake/build/vfs_fonts";
// import { ReplaceUnderscorePipe } from '../../replace-underscore.pipe';
// pdfMake.vfs = pdfFonts.pdfMake.vfs;

export interface Payment_account {
	id: string;
	account_number: string;
	account_name: string;
	payment_channel: string;
}

export interface PaymentInterface {
	id: string;
	payment_account: Payment_account;
	bill_reference_number: string;
	transaction_number: string;
	channel_transaction_number: string;
	amount: string;
	amount_remaining: string;
	customer_name: string;
	customer_account_number: string;
	date_of_transaction: string;
	date_created: string;
	transaction_status: string;
}

@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.scss']
})
export class PaymentsComponent implements OnInit {

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
    {
      "id": "2c5146dc-764a-4d5c-9973-85c8545ba5ee",
      "payment_account": {
        "id": "cc24a6a0-3208-4c40-acb6-114f7b978842",
        "account_number": "40402118",
        "account_name": "MPESA PAYBILL",
        "payment_channel": "9dd68339-bd0e-4591-96f9-d08dca73accc"
      },
      "bill_reference_number": "LD9TK30G1SZ",
      "transaction_number": "PBK798et080",
      "channel_transaction_number": "PBK79ee8080",
      "amount": "20000.00",
      "amount_remaining": "19800.00",
      "customer_name": "Peterson Muriga",
      "customer_account_number": "2980",
      "date_of_transaction": "2022-03-31T10:15:20",
      "date_created": "2021-05-10T01:24:50.271468",
      "transaction_status": "WAITING_SETTLEMENT"
    },
    {
      "id": "1694dfaf-c3fd-48c6-9279-12ae2248ecfd",
      "payment_account": {
        "id": "cc24a6a0-3208-4c40-acb6-114f7b978842",
        "account_number": "40402118",
        "account_name": "MPESA PAYBILL",
        "payment_channel": "9dd68339-bd0e-4591-96f9-d08dca73accc"
      },
      "bill_reference_number": "LD9TK30G1SZ",
      "transaction_number": "PBK798ee080",
      "channel_transaction_number": "PBK79ee8080",
      "amount": "20000.00",
      "amount_remaining": "19800.00",
      "customer_name": "Peterson Muriga",
      "customer_account_number": "2980",
      "date_of_transaction": "2022-03-31T10:15:20",
      "date_created": "2021-05-10T01:23:50.322854",
      "transaction_status": "WAITING_SETTLEMENT"
    },
    {
      "id": "17c22400-cc8d-458b-a03d-101adac0f77d",
      "payment_account": {
        "id": "cc24a6a0-3208-4c40-acb6-114f7b978842",
        "account_number": "40402118",
        "account_name": "MPESA PAYBILL",
        "payment_channel": "9dd68339-bd0e-4591-96f9-d08dca73accc"
      },
      "bill_reference_number": "LD9TK30G1SZ",
      "transaction_number": "22323112wewe12",
      "channel_transaction_number": "22323wewe11212",
      "amount": "20000.00",
      "amount_remaining": "20000.00",
      "customer_name": "Peterson Muriga",
      "customer_account_number": "2980",
      "date_of_transaction": "2022-03-31T10:15:20",
      "date_created": "2021-05-10T01:22:07.227053",
      "transaction_status": "PROCESSED"
    },
    {
      "id": "7bdf3ba8-6faa-4207-878e-e4894fc5ac94",
      "payment_account": {
        "id": "cc24a6a0-3208-4c40-acb6-114f7b978842",
        "account_number": "40402118",
        "account_name": "MPESA PAYBILL",
        "payment_channel": "9dd68339-bd0e-4591-96f9-d08dca73accc"
      },
      "bill_reference_number": "LD9TK30G1SZ",
      "transaction_number": "2232311212",
      "channel_transaction_number": "2232311212",
      "amount": "20000.00",
      "amount_remaining": "20000.00",
      "customer_name": "Peterson Muriga",
      "customer_account_number": "2980",
      "date_of_transaction": "2022-03-31T10:15:20",
      "date_created": "2021-05-10T01:22:03.372760",
      "transaction_status": "PROCESSED"
    },
    {
      "id": "e8daa42e-ecf1-4dbc-97b5-bbe90f2d6b9b",
      "payment_account": {
        "id": "cc24a6a0-3208-4c40-acb6-114f7b978842",
        "account_number": "40402118",
        "account_name": "MPESA PAYBILL",
        "payment_channel": "9dd68339-bd0e-4591-96f9-d08dca73accc"
      },
      "bill_reference_number": "LD9TK30G1SZ",
      "transaction_number": "23232323",
      "channel_transaction_number": "2322323",
      "amount": "20000.00",
      "amount_remaining": "20000.00",
      "customer_name": "Peterson Muriga",
      "customer_account_number": "2980",
      "date_of_transaction": "2022-03-31T10:15:20",
      "date_created": "2021-05-10T01:21:56.523707",
      "transaction_status": "PROCESSED"
    },
    {
      "id": "ed2e01f9-cdac-4374-b34b-f803059b8c35",
      "payment_account": {
        "id": "cc24a6a0-3208-4c40-acb6-114f7b978842",
        "account_number": "40402118",
        "account_name": "MPESA PAYBILL",
        "payment_channel": "9dd68339-bd0e-4591-96f9-d08dca73accc"
      },
      "bill_reference_number": "LD9TK30G1SZ",
      "transaction_number": "ZBK798e402823230",
      "channel_transaction_number": "2322323",
      "amount": "20000.00",
      "amount_remaining": "20000.00",
      "customer_name": "Peterson Muriga",
      "customer_account_number": "2980",
      "date_of_transaction": "2022-03-31T10:15:20",
      "date_created": "2021-05-10T01:21:51.030340",
      "transaction_status": "PROCESSED"
    },
    {
      "id": "30d73e75-d173-4daf-91fd-60f8c51c92b6",
      "payment_account": {
        "id": "cc24a6a0-3208-4c40-acb6-114f7b978842",
        "account_number": "40402118",
        "account_name": "MPESA PAYBILL",
        "payment_channel": "9dd68339-bd0e-4591-96f9-d08dca73accc"
      },
      "bill_reference_number": "LD9TK30G1SZ",
      "transaction_number": "ZBK798e40280",
      "channel_transaction_number": "ZBK79er48280",
      "amount": "20000.00",
      "amount_remaining": "20000.00",
      "customer_name": "Peterson Muriga",
      "customer_account_number": "2980",
      "date_of_transaction": "2022-03-31T10:15:20",
      "date_created": "2021-05-10T01:21:45.924289",
      "transaction_status": "PROCESSED"
    },
    {
      "id": "8d75e543-de43-4868-99a9-c4bfaf769236",
      "payment_account": {
        "id": "cc24a6a0-3208-4c40-acb6-114f7b978842",
        "account_number": "40402118",
        "account_name": "MPESA PAYBILL",
        "payment_channel": "9dd68339-bd0e-4591-96f9-d08dca73accc"
      },
      "bill_reference_number": "LD9TK30G1SZ",
      "transaction_number": "ZBK798e40380",
      "channel_transaction_number": "ZBK79er48080",
      "amount": "20000.00",
      "amount_remaining": "20000.00",
      "customer_name": "Peterson Muriga",
      "customer_account_number": "2980",
      "date_of_transaction": "2022-03-31T10:15:20",
      "date_created": "2021-05-10T01:21:39.716474",
      "transaction_status": "PROCESSED"
    },
    {
      "id": "3d98d4cd-69e4-421d-9b22-3d274c3e07da",
      "payment_account": {
        "id": "cc24a6a0-3208-4c40-acb6-114f7b978842",
        "account_number": "40402118",
        "account_name": "MPESA PAYBILL",
        "payment_channel": "9dd68339-bd0e-4591-96f9-d08dca73accc"
      },
      "bill_reference_number": "LD9TK30G1SZ",
      "transaction_number": "ZBK798et0380",
      "channel_transaction_number": "ZBK79er38080",
      "amount": "20000.00",
      "amount_remaining": "20000.00",
      "customer_name": "Peterson Muriga",
      "customer_account_number": "2980",
      "date_of_transaction": "2022-03-31T10:15:20",
      "date_created": "2021-05-10T01:21:32.487813",
      "transaction_status": "PROCESSED"
    },
    {
      "id": "817f5c7d-2daf-449d-a712-08c31d37042b",
      "payment_account": {
        "id": "cc24a6a0-3208-4c40-acb6-114f7b978842",
        "account_number": "40402118",
        "account_name": "MPESA PAYBILL",
        "payment_channel": "9dd68339-bd0e-4591-96f9-d08dca73accc"
      },
      "bill_reference_number": "LD9TK30G1SZ",
      "transaction_number": "PBK798e080",
      "channel_transaction_number": "PBK79e8080",
      "amount": "20000.00",
      "amount_remaining": "20000.00",
      "customer_name": "Peterson Muriga",
      "customer_account_number": "2980",
      "date_of_transaction": "2022-03-31T10:15:20",
      "date_created": "2021-05-10T01:19:18.606484",
      "transaction_status": "PROCESSED"
    },
    {
      "id": "c3e116d9-324c-4150-a2e0-aba83080f77c",
      "payment_account": {
        "id": "cc24a6a0-3208-4c40-acb6-114f7b978842",
        "account_number": "40402118",
        "account_name": "MPESA PAYBILL",
        "payment_channel": "9dd68339-bd0e-4591-96f9-d08dca73accc"
      },
      "bill_reference_number": "LD9TK30G1SZ",
      "transaction_number": "PBK798080",
      "channel_transaction_number": "PBK798080",
      "amount": "20000.00",
      "amount_remaining": "19600.00",
      "customer_name": "Peterson Muriga",
      "customer_account_number": "2980",
      "date_of_transaction": "2022-03-31T10:15:20",
      "date_created": "2021-05-10T01:19:16.629697",
      "transaction_status": "WAITING_SETTLEMENT"
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
          text: 'PAYMENT TRANSACTIONS\n\n',
          bold: true,
          fontSize: 14,
        },
        {
          table: {
            widths: ['auto', '17%','14.28%','17.28%','14.28%','auto', '*'],
            body: this.returnPaymentsRecords(this.payments)
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


  returnPaymentsRecords(paymentList: PaymentInterface[]) {
    let payments: any = [
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
          text: 'BILL REFERENCE NUMBER',
          style: 'header',
          margin: [0, 7]
        },
        {
          text: 'STATUS',
          style: 'header',
          margin: [0, 7]
        },
        {
          text: 'TRANSACTION DATE',
          style: 'header',
          margin: [0, 7]
        },
        {
          text: 'ACCOUNT NUMBER',
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
        if(details['transaction_status'] === 'PROCESSED'){
          color = '#198754'
        }else {
          color = '#ff8000'
        }
        content.splice(0, 0, i + 1);
        content.splice(1, 0, {text: details['transaction_number'], style: 'body', bold: true});
        content.splice(2, 0, {text: this.currencyPipe.transform(details['amount'], ' '), style: 'body'});
        content.splice(3, 0, {text: details['bill_reference_number'], style: 'body'});
        content.splice(4, 0, {text: this.titleCase.transform(this.replaceUderscore.transform(details['transaction_status'])), style: 'body', color: color});
        content.splice(5, 0, {text: this.dateFormatter.transform(details['date_of_transaction'], 'medium'), style: 'body'});
        content.splice(6, 0, {text: details['payment_account']['account_name'], style: 'body'});
        payments.push(content);
      }

    }else {
      payment_record = [
        {
          colSpan: 7,
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

      payments.push(payment_record)
    }

    return payments;
  }
}
