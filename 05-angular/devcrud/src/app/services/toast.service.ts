import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  title?: string
  message?: string

	show(title: string, message: string): void {
		this.title = title
		this.message = message

		setTimeout(() => {
			this.title = undefined
			this.message = undefined
		}, 5000)
	}

	hide(): void {
		this.title = undefined
		this.message = undefined
	}
}
