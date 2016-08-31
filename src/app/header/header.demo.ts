import { Component, HostBinding } from '@angular/core';
import { SohoButtonComponent } from '../../components/button';
import { SohoHeaderComponent } from '../../components/header';

@Component({
  selector: 'soho-header-demo',
  templateUrl: 'header.demo.html',
  directives: [ SohoHeaderComponent, SohoButtonComponent ]
})
export class SohoHeaderDemoComponent {
  @HostBinding('class.header') get isHeader() { return true; };
  @HostBinding('class.is-personalizable') get isPersonalizable() { return true; };
}