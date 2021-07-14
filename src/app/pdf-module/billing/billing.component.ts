import { CurrencyPipe, DatePipe, TitleCasePipe } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import * as pdfMake from "pdfmake/build/pdfmake";
import * as pdfFonts from 'pdfmake/build/vfs_fonts';
import { ReplaceUnderscorePipe } from 'src/app/replace-underscore.pipe';
import { BillInterface } from '../interfaces/data.interface';
(<any>pdfMake).vfs = pdfFonts.pdfMake.vfs;


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

  @Input() bills: BillInterface[];

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
        content.splice(2, 0, { text: this.currencyPipe.transform(details['amount'], ' '), style: 'body', });
        content.splice(3, 0, { text: this.currencyPipe.transform(details['outstanding_amount'], ' '), style: 'body' });
        content.splice(4, 0, { text: details['status'], style: 'body', color: color });
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
