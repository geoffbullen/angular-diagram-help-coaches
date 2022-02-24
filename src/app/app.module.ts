import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import {
  DiagramModule,
  SymbolPaletteModule,
} from '@syncfusion/ej2-angular-diagrams';
import { KanbanModule } from '@syncfusion/ej2-angular-kanban';
import { KanbanAreaComponent } from './kanban/kanban.component';
import { DiagramWithCustomKanbanComponent } from './diagram-editor/diagram-with-custom-kanban-component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    DiagramModule,
    SymbolPaletteModule,
    KanbanModule,
  ],
  declarations: [
    AppComponent,
    KanbanAreaComponent,
    DiagramWithCustomKanbanComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
