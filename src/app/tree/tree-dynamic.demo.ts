import {
  Component,
  ElementRef,
  ViewChild,
  AfterViewInit,
  ChangeDetectionStrategy
} from '@angular/core';

import { Subject } from 'rxjs/Subject';
/* tslint:disable */
import { Observable } from 'rxjs/Observable';
/* tslint:enable */

import {
  SohoTreeComponent,
  SohoTreeNode,
  SohoTreeEvent
} from '../../components/tree';

@Component({
  selector: 'tree-dynamic-demo',
  templateUrl: 'tree-dynamic.demo.html',
  directives: [SohoTreeComponent],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TreeDynamicDemoComponent implements AfterViewInit {

  private DATA: SohoTreeNode[] = [
    {
      'id': 'node1',
      'text': 'Data One',
      'open': false,
      'selected': false,
      'href': '/somelink/'
    }, {
      'id': 'node2',
      'text': 'Node Two',
      'open': true,
      'selected': true,
      'focus': true,
      'children': [
        {
          'id': 'node3',
          'text': 'Node 2.1'
        }, {
          'id': 'node4',
          'text': 'Node 2.2',
          'children': [
            {
              'id': 'node5',
              'text': 'Node 2.2.1',
              'icon': 'icon-tree-chart',
              'children': [
                {
                  'id': 'node6',
                  'text': 'Node 2.2.1.1',
                  'icon': 'icon-tree-chart'
                }
              ]
            }
          ]
        }
      ]
    }
  ];

  @ViewChild(SohoTreeComponent)
  tree: SohoTreeComponent;

  private subject = new Subject<SohoTreeNode[]>();

  private source = this.subject.asObservable();

  // Is this component enabled.
  enabled = true;

  selected: SohoTreeNode;

  get dataset() {
    return this.source;
  }

  constructor(private el: ElementRef) {}

  expandAll() {
    this.tree.expandAll();
  }

  collapseAll() {
    this.tree.collapseAll();
  }

  toggleEnabled(event: any) {
    if (this.enabled) {
      this.tree.disable();
      this.enabled = false;
    } else {
      this.tree.enable();
      this.enabled = true;
    }
  }

  selectRoot() {
    this.tree.setSelectedNode('/1');
  }

  addNode() {
    let tn: SohoTreeNode = { text: 'New Item 1.2', disabled: true };
    this.tree.addNode(tn, this.selected);
  }

  reset() {
    this.subject.next(this.DATA);
  }

  onSelected(treeEvent: SohoTreeEvent) {
    this.selected = treeEvent.data;
    console.log('Tree Event: ${this.selected}');
  }

  ngAfterViewInit() {
    this.reset();
  }

}