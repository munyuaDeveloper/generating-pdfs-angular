import { CurrencyPipe, DatePipe, TitleCasePipe } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import * as pdfMake from "pdfmake/build/pdfmake";
import * as pdfFonts from 'pdfmake/build/vfs_fonts';
import { ReplaceUnderscorePipe } from 'src/app/replace-underscore.pipe';
import { StatementAccount, Subcategory } from '../interfaces/data.interface';
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
            widths: ['auto', 'auto', 200, '*'],
            body: this.returnStatementsOfAccounts(this.StatementsOfAccounts)
          },
          layout: {
            paddingLeft: function (i, node) { return 0; },
            paddingRight: function (i, node) { return 0; },
            paddingTop: function (i, node) { return 0; },
            paddingBottom: function (i, node) { return 0; }
          }
        },
      ],
      styles: {
        header: {
          fontSize: 14,
          bold: true,
          margin: [5, 5]
        },
        body: {
          fontSize: 12,
          margin: [5, 5]
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
          margin: [5, 7]
        },
        {
          text: 'Category',
          style: 'header',
          margin: [5, 7]
        },
        {
          text: 'Subcategory',
          style: 'header',
          margin: [5, 7]
        },
        {
          text: 'Amount',
          style: 'header',
          margin: [5, 7]
        }
      ]
    ]
    if (paymentList.length > 0) {
      for (let i = 0; i < paymentList.length; i++) {
        const details = paymentList[i];
        let content: any = [];
        content.splice(0, 0, { text: i + 1, style: 'body', });
        content.splice(1, 0,
          {
            text: this.titleCase.transform(this.replaceUderscore.transform(details['category_name'])),
            style: 'body',
            bold: true
          }
        );
        content.splice(2, 0,
          {
            colSpan: 2,
            table: {
              widths: [200, '*'],
              body: this.returnSUbStatementsOfAccounts(paymentList[i]['subcategories'])
            },
            margin: [0, 0],
            layout: {
              paddingLeft: function (i, node) { return 0; },
              paddingRight: function (i, node) { return 0; },
              paddingTop: function (i, node) { return 0; },
              paddingBottom: function (i, node) { return 0; }
            }
            // layout: 'noBorders'
          });
        content.splice(3, 0, '');
        payments.push(content)

        payments.push(
          [
            {
              colSpan: 3,
              text: 'Total',
              style: 'body',
              bold: true
            },
            {
              text: '',
              style: 'body',
              bold: true
            },
            {
              text: '',
              style: 'body',
              bold: true
            },
            {
              text: this.currencyPipe.transform(details['total'], ' Ksh '),
              style: 'body',
              bold: true
            }
          ]
        )
      }


    }

    return payments;
  }
  returnSUbStatementsOfAccounts(paymentList: Subcategory[]) {
    let payments: any = [
    ]
    if (paymentList.length > 0) {
      for (let i = 0; i < paymentList.length; i++) {
        const details = paymentList[i];
        let content: any = [];
        content.splice(0, 0,
          {
            text: this.titleCase.transform(details['category']),
            style: 'body',
            bold: true
          }
        );
        content.splice(1, 0,
          {
            borders: [true, false, false, false],
            text: this.currencyPipe.transform(details['total'], ' Ksh '),
            style: 'body'
          });
        payments.push(content)
      }


    }

    return payments;
  }
}
