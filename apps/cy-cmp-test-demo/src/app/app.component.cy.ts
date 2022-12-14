import { MountConfig, mount } from 'cypress/angular';
import { AppComponent } from './app.component';

describe(AppComponent.name, () => {
  const config: MountConfig<AppComponent> = {
    declarations: [],
    imports: [],
    providers: []
  }

  it('renders', () => {
     mount(AppComponent, config);
  })
})
