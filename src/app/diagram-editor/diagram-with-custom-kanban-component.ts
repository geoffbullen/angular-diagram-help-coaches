import { Component, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { DiagramComponent, ScrollSettingsModel } from '@syncfusion/ej2-angular-diagrams';
import {
  IDropEventArgs,
  NodeConstraints,
  NodeModel,
  ZoomOptions,
} from '@syncfusion/ej2-diagrams';
import { KanbanDiagramEventHelper } from '../kanban/helpers/kanban-diagram-helper';

import { KanbanAreaComponent } from '../kanban/kanban.component';
import { kanbanNode, node1, node2, palletes } from './data';
@Component({
  selector: 'diagram-custom-kanban',
  templateUrl: './diagram-with-custom-kanban-component.html',
  styleUrls: ['./diagram-editor.component.scss']
})
export class DiagramWithCustomKanbanComponent implements OnInit {

  @ViewChild('diagram') public diagram: DiagramComponent;
  
  @ViewChildren(KanbanAreaComponent) kanbanComponents: QueryList<KanbanAreaComponent>

  nodes: Array<NodeModel>;

  scrollSettings: ScrollSettingsModel = {
    scrollLimit: "Infinity",
  };
  pageSettings: {
    boundaryConstraints: 'Diagram'
  }

  palettes;

  constructor() { }

  ngOnInit(): void {
    this.palettes = palletes;
  }

  positionChangeEvent(args: any) { }

  /* when item dragged from diagram to kanban */
  public drop(args: IDropEventArgs | any) {
    KanbanDiagramEventHelper.onDropOnKanbanNode(args, this);
  }


  /** when item dragged from kanban onto diagram delet from kanban and create on diagram at mouse pos*/
  onDropFromKanban(args: any) {
    // console.log('drop',args);
    const convertFromMousePointToDiagramPoint = (mousePoint: { x, y }) => {
      const ss = this.diagram.scrollSettings;
      let vpTop = ss.verticalOffset * -1 / ss.currentZoom;
      let y = vpTop + (mousePoint.y / ss.currentZoom);
      let vpLeft = ss.horizontalOffset * -1 / ss.currentZoom;
      let x = vpLeft + (mousePoint.x / ss.currentZoom);
      return { x, y }
    }

    const point = convertFromMousePointToDiagramPoint(args.pos);
    this.diagram.add({
      width: 100,
      height: 100,
      offsetX: point.x,
      offsetY: point.y,
      addInfo: {jiraData: args.data },
      annotations: [{ content: args.data?.summary }],
      constraints: NodeConstraints.Default | NodeConstraints.AllowDrop
    });
  }

  onKanbanDragStart(args: any) {
    const kbNode: NodeModel | any = this.diagram.getObject(args.id);
    kbNode.constraints = (NodeConstraints.Default | NodeConstraints.AllowDrop) & ~(NodeConstraints.Rotate | NodeConstraints.Drag);
  }

  onKanbanDragStop(args: any) {
    const kbNode: NodeModel | any = this.diagram.getObject(args.id);
    kbNode.constraints = (NodeConstraints.Default | NodeConstraints.AllowDrop) & ~(NodeConstraints.Rotate); ``
  }


  onKanbanDataChange(args: any) {
    const kbNode: NodeModel | any = this.diagram.getObject(args.id);
  }

  onDiagramCreated() {
    console.log('diagram-created');
    this.nodes = [node1, node2, kanbanNode];
    this.diagram.zoomTo({
      type: "ZoomOut", zoomFactor: 1
    })
  }

}
