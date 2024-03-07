import { HttpInterceptorFn } from '@angular/common/http';
import { throwError  } from 'rxjs';
import { catchError } from 'rxjs/operators';
import {HttpErrorResponse} from '@angular/common/http';
import { Router } from '@angular/router';

export let errorInterceptor: HttpInterceptorFn;
errorInterceptor = (req, next) => {
  return next(req).pipe(catchError((error: HttpErrorResponse) => {

    const errorBody = error.error;
    console.error('Errores de validación:', errorBody);
    return throwError(errorBody);
  }));
}
