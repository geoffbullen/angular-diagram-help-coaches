import { NodeConstraints, NodeModel } from '@syncfusion/ej2-diagrams';

export let palletes = [
  {
    id: 'all',
    expanded: true,
    symbols: [
      {
        id: 'Text',
        shape: {
          type: 'Text',
          content: 'Text',
          palette: true,
        },
        style: {
          fill: 'transparent',
          textWrapping: 'WrapWithOverflow',
          color: 'rgba(0,0,0,0.8)',
          fontFamily: 'Comic Sans MS',
          fontSize: 11,
          textAlign: 'Center',
        },
      },
      {
        id: 'Sticky1',
        type: 'Sticky',
        shape: {
          type: 'Basic',
          shape: 'Rectangle',
        },
        style: {
          strokeWidth: 0,
          fill: 'rgb(255, 249, 177)',
        },
        addInfo: {
          type: 'sticky',
        },
        constraints: 6289398,
        shadow: {
          angle: 45,
          distance: 2,
          opacity: 0.7,
          color: 'grey',
        },
      },
      {
        id: 'Sticky2',
        type: 'Sticky',
        shape: {
          type: 'Basic',
          shape: 'Rectangle',
        },
        style: {
          strokeWidth: 0,
          fill: 'rgb(242, 71, 38)',
        },
        addInfo: {
          type: 'sticky',
        },
        constraints: 6289398,
        shadow: {
          angle: 45,
          distance: 2,
          opacity: 0.7,
          color: 'grey',
        },
      },
      {
        id: 'Sticky3',
        type: 'Sticky',
        shape: {
          type: 'Basic',
          shape: 'Rectangle',
        },
        style: {
          strokeWidth: 0,
          fill: 'rgb(230, 230, 230)',
        },
        addInfo: {
          type: 'sticky',
        },
        constraints: 6289398,
        shadow: {
          angle: 45,
          distance: 2,
          opacity: 0.7,
          color: 'grey',
        },
      },
      {
        id: 'Sticky4',
        type: 'Sticky',
        shape: {
          type: 'Basic',
          shape: 'Rectangle',
        },
        style: {
          strokeWidth: 0,
          fill: 'rgb(206, 231, 65)',
        },
        addInfo: {
          type: 'sticky',
        },
        constraints: 6289398,
        shadow: {
          angle: 45,
          distance: 2,
          opacity: 0.7,
          color: 'grey',
        },
      },
      {
        id: 'Rectangle',
        shape: {
          type: 'Basic',
          shape: 'Rectangle',
        },
      },
      {
        id: 'Ellipse',
        shape: {
          type: 'Basic',
          shape: 'Ellipse',
        },
      },
      {
        id: 'Diamond',
        shape: {
          type: 'Basic',
          shape: 'Diamond',
        },
      },
      {
        id: 'link33',
        type: 'Straight',
        sourcePoint: {
          x: 0,
          y: 0,
        },
        targetPoint: {
          x: 400,
          y: 400,
        },
        style: {
          strokeWidth: 2,
        },
        targetDecorator: {
          shape: 'None',
        },
      },
    ],
    iconCss: 'e-ddb-icons e-basic',
    width: '100%',
    height: '100%',
    symbolHeight: 50,
    symbolWidth: 50,
    symbolPreview: {
      height: 10,
      width: 100,
    },
    enableSearch: true,
    symbolMargin: {
      left: 12,
      right: 12,
      top: 12,
      bottom: 12,
    },
  },
];

export let kanbanNode: NodeModel = {
  addInfo: {
    type: 'kanban',
    cardData: [
      {
        id: '0001',
        summary: '0001 This is a thing of less than beauty',
        typeIconUrl:
          'https://wallsync-addons.atlassian.net/secure/viewavatar?size=medium&avatarId=10318&avatarType=issuetype',
        statusIconUrl: 'https://wallsync-addons.atlassian.net/',
        color: 'white',
        statusColor: 'lightgrey',
        priority: 'Low',
        key: 'NO-1068',
        status: 'Backlog',
        type: 'Task',
        assignee: 'Geoff Bullen',
        assigneeIconUrl:
          'https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:d42529a6-6ca8-4fbf-b56a-adfd66da25a7/60f6e919-8321-49c5-9980-8cbcf45627c1/16',
        priorityIconUrl:
          'https://wallsync-addons.atlassian.net/images/icons/priorities/low.svg',
      },
      {
        id: '0002',
        summary: '0002 This is a thing of less than beauty',
        typeIconUrl:
          'https://wallsync-addons.atlassian.net/secure/viewavatar?size=medium&avatarId=10318&avatarType=issuetype',
        statusIconUrl: 'https://wallsync-addons.atlassian.net/',
        color: 'white',
        statusColor: 'lightgrey',
        priority: 'Low',
        key: 'NO-1068',
        status: 'Backlog',
        type: 'Task',
        assignee: 'Geoff Bullen',
        assigneeIconUrl:
          'https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:d42529a6-6ca8-4fbf-b56a-adfd66da25a7/60f6e919-8321-49c5-9980-8cbcf45627c1/16',
        priorityIconUrl:
          'https://wallsync-addons.atlassian.net/images/icons/priorities/low.svg',
      },
      {
        id: '0003',
        summary: '0003 This is a thing of less than beauty',
        typeIconUrl:
          'https://wallsync-addons.atlassian.net/secure/viewavatar?size=medium&avatarId=10318&avatarType=issuetype',
        statusIconUrl: 'https://wallsync-addons.atlassian.net/',
        color: 'white',
        statusColor: 'lightgrey',
        priority: 'Low',
        key: 'NO-1068',
        status: 'Backlog',
        type: 'Task',
        assignee: 'Geoff Bullen',
        assigneeIconUrl:
          'https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:d42529a6-6ca8-4fbf-b56a-adfd66da25a7/60f6e919-8321-49c5-9980-8cbcf45627c1/16',
        priorityIconUrl:
          'https://wallsync-addons.atlassian.net/images/icons/priorities/low.svg',
      },
      {
        id: '0004',
        summary: '0004 This is a thing of less than beauty',
        typeIconUrl:
          'https://wallsync-addons.atlassian.net/secure/viewavatar?size=medium&avatarId=10318&avatarType=issuetype',
        statusIconUrl: 'https://wallsync-addons.atlassian.net/',
        color: 'white',
        statusColor: 'lightgrey',
        priority: 'Low',
        key: 'NO-1068',
        status: 'Backlog',
        type: 'Task',
        assignee: 'Geoff Bullen',
        assigneeIconUrl:
          'https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:d42529a6-6ca8-4fbf-b56a-adfd66da25a7/60f6e919-8321-49c5-9980-8cbcf45627c1/16',
        priorityIconUrl:
          'https://wallsync-addons.atlassian.net/images/icons/priorities/low.svg',
      },
      {
        id: '0005',
        summary: '0005 This is a thing of less than beauty',
        typeIconUrl:
          'https://wallsync-addons.atlassian.net/secure/viewavatar?size=medium&avatarId=10318&avatarType=issuetype',
        statusIconUrl: 'https://wallsync-addons.atlassian.net/',
        color: 'white',
        statusColor: 'lightgrey',
        priority: 'High',
        key: 'NO-1068',
        status: 'Backlog',
        type: 'Task',
        assignee: 'John Smith',
        assigneeIconUrl:
          'https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:d42529a6-6ca8-4fbf-b56a-adfd66da25a7/60f6e919-8321-49c5-9980-8cbcf45627c1/16',
        priorityIconUrl:
          'https://wallsync-addons.atlassian.net/images/icons/priorities/low.svg',
      },
      {
        id: '0006',
        summary: '0006 This is a thing of less than beauty',
        typeIconUrl:
          'https://wallsync-addons.atlassian.net/secure/viewavatar?size=medium&avatarId=10318&avatarType=issuetype',
        statusIconUrl: 'https://wallsync-addons.atlassian.net/',
        color: 'white',
        statusColor: 'lightgrey',
        priority: 'High',
        key: 'NO-1068',
        status: 'Backlog',
        type: 'Task',
        assignee: 'John Smith',
        assigneeIconUrl:
          'https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:d42529a6-6ca8-4fbf-b56a-adfd66da25a7/60f6e919-8321-49c5-9980-8cbcf45627c1/16',
        priorityIconUrl:
          'https://wallsync-addons.atlassian.net/images/icons/priorities/low.svg',
      },
      {
        id: '0007',
        summary: '0007 This is a thing of less than beauty',
        typeIconUrl:
          'https://wallsync-addons.atlassian.net/secure/viewavatar?size=medium&avatarId=10318&avatarType=issuetype',
        statusIconUrl: 'https://wallsync-addons.atlassian.net/',
        color: 'white',
        statusColor: 'lightgrey',
        priority: 'Low',
        key: 'NO-1068',
        status: 'Backlog',
        type: 'Task',
        assignee: 'John Smith',
        assigneeIconUrl:
          'https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:d42529a6-6ca8-4fbf-b56a-adfd66da25a7/60f6e919-8321-49c5-9980-8cbcf45627c1/16',
        priorityIconUrl:
          'https://wallsync-addons.atlassian.net/images/icons/priorities/low.svg',
      },
      {
        id: '0008',
        summary: '0008 This is a thing of less than beauty',
        typeIconUrl:
          'https://wallsync-addons.atlassian.net/secure/viewavatar?size=medium&avatarId=10318&avatarType=issuetype',
        statusIconUrl: 'https://wallsync-addons.atlassian.net/',
        color: 'white',
        statusColor: 'lightgrey',
        priority: 'Lowest',
        key: 'NO-1068',
        status: 'Backlog',
        type: 'Task',
        assignee: 'John Smith',
        assigneeIconUrl:
          'https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:d42529a6-6ca8-4fbf-b56a-adfd66da25a7/60f6e919-8321-49c5-9980-8cbcf45627c1/16',
        priorityIconUrl:
          'https://wallsync-addons.atlassian.net/images/icons/priorities/low.svg',
      },
    ],
  },
  id: 'kanban_0001',
  offsetX: 1000,
  offsetY: 300,
  width: 1200,
  height: 1230,
  shape: { type: 'HTML' },
  constraints:
    (NodeConstraints.Default | NodeConstraints.AllowDrop) &
    ~NodeConstraints.Rotate,
};

export let node1: NodeModel = {
  addInfo: {
    type: 'sticky',
    jiraData: {
      typeIconUrl:
        'https://wallsync-addons.atlassian.net/secure/viewavatar?size=medium&avatarId=10318&avatarType=issuetype',
      summary: 'This is a thing of less than beauty',
      statusIconUrl: 'https://wallsync-addons.atlassian.net/',
      color: 'white',
      statusColor: 'lightgrey',
      priority: 'Low',
      key: 'NO-1068',
      status: 'Backlog',
      type: 'Task',
      assignee: 'Geoff Bullen',
      assigneeIconUrl:
        'https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:d42529a6-6ca8-4fbf-b56a-adfd66da25a7/60f6e919-8321-49c5-9980-8cbcf45627c1/16',
      priorityIconUrl:
        'https://wallsync-addons.atlassian.net/images/icons/priorities/low.svg',
    },
  },
  annotations: [{ content: 'This is a thing of less than beauty' }],
  id: `XXX`,
  width: 100,
  offsetX: 200,
  offsetY: 100,
  height: 100,
  shape: {
    type: 'Basic',
  },
  style: {
    textWrapping: 'WrapWithOverflow',
    textAlign: 'Left',
    color: 'rgba(0,0,0,0.6)',
    fontFamily: 'Comic Sans MS',
    fontSize: 20,
  },
  constraints: NodeConstraints.Default | NodeConstraints.AllowDrop,
};
export let node2: NodeModel = {
  id: `XXXYYY`,
  width: 100,
  offsetX: 200,
  offsetY: 300,
  height: 100,
  addInfo: {
    type: 'sticky',
    jiraData: {
      typeIconUrl:
        'https://wallsync-addons.atlassian.net/secure/viewavatar?size=medium&avatarId=10318&avatarType=issuetype',
      summary: 'This is a thing of less than beauty',
      statusIconUrl: 'https://wallsync-addons.atlassian.net/',
      color: 'white',
      statusColor: 'lightgrey',
      priority: 'Low',
      key: 'NO-1068',
      status: 'Backlog',
      type: 'Task',
      assignee: 'Geoff Bullen',
      assigneeIconUrl:
        'https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:d42529a6-6ca8-4fbf-b56a-adfd66da25a7/60f6e919-8321-49c5-9980-8cbcf45627c1/16',
      priorityIconUrl:
        'https://wallsync-addons.atlassian.net/images/icons/priorities/low.svg',
    },
  },
  annotations: [{ content: 'This is a thing of less than beauty' }],
  shape: {
    type: 'Basic',
  },
  style: {
    textWrapping: 'WrapWithOverflow',
    textAlign: 'Left',
    color: 'rgba(0,0,0,0.6)',
    fontFamily: 'Comic Sans MS',
    fontSize: 20,
  },
  constraints: NodeConstraints.Default | NodeConstraints.AllowDrop,
};
