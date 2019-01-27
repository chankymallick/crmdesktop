declare var $;
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-leads',
  templateUrl: './leads.component.html',
  styleUrls: ['./leads.component.css']
})
export class LeadsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  //   $(document).ready(function () {
  //     $('#example').DataTable(

  //         {

  //             "aLengthMenu": [
  //                 [5, 10, 25, -1],
  //                 [5, 10, 25, "All"]
  //             ],
  //             "iDisplayLength": 5
  //         }
  //     );
  // });
  $(document).ready(function() {
    $('#crmdatatable').DataTable( {
      

                    "aLengthMenu": [
                        [5, 10, 25, -1],
                        [5, 10, 25, "All"]
                    ],
                    "iDisplayLength": 5,
                
        initComplete: function () {
            this.api().columns().every( function () {
                var column = this;
                var select = $('<select><option value=""></option></select>')
                    .appendTo( $(column.footer()).empty() )
                    .on( 'change', function () {
                        var val = $.fn.dataTable.util.escapeRegex(
                            $(this).val()
                        );
 
                        column
                            .search( val ? '^'+val+'$' : '', true, false )
                            .draw();
                    } );
 
                column.data().unique().sort().each( function ( d, j ) {
                    select.append( '<option value="'+d+'">'+d+'</option>' )
                } );
            } );
        }
    } );
} );
  }

}
