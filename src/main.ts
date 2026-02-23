// main.ts
import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient, withInterceptors } from '@angular/common/http'; // <- key import
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(
      // optional: add interceptors or features here
      // withInterceptors([yourInterceptor]),
    ),
  ],
}).catch(err => console.error(err));
