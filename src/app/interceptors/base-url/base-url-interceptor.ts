import { HttpInterceptorFn } from '@angular/common/http';
import { environment } from '../../../environments/environment.development';

export const baseUrlInterceptor: HttpInterceptorFn = (req, next) => {
  if (req.url.startsWith('http://') || req.url.startsWith('https://')) {
    return next(req);
  }

  const baseApiUrl = environment.baseUrl;
  const url = req.url.startsWith('/') ? req.url.substring(1) : req.url;

  const apiUrl = req.clone({
    url: `${baseApiUrl}/${url}`,
  });

  return next(apiUrl);
};
