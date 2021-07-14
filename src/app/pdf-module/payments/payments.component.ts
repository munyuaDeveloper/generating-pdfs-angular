import { CurrencyPipe, DatePipe, TitleCasePipe } from '@angular/common';
import { ReplaceUnderscorePipe } from 'src/app/replace-underscore.pipe';
import { Component, Input, OnInit } from '@angular/core';
import * as pdfMake from "pdfmake/build/pdfmake";
import * as pdfFonts from 'pdfmake/build/vfs_fonts';
import { PaymentInterface } from '../interfaces/data.interface';
(<any>pdfMake).vfs = pdfFonts.pdfMake.vfs;

// FOR ANGULAR 8
// import pdfMake from "pdfmake/build/pdfmake";
// import pdfFonts from "pdfmake/build/vfs_fonts";
// import { ReplaceUnderscorePipe } from '../../replace-underscore.pipe';
// pdfMake.vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.scss']
})
export class PaymentsComponent implements OnInit {

  @Input() payments: PaymentInterface[];

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
            widths: ['auto', '17%', '14.28%', '17.28%', '14.28%', 'auto', '*'],
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
    let payment_record = []

    if (paymentList.length > 0) {
      for (let i = 0; i < paymentList.length; i++) {
        const details = paymentList[i];
        let content: any = [];
        let color = null;
        if (details['transaction_status'] === 'PROCESSED') {
          color = '#198754'
        } else {
          color = '#ff8000'
        }
        content.splice(0, 0, i + 1);
        content.splice(1, 0, { text: details['transaction_number'], style: 'body', bold: true });
        content.splice(2, 0, { text: this.currencyPipe.transform(details['amount'], ' '), style: 'body' });
        content.splice(3, 0, { text: details['bill_reference_number'], style: 'body' });
        content.splice(4, 0, { text: this.titleCase.transform(this.replaceUderscore.transform(details['transaction_status'])), style: 'body', color: color });
        content.splice(5, 0, { text: this.dateFormatter.transform(details['date_of_transaction'], 'medium'), style: 'body' });
        content.splice(6, 0, { text: details['payment_account']['account_name'], style: 'body' });
        payments.push(content);
      }

    } else {
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
