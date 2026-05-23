import { bootstrapApplication } from '@angular/platform-browser';
import { APP_CONFIG, appConfig } from './app/app.config';
import { App } from './app/app';
// bootstrapApplication(App, appConfig)
//   .catch((err) => console.error(err));
fetch('config.json')
    .then(res => res.json())
    .then(config => {
    bootstrapApplication(App, {
        ...appConfig,
        providers: [
            ...(appConfig.providers || []),
            {
                provide: APP_CONFIG,
                useValue: config
            }
        ]
    });
})
    .catch(err => console.error(err));
