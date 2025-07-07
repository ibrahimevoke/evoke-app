import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChange,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  template: `
    <div class="container bg-success">
      <h5>
        Customer Demo
        <input
          type="text"
          class="form-control"
          [(ngModel)]="search"
          placeholder="Search Customer"
        />
        <child [search]="search"></child>
      </h5>
    </div>
  `,
})
export class LIfeCycleComponent implements OnInit {
  constructor() {}
  search: string = 'Ibrahim';

  ngOnInit() {}
}
// Child Component
@Component({
  selector: 'child',
  template: `
    <div class="container bg-info">
      <h5>Child Component Search Text: {{ search }}</h5>
      <h4>Counter: {{ counter }}</h4>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChildComponent implements OnInit, OnChanges {
  @Input()
  search: string = '';
  counter: number = 0;
  //1
  constructor(public cd: ChangeDetectorRef) {
    console.log(`Child Component Constructor : ${this.search}`);
    //fired only once when the component is created and used for Dependency Injection
    // this.cd.detach(); // Detach change detection to prevent automatic checks
  }

  //2
  ngOnInit() {
    console.log(`Child Component ngOnInit : ${this.search}`);
    //fired only once, make api callas with http here and update the state
    //http.get(url)
    // subcribe to web socket, observable and custom events
    /* window.setTimeout(() => {
      this.cd.reattach(); // Reattach change detection
    }, 5000);*/
    window.setInterval(() => {
      this.counter++;
      console.log(`Counter: ${this.counter}`);
      // if (this.counter > 5) {
      //   this.cd.detectChanges(); // Manually trigger change detection
      // }
    }, 2000);
  }

  //3
  ngOnChanges(changes: SimpleChanges): void {
    console.log(`Child Component ONChanges : ${this.search}`);
    // fired every time as state changes, do Validataion, Live Search with http
    for (let propsName in changes) {
      console.log(`${propsName}
        currentVlaue: ${changes[propsName].currentValue}
        previousValue: ${changes[propsName].previousValue}
      
        `);
    }
  }
  //4
  ngDoCheck(): void {
    console.log(`Child Component ngDoCheck : ${this.search}`);
    //fired every time the change detection runs, used for custom change detection
    this.cd.detectChanges();
    if (this.search.length > 10) {
      console.log('Search is Ibrahim, performing custom logic');
      // this.cd.detectChanges(); // Manually trigger change detection
      // Perform custom logic here
    }
  }
  ngAfterViewChecked(): void {
    //Called after every check of the component's view. Applies to components only.
    //Add 'implements AfterViewChecked' to the class.
    // it will work with real dom manipulation
    console.log(`Child Component ngAfterViewChecked : ${this.search}`);
  }
  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    // handle cleanup, unsubscribe from observables, remove event listeners memeory leaks
    console.log(`Child Component ngOnDestroy : ${this.search}`);
  }
}
