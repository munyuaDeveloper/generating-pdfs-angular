import { CurrencyPipe, DatePipe, TitleCasePipe } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import * as pdfMake from "pdfmake/build/pdfmake";
import * as pdfFonts from 'pdfmake/build/vfs_fonts';
import { ReplaceUnderscorePipe } from 'src/app/replace-underscore.pipe';
import { StatementAccount } from '../interfaces/data.interface';
(<any>pdfMake).vfs = pdfFonts.pdfMake.vfs;


@Component({
  selector: 'app-statement-account',
  templateUrl: './statement-account.component.html',
  styleUrls: ['./statement-account.component.scss']
})
export class StatementAccountComponent implements OnInit {


  @Input() StatementsOfAccounts: StatementAccount[]

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
          text: 'Statements of Accounts\n\n',
          bold: true,
          fontSize: 14,
        },
        {
          table: {
            widths: ['auto', '48%', 'auto', 'auto', '*'],
            body: this.returnRunningStatements(this.StatementsOfAccounts)
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


  returnRunningStatements(paymentList: StatementAccount[]) {
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
    let payment_record = []

    if (paymentList.length > 0) {
      for (let i = 0; i < paymentList.length; i++) {
        const details = paymentList[i];
        let content: any = [];
        let color = null;
        if (details['entry_type'] === 'PAYMENT') {
          color = '#198754'
        } else {
          color = '#ff8000'
        }
        content.splice(0, 0, i + 1);
        content.splice(1, 0, { text: this.titleCase.transform(this.replaceUderscore.transform(details['description'])), style: 'body', bold: true });
        content.splice(2, 0, { text: details['entry_type'], style: 'body', color: color });
        content.splice(3, 0, { text: this.currencyPipe.transform(details['amount'], ' '), style: 'body' });
        content.splice(5, 0, { text: this.dateFormatter.transform(details['date_created'], 'medium'), style: 'body' });
        payments.push(content);
      }

    } else {
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
