import { inject } from '@angular/core';
import { CanActivateFn, Router, UrlTree } from '@angular/router';

export const langGuard: CanActivateFn = (route): boolean | UrlTree => {
  const router = inject(Router);
  const allowedLangs = ['no', 'en'];
  const lang = route.params['lang'];

  return allowedLangs.includes(lang)
    ? true
    : router.createUrlTree(['/no/home']);
};
