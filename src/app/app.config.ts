import { ApplicationConfig, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideState, provideStore } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { authFeatureKey, authReducer } from './store/auth.reducer';
import { provideHttpClient } from '@angular/common/http';
import { provideEffects } from '@ngrx/effects';
import * as authEffects from './store/auth.effects';

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(),
    provideRouter(routes),
    provideClientHydration(),
    provideStore(),
    provideState(authFeatureKey, authReducer),
    provideStoreDevtools({
        maxAge: 25,
        logOnly: !isDevMode(),
        autoPause: true,
        trace: false,
        traceLimit: 75,
    }),
    provideEffects(authEffects)
],
};
