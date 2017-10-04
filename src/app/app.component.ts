import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import * as joint from 'jointjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {

  @ViewChild('wrapper')
  private jointWrapper: ElementRef;

  ngOnInit() {
    const graph = new joint.dia.Graph;
    const paper = new joint.dia.Paper({
      el: this.jointWrapper.nativeElement,
      width: 600,
      height: 200,
      model: graph,
      gridSize: 1
    });
    const rect = new joint.shapes.basic.Rect({
      position: { x: 100, y: 30 },
      size: { width: 100, height: 30 },
      attrs: { rect: { fill: 'blue' }, text: { text: 'box1', fill: 'white' } }
    });
    const rect2 = new joint.shapes.basic.Rect({
      position: { x: 400, y: 150 },
      size: { width: 100, height: 30},
      attrs: { rect: { fill: 'green'}, text: { text: 'box2', fill: 'black'} }
    });
    const rect3 = new joint.shapes.basic.Rect({
      position: { x: 200, y: 60 },
      size: { width: 100, height: 30},
      attrs: { rect: { fill: 'green'}, text: { text: 'box3', fill: 'black'} }
    });
    const link = new joint.dia.Link({
      source: { id: rect.id },
      target: { id: rect2.id }
    });
    const link2 = new joint.dia.Link({
      source: { id: rect2.id},
      target: { id: rect3.id}
    });
    graph.addCells([rect, rect2, rect3, link, link2]);
  }

}
