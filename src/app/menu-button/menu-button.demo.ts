import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'soho-menu-button-demo',
  templateUrl: './menu-button.demo.html',
})
export class MenuButtonDemoComponent implements OnInit {

  private menuButtons: Array<any>;

  disabledEntryClicked() {
    alert('Should not be Allowed');
  }

  @HostListener('selected', ['$event'])
  onSelected() {
    console.log('onSelected');
  }

  onBeforeopen() {
    console.log('onBeforeopen');
  }

  onClose() {
    console.log('onClose');
  }

  onOpen() {
    console.log('onOpen');
  }

  ngOnInit() {
    this.menuButtons = [
      {
        label: 'Add',
        icon: 'add',
        menu: [
          { label: 'action one' },
          { label: 'action two' }
        ]
      },
      {
        label: 'Copy',
        icon: 'copy',
        menu: [
          { label: 'action one' },
          { label: 'action two' }
        ]
      }
    ];
  }
}
