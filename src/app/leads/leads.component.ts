declare var $;
import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Utility } from '../Utility';

@Component({
    selector: 'app-leads',
    templateUrl: './leads.component.html',
    styleUrls: ['./leads.component.css']
})
export class LeadsComponent implements OnInit {

    public allLeads;

    constructor(public http: HttpClient) {
        this.getAllLeads();
    }
    public getAllLeads() {        
        this.http.get(Utility.APIHost + 'api/v1/lead/getalllead', ).subscribe(data => {
            console.log(data)
            this.allLeads = data;
        }, (err: HttpErrorResponse) => {
        });

    }
    ngOnInit() {
        $(document).ready(function () {
            $('#crmdatatable').DataTable({


                "aLengthMenu": [
                    [5, 10, 25, -1],
                    [5, 10, 25, "All"]
                ],
                "iDisplayLength": 5,

                initComplete: function () {
                    this.api().columns().every(function () {
                        var column = this;
                        var select = $('<select><option value=""></option></select>')
                            .appendTo($(column.footer()).empty())
                            .on('change', function () {
                                var val = $.fn.dataTable.util.escapeRegex(
                                    $(this).val()
                                );

                                column
                                    .search(val ? '^' + val + '$' : '', true, false)
                                    .draw();
                            });

                        column.data().unique().sort().each(function (d, j) {
                            select.append('<option value="' + d + '">' + d + '</option>')
                        });
                    });
                }
            });
        });
    }

}
