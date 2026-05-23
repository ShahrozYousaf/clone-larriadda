import { inject } from '@angular/core';
import { Router } from '@angular/router';
export const langGuard = (route) => {
    const router = inject(Router);
    const allowedLangs = ['no', 'en'];
    const lang = route.params['lang'];
    return allowedLangs.includes(lang)
        ? true
        : router.createUrlTree(['/no/home']);
};
