import { CurrencyPipe, DatePipe, TitleCasePipe } from '@angular/common';
import { ReplaceUnderscorePipe } from 'src/app/replace-underscore.pipe';
import { Component, Input, OnInit } from '@angular/core';
import * as pdfMake from "pdfmake/build/pdfmake";
import * as pdfFonts from 'pdfmake/build/vfs_fonts';
import { ArrearsInterface } from '../interfaces/data.interface';
(<any>pdfMake).vfs = pdfFonts.pdfMake.vfs;

// FOR ANGULAR 8
// import pdfMake from "pdfmake/build/pdfmake";
// import pdfFonts from "pdfmake/build/vfs_fonts";
// import { ReplaceUnderscorePipe } from '../../replace-underscore.pipe';
// pdfMake.vfs = pdfFonts.pdfMake.vfs;
@Component({
  selector: 'app-arrears',
  templateUrl: './arrears.component.html',
  styleUrls: ['./arrears.component.scss']
})
export class ArrearsComponent implements OnInit {


  @Input() arrears: ArrearsInterface[];


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
          text: 'Arrears\n\n',
          bold: true,
          fontSize: 14,
        },
        {
          table: {
            widths: ['auto', 'auto', 'auto', 'auto', 'auto', 'auto', '*'],
            body: this.returnArrears(this.arrears)
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


  returnArrears(arrrearsList: ArrearsInterface[]) {
    let arrears: any = [
      [
        {
          text: '#',
          style: 'header',
          margin: [0, 7]
        },
        {
          text: 'CURRENT BALANCE',
          style: 'header',
          margin: [0, 7]
        },
        {
          text: 'PREVIOUS BALANCE',
          style: 'header',
          margin: [0, 7]
        },
        {
          text: 'ACCOUNT NUMBER',
          style: 'header',
          margin: [0, 7]
        },
        {
          text: 'TENANT',
          style: 'header',
          margin: [0, 7]
        },
        {
          text: 'TENANT ID NUMBER',
          style: 'header',
          margin: [0, 7]
        },
        {
          text: 'DATE OPENED',
          style: 'header',
          margin: [0, 7]
        },
      ]
    ]
    let payment_record = []

    if (arrrearsList.length > 0) {
      for (let i = 0; i < arrrearsList.length; i++) {
        const details = arrrearsList[i];
        let content: any = [];

        content.splice(0, 0, i + 1);
        content.splice(1, 0, { text: this.currencyPipe.transform(details['current_balance'], ' '), style: 'body', bold: true });
        content.splice(2, 0, { text: this.currencyPipe.transform(details['previous_balance'], ' '), style: 'body' });
        content.splice(3, 0, { text: details['account_details']['account_number'], style: 'body' });
        content.splice(4, 0, { text: this.titleCase.transform(details['account_details']['tenant']['names']), style: 'body' });
        content.splice(5, 0, { text: details['account_details']['tenant']['identification_number'], style: 'body' });
        content.splice(6, 0, { text: this.dateFormatter.transform(details['account_details']['date_opened'], 'medium'), style: 'body' });
        arrears.push(content);
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

      arrears.push(payment_record)
    }

    return arrears;
  }
}
