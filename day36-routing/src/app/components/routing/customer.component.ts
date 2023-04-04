import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit, OnDestroy {
  //http://localhost:4200/customer/123?fId=%201%7C2%7C3%7C4%7C5

  customerId = ""
  param$!: Subscription
  queryParam$!: Subscription
  fId!: string[]

  constructor(private activatedRoute: ActivatedRoute) { }

  // using subscription to access Path Variable
  ngOnInit(): void {
    this.activatedRoute
    this.param$ = this.activatedRoute.params.subscribe(
      (params) => {
        this.customerId = params['custId']
        console.debug(this.customerId)
      }
    )
    this.queryParam$ = this.activatedRoute.queryParams.subscribe(
      (queryParams) => {
        console.debug(queryParams)
        console.debug(queryParams['fId'].split('|'))
        // save
        this.fId = queryParams['fId'].split('|')
      }
    )
  }

  ngOnDestroy(): void {
    this.param$.unsubscribe()
    this.queryParam$.unsubscribe()
  }
}
