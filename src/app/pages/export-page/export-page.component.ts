import { Component, ViewChild } from '@angular/core';
import { of } from 'rxjs';
import { CSVRecord } from './CSVRecord';

@Component({
    selector: 'app-export-page',
    templateUrl: './export-page.component.html',
    styleUrls: ['./export-page.component.scss'],
})
export class ExportPageComponent {
    title = 'Angular7AppReadCSV';

    public records: any[] = [];
    @ViewChild('csvReader', { static: false }) csvReader: any;

    uploadListener($event: any): void {
        const text = [];
        const files = $event.srcElement.files;

        if (this.isValidCSVFile(files[0])) {
            const input = $event.target;
            const reader = new FileReader();
            reader.readAsText(input.files[0]);

            reader.onload = () => {
                const csvData = reader.result;
                const csvRecordsArray = (csvData as string).split(/\r\n|\n/);

                const headersRow = this.getHeaderArray(csvRecordsArray);

                this.records = this.getDataRecordsArrayFromCSVFile(
                    csvRecordsArray,
                    headersRow.length,
                );
            };

            reader.onerror = () =>{
                console.log('error is occured while reading file!');
            };
        } else {
            alert('Please import valid .csv file.');
            this.fileReset();
        }
    }

    getDataRecordsArrayFromCSVFile(csvRecordsArray: any, headerLength: any) {
        const csvArr = [];

        for (let i = 1; i < csvRecordsArray.length; i++) {
            const curruntRecord = (csvRecordsArray[i] as string).split(',');
            if (curruntRecord.length === headerLength) {
                const csvRecord: CSVRecord = new CSVRecord();
                csvRecord.id = curruntRecord[0].trim();
                csvRecord.firstName = curruntRecord[1].trim();
                csvRecord.lastName = curruntRecord[2].trim();
                csvRecord.age = curruntRecord[3].trim();
                csvRecord.position = curruntRecord[4].trim();
                csvRecord.mobile = curruntRecord[5].trim();
                csvArr.push(csvRecord);
            }
        }
        return csvArr;
    }

    isValidCSVFile(file: any) {
        return file.name.endsWith('.csv');
    }

    getHeaderArray(csvRecordsArr: any) {
        const headers = (csvRecordsArr[0] as string).split(',');
        const headerArray = [];
        for (const j of headers) {
            headerArray.push(headers[j]);
        }
        return headerArray;
    }

    fileReset() {
        this.csvReader.nativeElement.value = '';
        this.records = [];
    }
}
