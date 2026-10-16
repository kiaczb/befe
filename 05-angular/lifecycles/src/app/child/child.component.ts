import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { StringContent } from '../string-content';

@Component({
  selector: 'app-child',
  standalone: false,
  templateUrl: './child.component.html',
  styleUrl: './child.component.sass'
})
export class ChildComponent implements OnChanges, OnInit, OnDestroy {
  @Input() content: StringContent = new StringContent()
  @Input() message: string = ""

  constructor() {
    console.log("Child constructor runs")
  }

	ngOnInit(): void {
		console.log("Child onInit runs")
	}

  ngOnChanges(changes: SimpleChanges): void {
		console.log("Child OnChanges runs")
  }

	ngOnDestroy(): void {
		console.log("Child onDestory runs")
	}
}
