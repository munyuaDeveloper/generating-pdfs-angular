import { CurrencyPipe, DatePipe, TitleCasePipe } from '@angular/common';
import { ReplaceUnderscorePipe } from 'src/app/replace-underscore.pipe';
import { Component, OnInit } from '@angular/core';
import * as pdfMake from "pdfmake/build/pdfmake";
import * as pdfFonts from 'pdfmake/build/vfs_fonts';
(<any>pdfMake).vfs = pdfFonts.pdfMake.vfs;
export interface Account_statu {
  id: string;
  code: string;
  name: string;
}

export interface Tenant {
  id: string;
  names: string;
  identification_number: string;
  identification_type: string;
}

export interface Account_detail {
  id: string;
  account_number: string;
  old_account_number: string;
  estate_unit?: any;
  account_status: Account_statu;
  tenant: Tenant;
  date_opened: string;
  date_closed?: any;
}

export interface ArrearsInterface {
  id: string;
  current_balance: string;
  previous_balance: string;
  last_updated: string;
  account_id: string;
  account_details: Account_detail;
}
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
        content.splice(1, 0, { text: this.currencyPipe.transform(details['current_balance'], ' ') , style: 'body', bold: true });
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
