import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, throwError } from 'rxjs';

export const responseErrorInterceptor: HttpInterceptorFn = (req, next) => {
  const router = inject(Router);

  return next(req).pipe(
    catchError((err: HttpErrorResponse) => {
      let errorMessage = '';

      if (err.error instanceof ErrorEvent) {
        errorMessage = `Error ${err.error.message}`;
      } else {
        errorMessage = `Error code ${err.status}, Message: ${err.message}`;
      }

      console.error(errorMessage);

      switch (err.status) {
        case 401:
          console.warn('Unauthorized access');
          localStorage.setItem('redirectUrl', router.url);
          localStorage.removeItem('token');
          router.navigate(['/auth/login']);
          break;
        case 404:
          console.warn('Not found - 404');
          break;
        case 500:
          console.warn('Internal server error');
          router.navigate(['/server-error']);
      }

      return throwError(() => new Error(errorMessage));
    })
  );
};
