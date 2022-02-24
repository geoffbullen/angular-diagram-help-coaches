import { EventEmitter, Component, OnInit, Output, ViewChild, ViewEncapsulation, Input, OnDestroy, HostBinding } from '@angular/core';
import { CardSettingsModel, DragEventArgs, SwimlaneSettingsModel, KanbanComponent, DialogEventArgs, ActionEventArgs } from '@syncfusion/ej2-angular-kanban';
import { kanbanData, kanbanConfig } from './data';
import { extend } from '@syncfusion/ej2-base';
import { BehaviorSubject, interval, Subject } from 'rxjs';
import { throttleTime } from 'rxjs/operators';

@Component({
  selector: 'app-kanban',
  templateUrl: './kanban.component.html',
  styleUrls: ['./kanban.component.scss', './kanban-card.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class KanbanAreaComponent implements OnInit, OnDestroy {

  @Output() onDropOutside: EventEmitter<any> = new EventEmitter();
  @Output() onDragStop: EventEmitter<any> = new EventEmitter();
  @Output() onDragStart: EventEmitter<any> = new EventEmitter();
  @Output() onKanbanDataChange: EventEmitter<any> = new EventEmitter();
  @Output() onKanbanConfigChange: EventEmitter<any> = new EventEmitter();
  @HostBinding("style.--kanban-color-dark-css") public kanbanColorDarkCssVar = '#1136f9b8';
  @HostBinding("style.--kanban-color-light-css") public kanbanColorLightCssVar = '#8396f6b8';
  @HostBinding("style.--kanban-row-height-css") public kanbanRowHeightCssVar;

  /** The reference to the syncfusion kanban component */
  @ViewChild('kanbanObj') kanbanObj: KanbanComponent;

  /** The kanban data */
  public kanbanData: Object[] = extend([], kanbanData, undefined, true) as Object[];

  log(val) { console.log(val); }

  public swimlaneSettings: SwimlaneSettingsModel = {
    textField: 'kanbanRowDescription',
    keyField: 'kanbanRowKey',
    allowDragAndDrop: true,
    showEmptyRow: true,
    showUnassignedRow: false,
    showItemCount: false,
    enableFrozenRows: true
  };

  /** The kanban configuration including column config */
  @Input() kanbanConfig: any = extend({}, kanbanConfig, undefined, true);
  public cardSettings: CardSettingsModel = {
    headerField: 'id',
  };
  public sortData: string[] = ['Ascending', 'Descending'];
  /**Used to identify which kanban */
  @Input() id: string = "dummy_id";
  /**pass in the card data on initialisation*/
  @Input() cardData;
  /**Need this or you can't drag card outside its boundary */
  public externalDropId: string[] = [this.id];

  constructor() { }
  ngOnInit(): void {}
  ngOnDestroy(): void {}


  onKanbanDragStop(args: DragEventArgs) {
    const e: MouseEvent | any = args.event;
    const dropTarget: any = e.target;
    // console.log('isWithin ' + this.id, dropTarget)
    const isWithinKanban = dropTarget.closest(`#${this.id}`) != undefined;
    const isDropOutside: boolean = dropTarget?.id !== undefined && !isWithinKanban;

    if (isDropOutside) {
      let dropPosition = { x: e.event.clientX, y: e.event.clientY };
      this.onDropOutside.emit({ pos: dropPosition, data: args.data[0] });
      this.kanbanObj.deleteCard(args.data[0]);
    }
  };

  /**
   * Add a new card to the kanban
   */
  addCard(colKey: string, jiraData: any, row) {
    // console.log('add card to columnKey ' + colKey, jiraData);
    if (!jiraData.id) jiraData.id = Date.now();
    jiraData[`${this.kanbanConfig.columnKeyField}`] = colKey;
    if (row.key) {
      jiraData[`kanbanRowKey`] = row.key;
      jiraData[`kanbanRowDescription`] = row.key;
    }
    const insertData: { [key: string]: Object }[] = [jiraData];
    this.kanbanObj.addCard(insertData, 0);
  }

 

  dragStop(args: any) {
    console.log('drag-stop', args);
    this.onDragStop.emit({ id: this.id })
  }

  drag(args: any) {
    // console.log('drag', args);
    // args.element.style.background = 'red';
    // args.element.style.color = 'red';
    // args.element.innerText = "X";
  }

  dragStart(args: any) {
    console.log('drag-start', args);
    this.onDragStart.emit({ id: this.id })
  }



  /* Prevent the default edit dialog opening */
  dialogOpen(args: DialogEventArgs): void {
    args.cancel = true;
  }



  /**
   * Set the light and dark colors
   */
  setColor(color) {
    this.kanbanColorDarkCssVar = color;
    this.kanbanColorLightCssVar = color;
  }

}


