import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { AppEffects } from './+state/app.effects';
import { appReducer } from './+state/app.reducer';
import { APP_KEY } from './+state/app.state';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

@NgModule({
  imports: [
    StoreModule.forRoot({
      [APP_KEY]: appReducer
    }), 
    EffectsModule.forRoot([AppEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 25
      
  }),
  ],
  exports: [
    StoreModule,    
    EffectsModule
  ]
})
export class AppNgrxModule { }
