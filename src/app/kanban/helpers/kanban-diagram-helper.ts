import { NodeModel } from "@syncfusion/ej2-angular-diagrams";
import { KanbanAreaComponent } from "../kanban.component";

export class KanbanDiagramEventHelper {

  /**
   * When a node is dragged onto a kanban we need to figure out where it belongs and drop it there
   */
  static onDropOnKanbanNode(args: any, diagramRef: any) {
    console.log('on-kanban-drop', args);
    if (!args.element) return;
    if (args?.element?.addInfo?.type === 'kanban') return;
    let nodes = args.element.nodes;
    if (!nodes) nodes = [args.element];

    //get the absolute window position of the drop so that we can find the element
    const rect: any = document.getElementById(nodes[0].id)?.getBoundingClientRect();
    const elementsAtDropPosition: any = document.elementsFromPoint(rect.x + 20, rect.y + 20);
    const elementAtDropPosition: any = elementsAtDropPosition.find(a => a.classList.contains('e-content-cells'));
    if (!elementAtDropPosition) return;
    const isDropOnKanban: boolean = elementAtDropPosition.closest('.e-content-row') && elementAtDropPosition.closest('.e-content-cells');
    console.log('isDropOnKanban', isDropOnKanban,elementAtDropPosition);
    if (isDropOnKanban) {
      // var swimLaneKey = elementsAtDropPosition.closest('.e-content-row')?.previousElementSibling.getAttribute('data-key');
      var keyField = elementAtDropPosition.closest('.e-content-cells')?.getAttribute('data-key');
      var colKeyField = elementAtDropPosition.closest('.e-content-cells')?.getAttribute('data-key');
      var swimlaneKey = elementAtDropPosition.closest('.e-content-row').previousElementSibling.getAttribute('data-key');
      console.log('swimlane-key', swimlaneKey);
      var row = {
        key: swimlaneKey
      }
      // console.log('get cell Id',elementsAtDropPosition.closest('.e-card'))
      console.log({ keyField });
      const kankanEl: KanbanAreaComponent | undefined = diagramRef.kanbanComponents.find((f: any) => f && f.id == args.target.id);

      if (kankanEl) {
        //add the nodes to the kanban
        nodes.forEach(async (node: NodeModel | any) => {
          let jiraData: any = node.addInfo.jiraData;
          if (!jiraData) {
            console.log('onDropOnKanbanNode no jira data, adding summary only');
            const isText: boolean = (node.shape.type == "Text");
            let summary: any = isText ? node.shape?.content : node.annotations[0]?.content;
            if (!summary) summary = "[EMPTY SUMMARY]";
            jiraData = {
              summary: summary
            };
          }
          kankanEl.addCard(keyField, jiraData, row);
        });
        diagramRef.diagram.remove();
      }
    }
  }

}