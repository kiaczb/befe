import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
	title = "devcrud"

	ngOnInit(): void {
		const media = window.matchMedia("(prefers-color-scheme: dark)")

		this.setTheme(media.matches)

		media.addEventListener("change", event => {
			this.setTheme(event.matches)
		})
	}

	setTheme(isDark: boolean): void {
		document.documentElement.setAttribute(
			"data-bs-theme",
			isDark ? "dark" : "light"
		)
	}
}
