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
            widths: ['auto', '50%', '*'],
            body: this.returnStatementsOfAccounts(this.StatementsOfAccounts)
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
          fontSize: 12,
          bold: true,
        },
        body: {
          fontSize: 10,
        },
      }
    };

    pdfMake.createPdf(docDefinition).open();
  }


  returnStatementsOfAccounts(paymentList: StatementAccount[]) {
    let payments: any = [
      [
        {
          text: '#',
          style: 'header',
          margin: [0, 7]
        },
        {
          text: 'Cost',
          style: 'header',
          margin: [0, 7]
        },
        {
          text: 'AMOUNT',
          style: 'header',
          margin: [0, 7]
        },
      ]
    ]
    let payment_record = []
    let sub_totals = 0;
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
        content.splice(2, 0, { text: this.currencyPipe.transform(details['amount'], ' '), style: 'body' });
        payments.push(content);
        sub_totals += Number(details['amount'])
      }
      const total_row = [
        {
          colSpan: 2,
          text: 'Total',
          style: 'body',
          bold: true,
          margin: [15, 7]
        },
        {
          text: '',
          style: 'body'
        }, {
          text: this.currencyPipe.transform(sub_totals, ' '),
          style: 'body',
          bold: true,
          margin: [0, 7]
        }
      ]
      payments.push(total_row);

    } else {
      payment_record = [
        {
          colSpan: 3,
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
