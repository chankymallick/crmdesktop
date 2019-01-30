declare var $;
declare var toastr;
import { Component, OnInit } from '@angular/core';
import { Utility } from '../Utility';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-newuser',
  templateUrl: './newuser.component.html',
  styleUrls: ['./newuser.component.css']
})
export class NewuserComponent implements OnInit {


  public email;
  public name="Chanky";
  public mobilePrefix = "91";
  public mobileNo: number=7097919273;
  public password="12345";
  public userRole ="ADMIN";
  public active;
  public imageUid ;
  public description="ok";
  public createdBy;
  public createdDate;
  public modifiedBy;
  public modifiedDate;

  constructor(public http: HttpClient) { }

  ngOnInit() {
  }
  public saveUser() {
    this.http.post(Utility.APIHost + 'api/v1/user/adduser', this.getNewuserJson()).subscribe(data => {
      toastr.success('User Created Succesfully.');
    }, (err: HttpErrorResponse) => {
      toastr.error('Failed to Create User');    
    });
  }
  public getNewuserJson() {
    var newUser = {
      "email": this.email,
      "name": this.name,
      "mobilePrefix": this.mobilePrefix,
      "mobileNo": this.mobileNo,
      "password": this.password,
      "userRole": this.userRole,
      "active": true,
      "imageUid": -1,
      "description": this.description,
      "createdBy": 1002,
      "modifiedBy": 1003,
    }
    return newUser;
  }

  public showModal(){
    $("#load_me_baby").on("click", function(e) {
      e.preventDefault();
      $("#loadMe").modal({
        backdrop: "static", //remove ability to close modal with click
        keyboard: false, //remove option to close with keyboard
        show: true //Display loader!
      });
    });
  }
}
