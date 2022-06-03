import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-test-page',
  templateUrl: './test-page.component.html',
  styleUrls: ['./test-page.component.css']
})
export class TestPageComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    let pars = this.route.snapshot.queryParams
    console.log('snapshot.queryParams:' + JSON.stringify(pars))

    this.route.queryParams.subscribe(params => console.log("subscrib:" + params))
  }

}
