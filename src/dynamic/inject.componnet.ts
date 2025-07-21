import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { DynamicStockComponent } from './dynamicstock.component';

@Component({
  selector: 'app-inject',
  template: `
    <h2>Dynamic Inject Component</h2>

    <button class="btn btn-primary" (click)="getInfo()" [disabled]="flag">
      Get Stock Info
    </button>
  `,
})
export class InjectComponent implements OnInit {
  constructor(private vcr: ViewContainerRef) {}
  flag: boolean = false;
  getInfo() {
    const hostView = this.vcr.createComponent(DynamicStockComponent);
    hostView.changeDetectorRef.detectChanges();
    this.flag = true;
    console.log('Dynamic Component Created');
  }

  ngOnInit() {}
}
