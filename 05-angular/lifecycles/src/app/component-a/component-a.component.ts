import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-component-a',
  standalone: false,
  templateUrl: './component-a.component.html',
  styleUrl: './component-a.component.sass'
})
export class ComponentAComponent implements OnInit, OnDestroy {
	private sub?: Subscription

	constructor(private http: HttpClient) {
    console.log("Comp A constructor runs")
  }

	ngOnInit(): void {
    console.log("Comp A OnInit runs")

		this.sub = this.http
			.get<any>("https://api.siposm.hu/word")
			.subscribe(x => console.log(x))
  }

  ngOnDestroy(): void {
    console.log("Comp A OnDestroy runs")

		// this.sub?.unsubscribe()

		// ^^^^
		// ha benn van: gyorsan átnavigálva másik komponensre (lassú hálózati kommunikáció)
		// a folyamatban lévő kérés eldobásra kerül
		// ha ki van kommentelve: hiába navigálunk át, a kérés lefut a háttérben (fölöslegesen)

		// FONTOS!
		// a http.get kérés, a kérés lezárultával VÉGET ÉR
		// (mindegy, hogy observable-ként van használva, vagy sem)
		// viszont, folyamatosan érkező kéréseknél (pl. interval(1000).subscribe(...) vagy websocket kapcsolat)
		// a kezeletlenül / lezáratlanul hagyott kapcsolatok okozhatnak problémát (memory leak)
  }
}
