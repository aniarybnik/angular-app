import { TestComponent } from './test/test.component';
import { TestService } from './test.service';
import { Component, OnInit, ViewChild, ViewChildren } from '@angular/core';
import { removeDebugNodeFromIndex } from '@angular/core/src/debug/debug_node';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Link123 } from './class_link';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Dodawanie linków';
  tytul: string;
  strona: string;
  links: Link123[] = [];
@ViewChildren(TestComponent) testComponent;
  form: FormGroup;
    constructor(private fb: FormBuilder, private testService: TestService) { }


    ngOnInit(): void {
      let a1 = [1, 2, 3, 4, 5];
      let a2 = [6, 7, 8, 9];

      a1 = a1.concat(a2);

      console.debug('array', a1);

      this.form = this.fb.group({
        title: ['', [Validators.required]],
        link: []
      });
    }

   dodaj() {
    //  if (this.form.valid) {
    //   let article = new Link123();
    //   article.link = this.form.get('link').value;
    //   article.title = this.form.get('title').value;
    //   this.links.push(article);
    //   this.form.reset();
    //  }
    this.testService.sendMessage();
  }

ngAfterViewInit() {
  console.debug(this.testComponent)
}
  plus(link: Link123) {
    link.point += 1;
  }

  minus(link: Link123) {
    link.point -= 1;
  }

  sort() {
    return this.links.sort((a, b) => {
      return b.point - a.point; // sort
      // return b.link.localeCompare(a.link);  sort string
    });
  }
}
