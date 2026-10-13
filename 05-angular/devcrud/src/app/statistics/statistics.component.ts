import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Developer } from '../models/developer';
import { first, map, Observable } from 'rxjs';

@Component({
  selector: 'app-statistics',
  standalone: false,
  templateUrl: './statistics.component.html',
  styleUrl: './statistics.component.css'
})
export class StatisticsComponent implements OnChanges {

	@Input() developers$!: Observable<Developer[]>

	averageSalary$!: Observable<number>
	developerCount$!: Observable<number>
	highestSalary$!: Observable<number>
	mostSkilledDeveloper$!: Observable<Developer | undefined>

	ngOnChanges(changes: SimpleChanges): void { // ! [1]
		if (changes["developers$"]) {
			this.calculateAverageSalary()
			this.calculateDeveloperCount()
			this.calculateHighestSalary()
			this.calculateMostSkilledDeveloper()
		}
	}

	calculateAverageSalary(): void {
		this.averageSalary$ = this.developers$.pipe(
			map(developers => {
				if (developers.length === 0) return 0
				let sum = developers.reduce((acc, developer) => acc + developer.salary!, 0)
				return sum / developers.length
			})
		)
	}

	calculateDeveloperCount(): void {
		this.developerCount$ = this.developers$.pipe(
			map(developers => developers.length)
		)
	}

	calculateHighestSalary(): void {
		this.highestSalary$ = this.developers$.pipe(
			map(developers =>
				Math.max(...developers.map(x => x.salary!)) // ! [2]
			)
		)
	}

	calculateMostSkilledDeveloper(): void {
		this.mostSkilledDeveloper$ = this.developers$.pipe(
			map(developers => {
				if (developers.length === 0) return undefined

				return developers.reduce((max, developer) =>
					developer.skills.length > max.skills.length
						? developer
						: max
				)
			})
		)
	}

	// [1]
	// az ngOnChanges nem azért kell, mert maga az Observable minden új kibocsátásakor lefutna (nem fut le)
	// az ngOnChanges akkor fut, amikor az inputként kapott Observable referencia megváltozik
	//
	// emiatt az ngOnInit első híváskor jó lenne (input az onInit előtt már be van állítva),
	// viszont később ha változik futáskor akkor arra már nem reagálna a stats komponens

	// [2]
	// SPREAD operátor = szétszórás
	// const copy = [...array]  // elemek szétszórása egy ÚJ tömbbe -> másolat use-case
	// const obj2 = { ...obj1 } // property-k szétszórása egy ÚJ objektumba -> másolat use-case
	// fn(...array)             // elemek szétszórása argumentumokká a fgv hívásakor pl. fn([1,2,3]) => fn(1,2,3)
	//
	// REST operátor = összegyűjtés
	// function fn(...args)		  // elemek összegyűjtése fgv definíciójában pl. (1,2,3) => [1,2,3]
}
