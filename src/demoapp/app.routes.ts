import { provideRouter, RouterConfig } from '@angular/router';
import { ButtonDemoComponent } from './button/button.demo';
import { ExpandableAreaDemoComponent } from './expandablearea/expandablearea.demo';
import { IconDemoComponent } from './icon/icon.demo';
import { TreeServiceDemoComponent } from './tree/tree-service-demo.component';
import { TreeContentDemoComponent } from './tree/tree-content-demo.component';
import { TreeDynamicDemoComponent } from './tree/tree-dynamic-demo.component';

export const routes: RouterConfig = [
  { path: '',                component: ExpandableAreaDemoComponent }, // default
  { path: 'button',          component: ButtonDemoComponent },
  { path: 'expandablearea',  component: ExpandableAreaDemoComponent },
  { path: 'icon',            component: IconDemoComponent },
  { path: 'tree-dynamic',    component: TreeDynamicDemoComponent },
  { path: 'tree-service',    component: TreeServiceDemoComponent },
  { path: 'tree-content',    component: TreeContentDemoComponent },
  // { path: 'toolbar',         component: ToolbarSampleComponent},
  // { path: 'tabs-basic',      component: TabsBasicSampleComponent},
  // { path: 'tabs-datadriven', component: TabsDataDrivenSampleComponent},
  // { path: 'tabs-dynamic',    component: TabsDynamicSampleComponent},
  // { path: 'accordian',       component: AccordionSampleComponent},
  // { path: 'dropdown',        component: DropdownSampleComponent}
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];