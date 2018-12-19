import { TestService } from './../test.service';
import { Component, OnInit, HostListener, Renderer2, ViewChild, Input } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {
count: number = 0;
@Input('t') t;
@ViewChild('c') c;
  constructor(private testService: TestService,
    private renderer: Renderer2) { }
subject;
  ngOnInit() {
    this.subject = this.testService.listen().subscribe((result) => {
      console.debug(result);
      this.count++;
    });
  }

  ngOnDestroy(): void {
    this.subject.unsubsribe();
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.debug(changes)
  }

  @HostListener('mousedown', ['$event'])
  mousedown(e) {
    console.debug('klik', this.c);
    this.renderer.setStyle(this.c.nativeElement, 'color', 'red');
  }

}
