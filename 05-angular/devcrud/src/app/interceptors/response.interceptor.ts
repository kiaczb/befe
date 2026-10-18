import { HttpErrorResponse, HttpInterceptorFn, HttpResponse } from "@angular/common/http"
import { inject } from "@angular/core"
import { catchError, tap, throwError } from "rxjs"
import { ToastService } from "../services/toast.service"
import { ApiResponse } from "../models/api-response"

export const responseInterceptor: HttpInterceptorFn = (req, next) => {

	const toastService = inject(ToastService)

	return next(req).pipe(
		tap(event => {
			if (event instanceof HttpResponse && req.method !== "GET") {
				const body = event.body as ApiResponse
				toastService.show("success", JSON.stringify(body))
			}
		}),

		catchError((error: HttpErrorResponse) => {
			const body = error.error as ApiResponse
			toastService.show("error", JSON.stringify(body))
			return throwError(() => error)
		})
	)
}