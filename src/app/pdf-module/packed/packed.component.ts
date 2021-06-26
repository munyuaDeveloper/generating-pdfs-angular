import { DatePipe, TitleCasePipe } from '@angular/common';
import { ReplaceUnderscorePipe } from 'src/app/replace-underscore.pipe';
import { Component, OnInit } from '@angular/core';
import * as pdfMake from "pdfmake/build/pdfmake";
import * as pdfFonts from 'pdfmake/build/vfs_fonts';
(<any>pdfMake).vfs = pdfFonts.pdfMake.vfs;

export interface Property_statu {
	id: string;
	name: string;
	code: string;
}

export interface Property_category {
	id: string;
	name: string;
	code: string;
}

export interface PropertyInterface {
	id: string;
	name: string;
	property_number: string;
	property_status: Property_statu;
	property_category: Property_category;
}
// FOR ANGULAR 8
// import pdfMake from "pdfmake/build/pdfmake";
// import pdfFonts from "pdfmake/build/vfs_fonts";
// import { ReplaceUnderscorePipe } from '../../replace-underscore.pipe';
// pdfMake.vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-packed',
  templateUrl: './packed.component.html',
  styleUrls: ['./packed.component.scss']
})
export class PackedComponent implements OnInit {


  properties: PropertyInterface[] = [
    {
      "id": "3483bd4b-0696-4c75-b525-c709cc15d76e",
      "name": "Property 1",
      "property_number": "9090090",
      "property_status": {
        "id": "b8c34393-52b2-4665-b017-a70d7c293ca0",
        "name": "ACTIVE",
        "code": "ACTIVE"
      },
      "property_category": {
        "id": "a155d924-b8d0-4660-bb4b-79cca6fae9ea",
        "name": "APARTMENTS",
        "code": "APARTMENTS"
      }
    },
    {
      "id": "4667f1a8-76e7-4557-9753-dcbcfabb257d",
      "name": "Test apartment",
      "property_number": "10900",
      "property_status": {
        "id": "b8c34393-52b2-4665-b017-a70d7c293ca0",
        "name": "ACTIVE",
        "code": "ACTIVE"
      },
      "property_category": {
        "id": "a155d924-b8d0-4660-bb4b-79cca6fae9ea",
        "name": "APARTMENTS",
        "code": "APARTMENTS"
      }
    },
    {
      "id": "e3d6b4a8-1aab-4a24-b6a8-718f8945764e",
      "name": "Zuri apartment",
      "property_number": "P9090",
      "property_status": {
        "id": "b8c34393-52b2-4665-b017-a70d7c293ca0",
        "name": "ACTIVE",
        "code": "ACTIVE"
      },
      "property_category": {
        "id": "a155d924-b8d0-4660-bb4b-79cca6fae9ea",
        "name": "APARTMENTS",
        "code": "APARTMENTS"
      }
    }
  ]


  constructor(private dateFormatter: DatePipe,
    private replaceUderscore: ReplaceUnderscorePipe,
    private titleCase: TitleCasePipe) { }

  ngOnInit(): void {
  }

  generatePDF() {
    let docDefinition = {
      // pageOrientation: 'landscape',
      content: [

        {
          text: 'Properties\n\n',
          bold: true,
          fontSize: 14,
        },
        {
          table: {
            widths: ['auto', 'auto','auto','auto', '*'],
            body: this.returnRunningStatements(this.properties)
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


  returnRunningStatements(paymentList: PropertyInterface[]) {
    let payments: any = [
      [
        {
          text: '#',
          style: 'header',
          margin: [0, 7]
        },
        {
          text: 'NAME',
          style: 'header',
          margin: [0, 7]
        },
        {
          text: 'PROPERTY NUMBER',
          style: 'header',
          margin: [0, 7]
        },
        {
          text: 'PROPERTY CATEGORY',
          style: 'header',
          margin: [0, 7]
        },
        {
          text: 'STATUS',
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
        if(details['property_status']['code'] === 'ACTIVE'){
          color = '#198754'
        }else {
          color = '#ff8000'
        }
        content.splice(0, 0, i + 1);
        content.splice(1, 0, {text: details['name'], style: 'body', bold: true});
        content.splice(2, 0, {text: details['property_number'], style: 'body'});
        content.splice(3, 0, {text: details['property_category']['name'], style: 'body'});
        content.splice(5, 0, {text: details['property_status']['name'], style: 'body', color: color});
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
