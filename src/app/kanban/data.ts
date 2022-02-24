/**
 * Kanban datasource
 */

export let kanbanConfig = {
    "description": "Prioritisation board",
    "columnKeyField": "kanbanColumnKey",
    "color": "#1136f9b8",
    "columns": [
        {
            "conditions": [
                {
                    "displayText": "priority: 'Highest'",
                    "conditionUpdateData": {
                        "priorityName": "Highest"
                    }
                },
                {
                    "displayText": "type: 'Story'",
                    "conditionUpdateData": {
                        "type": "Story"
                    }
                }
            ],
            "headerText": "EPIC-0001 This is the best thing in the world ever I tell you!",
            "keyField": "Highest"
        },
        {
            "conditions": [
                {
                    "conditionUpdateData": {
                        "priorityName": "High"
                    },
                    "displayText": "priority: 'High'"
                }
            ],
            "keyField": "High",
            "headerText": "High"
        },
        {
            "conditions": [
                {
                    "conditionUpdateData": {
                        "priorityName": "Medium"
                    },
                    "displayText": "priority: 'Medium'"
                }
            ],
            "keyField": "Medium",
            "headerText": "Medium"
        },
        {
            "conditions": [
                {
                    "displayText": "priority: 'Low'",
                    "conditionUpdateData": {
                        "priorityName": "Low"
                    }
                }
            ],
            "headerText": "Low",
            "keyField": "Low"
        },
        {
            "headerText": "Lowest",
            "conditions": [
                {
                    "displayText": "priority: 'Lowest'",
                    "conditionUpdateData": {
                        "priorityName": "Lowest"
                    }
                }
            ],
            "keyField": "Lowest"
        }
    ],
    rows: [
        {
            "headerText": "Row_Story",
            "keyField": "CustomKanbanRow_1",
            "conditions": [
                {
                    "displayText": "type: 'Story'",
                    "conditionUpdateData": {
                        "type": "Story"
                    }
                }
            ]
        },
        {
            "headerText": "Row_Task",
            "keyField": "CustomKanbanRow_2",
            "conditions": [
                {
                    "displayText": "type: 'Task'",
                    "conditionUpdateData": {
                        "type": "Task"
                    }
                }
            ]
        }
    ]
}

export let kanbanData: Object[] = [
    {
        id: 'task-one',
        assignee: "Geoff Bullen",
        assigneeIconUrl: "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:d42529a6-6ca8-4fbf-b56a-adfd66da25a7/60f6e919-8321-49c5-9980-8cbcf45627c1/16",
        color: "white",
        key: "NO-1068",
        kanbanColumnKey: "Low",
        kanbanRowKey : "CustomKanbanRow_1",
        kanbanRowDescription : "CustomKanbanRow_2 Description",
        priority: "High",
        priorityIconUrl: "https://wallsync-addons.atlassian.net/images/icons/priorities/low.svg",
        status: "Backlog",
        statusColor: "lightgrey",
        statusIconUrl: "https://wallsync-addons.atlassian.net/",
        type: "Task",
        typeIconUrl: "https://wallsync-addons.atlassian.net/secure/viewavatar?size=medium&avatarId=10318&avatarType=issuetype",
        summary: 'Analyze the new requirements gathered from the customer.',
        cardFooterClassList: 'e-story, e-low, e-nancy-davloio'

    },
    {

        id: 'task-two',
        "color": "white",
        "summary": "Two",
        "key": "NO-984",
        "priority": "Low",
        kanbanColumnKey: "Low",
        kanbanRowDescription : "CustomKanbanRow_2 Description",
        kanbanRowKey : "CustomKanbanRow_1",
        "priorityIconUrl": "https://wallsync-addons.atlassian.net/images/icons/priorities/low.svg",
        "assigneeIconUrl": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:d42529a6-6ca8-4fbf-b56a-adfd66da25a7/60f6e919-8321-49c5-9980-8cbcf45627c1/16",
        "statusIconUrl": "https://wallsync-addons.atlassian.net/",
        "typeIconUrl": "https://wallsync-addons.atlassian.net/secure/viewavatar?size=medium&avatarId=10318&avatarType=issuetype",
        "status": "Backlog",
        "assignee": "Geoff Bullen",
        "type": "Task",
        "statusColor": "lightgrey",
        cardFooterClassList: 'e-bug, e-high, e-nancy-davloio'
    },
    {
        id: 'task-three',
        assignee: "Geoff Bullen",
        assigneeIconUrl: "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:d42529a6-6ca8-4fbf-b56a-adfd66da25a7/60f6e919-8321-49c5-9980-8cbcf45627c1/16",
        color: "white",
        key: "NO-1099",
        kanbanColumnKey: "Low",
        kanbanRowDescription : "CustomKanbanRow_2 Description",
        priorityIconUrl: "https://wallsync-addons.atlassian.net/images/icons/priorities/low.svg",
        status: "Backlog",
        statusColor: "lightgrey",
        statusIconUrl: "https://wallsync-addons.atlassian.net/",
        type: "Task",
        typeIconUrl: "https://wallsync-addons.atlassian.net/secure/viewavatar?size=medium&avatarId=10318&avatarType=issuetype",
        summary: 'Analyze the new requirements gathered from the customer.',
        cardFooterClassList: 'e-story, e-low, e-nancy-davloio'

    },
    {
        id: 'task-four',
        kanbanColumnKey: "DO_NOT_DISPLAY",
        kanbanRowKey : "CustomKanbanRow_2",
        kanbanRowDescription : "CustomKanbanRow_2 Description"
    }
    //   {

    //     id:'task-two',
    //     "color": "white",
    //     "summary": "Two",
    //     "key": "NO-984",
    //     "priority": "Low",
    //     "priorityIconUrl": "https://wallsync-addons.atlassian.net/images/icons/priorities/low.svg",
    //     "assigneeIconUrl": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:d42529a6-6ca8-4fbf-b56a-adfd66da25a7/60f6e919-8321-49c5-9980-8cbcf45627c1/16",
    //     "statusIconUrl": "https://wallsync-addons.atlassian.net/",
    //     "typeIconUrl": "https://wallsync-addons.atlassian.net/secure/viewavatar?size=medium&avatarId=10318&avatarType=issuetype",
    //     "status": "Backlog",
    //     "assignee": "Geoff Bullen",
    //     "type": "Task",
    //     "statusColor": "lightgrey",
    //     cardFooterClassList: 'e-bug, e-high, e-nancy-davloio'
    //   },
    //   {
    //     id:'task-one',
    //     assignee: "Geoff Bullen",
    //     assigneeIconUrl: "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:d42529a6-6ca8-4fbf-b56a-adfd66da25a7/60f6e919-8321-49c5-9980-8cbcf45627c1/16",
    //     color: "white",
    //     key: "NO-1068",
    //     kanbanColumnKey: "Low",
    //     priorityIconUrl: "https://wallsync-addons.atlassian.net/images/icons/priorities/low.svg",
    //     status: "Backlog",
    //     statusColor: "lightgrey",
    //     statusIconUrl: "https://wallsync-addons.atlassian.net/",
    //     type: "Task",
    //     typeIconUrl: "https://wallsync-addons.atlassian.net/secure/viewavatar?size=medium&avatarId=10318&avatarType=issuetype",
    //     summary: 'Analyze the new requirements gathered from the customer.',
    //     cardFooterClassList: 'e-story, e-low, e-nancy-davloio'

    //   },
    //   {

    //     id:'task-two',
    //     "color": "white",
    //     "summary": "Two",
    //     "key": "NO-984",
    //     "priority": "Low",
    //     "priorityIconUrl": "https://wallsync-addons.atlassian.net/images/icons/priorities/low.svg",
    //     "assigneeIconUrl": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:d42529a6-6ca8-4fbf-b56a-adfd66da25a7/60f6e919-8321-49c5-9980-8cbcf45627c1/16",
    //     "statusIconUrl": "https://wallsync-addons.atlassian.net/",
    //     "typeIconUrl": "https://wallsync-addons.atlassian.net/secure/viewavatar?size=medium&avatarId=10318&avatarType=issuetype",
    //     "status": "Backlog",
    //     "assignee": "Geoff Bullen",
    //     "type": "Task",
    //     "statusColor": "lightgrey",
    //     cardFooterClassList: 'e-bug, e-high, e-nancy-davloio'
    //   },
    //   {
    //     id:'task-one',
    //     assignee: "Geoff Bullen",
    //     assigneeIconUrl: "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:d42529a6-6ca8-4fbf-b56a-adfd66da25a7/60f6e919-8321-49c5-9980-8cbcf45627c1/16",
    //     color: "white",
    //     key: "NO-1068",
    //     kanbanColumnKey: "Low",
    //     priorityIconUrl: "https://wallsync-addons.atlassian.net/images/icons/priorities/low.svg",
    //     status: "Backlog",
    //     statusColor: "lightgrey",
    //     statusIconUrl: "https://wallsync-addons.atlassian.net/",
    //     type: "Task",
    //     typeIconUrl: "https://wallsync-addons.atlassian.net/secure/viewavatar?size=medium&avatarId=10318&avatarType=issuetype",
    //     summary: 'Analyze the new requirements gathered from the customer.',
    //     cardFooterClassList: 'e-story, e-low, e-nancy-davloio'

    //   },
    //   {

    //     id:'task-two',
    //     "color": "white",
    //     "summary": "Two",
    //     "key": "NO-984",
    //     "priority": "Low",
    //     "priorityIconUrl": "https://wallsync-addons.atlassian.net/images/icons/priorities/low.svg",
    //     "assigneeIconUrl": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:d42529a6-6ca8-4fbf-b56a-adfd66da25a7/60f6e919-8321-49c5-9980-8cbcf45627c1/16",
    //     "statusIconUrl": "https://wallsync-addons.atlassian.net/",
    //     "typeIconUrl": "https://wallsync-addons.atlassian.net/secure/viewavatar?size=medium&avatarId=10318&avatarType=issuetype",
    //     "status": "Backlog",
    //     "assignee": "Geoff Bullen",
    //     "type": "Task",
    //     "statusColor": "lightgrey",
    //     cardFooterClassList: 'e-bug, e-high, e-nancy-davloio'
    //   },
    //   {
    //     id:'task-one',
    //     assignee: "Geoff Bullen",
    //     assigneeIconUrl: "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:d42529a6-6ca8-4fbf-b56a-adfd66da25a7/60f6e919-8321-49c5-9980-8cbcf45627c1/16",
    //     color: "white",
    //     key: "NO-1068",
    //     kanbanColumnKey: "Low",
    //     priorityIconUrl: "https://wallsync-addons.atlassian.net/images/icons/priorities/low.svg",
    //     status: "Backlog",
    //     statusColor: "lightgrey",
    //     statusIconUrl: "https://wallsync-addons.atlassian.net/",
    //     type: "Task",
    //     typeIconUrl: "https://wallsync-addons.atlassian.net/secure/viewavatar?size=medium&avatarId=10318&avatarType=issuetype",
    //     summary: 'Analyze the new requirements gathered from the customer.',
    //     cardFooterClassList: 'e-story, e-low, e-nancy-davloio'

    //   },
    //   {

    //     id:'task-two',
    //     "color": "white",
    //     "summary": "Two",
    //     "key": "NO-984",
    //     "priority": "Low",
    //     "priorityIconUrl": "https://wallsync-addons.atlassian.net/images/icons/priorities/low.svg",
    //     "assigneeIconUrl": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:d42529a6-6ca8-4fbf-b56a-adfd66da25a7/60f6e919-8321-49c5-9980-8cbcf45627c1/16",
    //     "statusIconUrl": "https://wallsync-addons.atlassian.net/",
    //     "typeIconUrl": "https://wallsync-addons.atlassian.net/secure/viewavatar?size=medium&avatarId=10318&avatarType=issuetype",
    //     "status": "Backlog",
    //     "assignee": "Geoff Bullen",
    //     "type": "Task",
    //     "statusColor": "lightgrey",
    //     cardFooterClassList: 'e-bug, e-high, e-nancy-davloio'
    //   },
    //   {
    //     id:'task-one',
    //     assignee: "Geoff Bullen",
    //     assigneeIconUrl: "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:d42529a6-6ca8-4fbf-b56a-adfd66da25a7/60f6e919-8321-49c5-9980-8cbcf45627c1/16",
    //     color: "white",
    //     key: "NO-1068",
    //     kanbanColumnKey: "Low",
    //     priorityIconUrl: "https://wallsync-addons.atlassian.net/images/icons/priorities/low.svg",
    //     status: "Backlog",
    //     statusColor: "lightgrey",
    //     statusIconUrl: "https://wallsync-addons.atlassian.net/",
    //     type: "Task",
    //     typeIconUrl: "https://wallsync-addons.atlassian.net/secure/viewavatar?size=medium&avatarId=10318&avatarType=issuetype",
    //     summary: 'Analyze the new requirements gathered from the customer.',
    //     cardFooterClassList: 'e-story, e-low, e-nancy-davloio'

    //   },
    //   {

    //     id:'task-two',
    //     "color": "white",
    //     "summary": "Two",
    //     "key": "NO-984",
    //     "priority": "Low",
    //     "priorityIconUrl": "https://wallsync-addons.atlassian.net/images/icons/priorities/low.svg",
    //     "assigneeIconUrl": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:d42529a6-6ca8-4fbf-b56a-adfd66da25a7/60f6e919-8321-49c5-9980-8cbcf45627c1/16",
    //     "statusIconUrl": "https://wallsync-addons.atlassian.net/",
    //     "typeIconUrl": "https://wallsync-addons.atlassian.net/secure/viewavatar?size=medium&avatarId=10318&avatarType=issuetype",
    //     "status": "Backlog",
    //     "assignee": "Geoff Bullen",
    //     "type": "Task",
    //     "statusColor": "lightgrey",
    //     cardFooterClassList: 'e-bug, e-high, e-nancy-davloio'
    //   },
    //   {
    //     id:'task-one',
    //     assignee: "Geoff Bullen",
    //     assigneeIconUrl: "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:d42529a6-6ca8-4fbf-b56a-adfd66da25a7/60f6e919-8321-49c5-9980-8cbcf45627c1/16",
    //     color: "white",
    //     key: "NO-1068",
    //     kanbanColumnKey: "Low",
    //     priorityIconUrl: "https://wallsync-addons.atlassian.net/images/icons/priorities/low.svg",
    //     status: "Backlog",
    //     statusColor: "lightgrey",
    //     statusIconUrl: "https://wallsync-addons.atlassian.net/",
    //     type: "Task",
    //     typeIconUrl: "https://wallsync-addons.atlassian.net/secure/viewavatar?size=medium&avatarId=10318&avatarType=issuetype",
    //     summary: 'Analyze the new requirements gathered from the customer.',
    //     cardFooterClassList: 'e-story, e-low, e-nancy-davloio'

    //   },
    //   {

    //     id:'task-two',
    //     "color": "white",
    //     "summary": "Two",
    //     "key": "NO-984",
    //     "priority": "Low",
    //     "priorityIconUrl": "https://wallsync-addons.atlassian.net/images/icons/priorities/low.svg",
    //     "assigneeIconUrl": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:d42529a6-6ca8-4fbf-b56a-adfd66da25a7/60f6e919-8321-49c5-9980-8cbcf45627c1/16",
    //     "statusIconUrl": "https://wallsync-addons.atlassian.net/",
    //     "typeIconUrl": "https://wallsync-addons.atlassian.net/secure/viewavatar?size=medium&avatarId=10318&avatarType=issuetype",
    //     "status": "Backlog",
    //     "assignee": "Geoff Bullen",
    //     "type": "Task",
    //     "statusColor": "lightgrey",
    //     cardFooterClassList: 'e-bug, e-high, e-nancy-davloio'
    //   },
    //   {
    //     id:'task-one',
    //     assignee: "Geoff Bullen",
    //     assigneeIconUrl: "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:d42529a6-6ca8-4fbf-b56a-adfd66da25a7/60f6e919-8321-49c5-9980-8cbcf45627c1/16",
    //     color: "white",
    //     key: "NO-1068",
    //     kanbanColumnKey: "Low",
    //     priorityIconUrl: "https://wallsync-addons.atlassian.net/images/icons/priorities/low.svg",
    //     status: "Backlog",
    //     statusColor: "lightgrey",
    //     statusIconUrl: "https://wallsync-addons.atlassian.net/",
    //     type: "Task",
    //     typeIconUrl: "https://wallsync-addons.atlassian.net/secure/viewavatar?size=medium&avatarId=10318&avatarType=issuetype",
    //     summary: 'Analyze the new requirements gathered from the customer.',
    //     cardFooterClassList: 'e-story, e-low, e-nancy-davloio'

    //   },
    //   {

    //     id:'task-two',
    //     "color": "white",
    //     "summary": "Two",
    //     "key": "NO-984",
    //     "priority": "Low",
    //     "priorityIconUrl": "https://wallsync-addons.atlassian.net/images/icons/priorities/low.svg",
    //     "assigneeIconUrl": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:d42529a6-6ca8-4fbf-b56a-adfd66da25a7/60f6e919-8321-49c5-9980-8cbcf45627c1/16",
    //     "statusIconUrl": "https://wallsync-addons.atlassian.net/",
    //     "typeIconUrl": "https://wallsync-addons.atlassian.net/secure/viewavatar?size=medium&avatarId=10318&avatarType=issuetype",
    //     "status": "Backlog",
    //     "assignee": "Geoff Bullen",
    //     "type": "Task",
    //     "statusColor": "lightgrey",
    //     cardFooterClassList: 'e-bug, e-high, e-nancy-davloio'
    //   }
    // ]

    // export let kanbanData2: Object[] = [{
    //   'Id': 'Task 1',
    //   'Title': 'Task - 29001',
    //   'Status': 'Open',
    //   'Summary': 'Analyze the new requirements gathered from the customer.',
    //   'Type': 'Story',
    //   'Priority': 'Low',
    //   'Tags': 'Analyze,Customer',
    //   'Estimate': 3.5,
    //   'Assignee': 'Nancy Davloio',
    //   'RankId': 1,
    //   'Color': '#02897B',
    //   'ClassName': 'e-story, e-low, e-nancy-davloio'
    // },
    // {
    //   'Id': 'Task 2',
    //   'Title': 'Task - 29002',
    //   'Status': 'InProgress',
    //   'Summary': 'Improve application performance',
    //   'Type': 'Improvement',
    //   'Priority': 'Normal',
    //   'Tags': 'Improvement',
    //   'Estimate': 6,
    //   'Assignee': 'Andrew Fuller',
    //   'RankId': 1,
    //   'Color': '#673AB8',
    //   'ClassName': 'e-improvement, e-normal, e-andrew-fuller'
    // },
    // {
    //   'Id': 'Task 3',
    //   'Title': 'Task - 29003',
    //   'Status': 'Open',
    //   'Summary': 'Arrange a web meeting with the customer to get new requirements.',
    //   'Type': 'Others',
    //   'Priority': 'Critical',
    //   'Tags': 'Meeting',
    //   'Estimate': 5.5,
    //   'Assignee': 'Janet Leverling',
    //   'RankId': 2,
    //   'Color': '#1F88E5',
    //   'ClassName': 'e-others, e-critical, e-janet-leverling'
    // },
    // {
    //   'Id': 'Task 4',
    //   'Title': 'Task - 29004',
    //   'Status': 'InProgress',
    //   'Summary': 'Fix the issues reported in the IE browser.',
    //   'Type': 'Bug',
    //   'Priority': 'Critical',
    //   'Tags': 'IE',
    //   'Estimate': 2.5,
    //   'Assignee': 'Janet Leverling',
    //   'RankId': 2,
    //   'Color': '#E64A19',
    //   'ClassName': 'e-bug, e-release, e-janet-leverling'
    // },
    // {
    //   'Id': 'Task 5',
    //   'Title': 'Task - 29005',
    //   'Status': 'Review',
    //   'Summary': 'Fix the issues reported by the customer.',
    //   'Type': 'Bug',
    //   'Priority': 'Low',
    //   'Tags': 'Customer',
    //   'Estimate': '3.5',
    //   'Assignee': 'Steven walker',
    //   'RankId': 1,
    //   'Color': '#E64A19',
    //   'ClassName': 'e-bug, e-low, e-steven-walker'
    // },
    // {
    //   'Id': 'Task 6',
    //   'Title': 'Task - 29007',
    //   'Status': 'Validate',
    //   'Summary': 'Validate new requirements',
    //   'Type': 'Improvement',
    //   'Priority': 'Low',
    //   'Tags': 'Validation',
    //   'Estimate': 1.5,
    //   'Assignee': 'Robert King',
    //   'RankId': 1,
    //   'Color': '#673AB8',
    //   'ClassName': 'e-improvement, e-low, e-robert-king'
    // },
    // {
    //   'Id': 'Task 7',
    //   'Title': 'Task - 29009',
    //   'Status': 'Review',
    //   'Summary': 'Fix the issues reported in Safari browser.',
    //   'Type': 'Bug',
    //   'Priority': 'Critical',
    //   'Tags': 'Fix,Safari',
    //   'Estimate': 1.5,
    //   'Assignee': 'Nancy Davloio',
    //   'RankId': 2,
    //   'Color': '#E64A19',
    //   'ClassName': 'e-bug, e-release, e-nancy-davloio'
    // },
    // {
    //   'Id': 'Task 8',
    //   'Title': 'Task - 29010',
    //   'Status': 'Close',
    //   'Summary': 'Test the application in the IE browser.',
    //   'Type': 'Story',
    //   'Priority': 'Low',
    //   'Tags': 'Review,IE',
    //   'Estimate': 5.5,
    //   'Assignee': 'Margaret hamilt',
    //   'RankId': 3,
    //   'Color': '#02897B',
    //   'ClassName': 'e-story, e-low, e-margaret-hamilt'
    // },
    // {
    //   'Id': 'Task 9',
    //   'Title': 'Task - 29011',
    //   'Status': 'Validate',
    //   'Summary': 'Validate the issues reported by the customer.',
    //   'Type': 'Story',
    //   'Priority': 'High',
    //   'Tags': 'Validation,Fix',
    //   'Estimate': 1,
    //   'Assignee': 'Steven walker',
    //   'RankId': 1,
    //   'Color': '#02897B',
    //   'ClassName': 'e-story, e-high, e-steven-walker'
    // },
    // {
    //   'Id': 'Task 10',
    //   'Title': 'Task - 29015',
    //   'Status': 'Open',
    //   'Summary': 'Show the retrieved data from the server in grid control.',
    //   'Type': 'Story',
    //   'Priority': 'High',
    //   'Tags': 'Database,SQL',
    //   'Estimate': 5.5,
    //   'Assignee': 'Margaret hamilt',
    //   'RankId': 4,
    //   'Color': '#02897B',
    //   'ClassName': 'e-story, e-high, e-margaret-hamilt'
    // },
    // {
    //   'Id': 'Task 11',
    //   'Title': 'Task - 29016',
    //   'Status': 'InProgress',
    //   'Summary': 'Fix cannot open user’s default database SQL error.',
    //   'Priority': 'Critical',
    //   'Type': 'Bug',
    //   'Tags': 'Database,Sql2008',
    //   'Estimate': 2.5,
    //   'Assignee': 'Janet Leverling',
    //   'RankId': 4,
    //   'Color': '#E64A19',
    //   'ClassName': 'e-bug, e-critical, e-janet-leverling'
    // },
    // {
    //   'Id': 'Task 12',
    //   'Title': 'Task - 29017',
    //   'Status': 'Review',
    //   'Summary': 'Fix the issues reported in data binding.',
    //   'Type': 'Story',
    //   'Priority': 'Normal',
    //   'Tags': 'Databinding',
    //   'Estimate': '3.5',
    //   'Assignee': 'Janet Leverling',
    //   'RankId': 4,
    //   'Color': '#02897B',
    //   'ClassName': 'e-story, e-normal, e-janet-leverling'
    // },
    // {
    //   'Id': 'Task 13',
    //   'Title': 'Task - 29018',
    //   'Status': 'Close',
    //   'Summary': 'Analyze SQL server 2008 connection.',
    //   'Type': 'Story',
    //   'Priority': 'Critical',
    //   'Tags': 'Grid,Sql',
    //   'Estimate': 2,
    //   'Assignee': 'Andrew Fuller',
    //   'RankId': 4,
    //   'Color': '#02897B',
    //   'ClassName': 'e-story, e-release, e-andrew-fuller'
    // },
    // {
    //   'Id': 'Task 14',
    //   'Title': 'Task - 29019',
    //   'Status': 'Validate',
    //   'Summary': 'Validate databinding issues.',
    //   'Type': 'Story',
    //   'Priority': 'Low',
    //   'Tags': 'Validation',
    //   'Estimate': 1.5,
    //   'Assignee': 'Margaret hamilt',
    //   'RankId': 1,
    //   'Color': '#02897B',
    //   'ClassName': 'e-story, e-low, e-margaret-hamilt'
    // },
    // {
    //   'Id': 'Task 15',
    //   'Title': 'Task - 29020',
    //   'Status': 'Close',
    //   'Summary': 'Analyze grid control.',
    //   'Type': 'Story',
    //   'Priority': 'High',
    //   'Tags': 'Analyze',
    //   'Estimate': 2.5,
    //   'Assignee': 'Margaret hamilt',
    //   'RankId': 5,
    //   'Color': '#02897B',
    //   'ClassName': 'e-story, e-high, e-margaret-hamilt'
    // },
    // {
    //   'Id': 'Task 16',
    //   'Title': 'Task - 29021',
    //   'Status': 'Close',
    //   'Summary': 'Stored procedure for initial data binding of the grid.',
    //   'Type': 'Others',
    //   'Priority': 'Critical',
    //   'Tags': 'Databinding',
    //   'Estimate': 1.5,
    //   'Assignee': 'Steven walker',
    //   'RankId': 6,
    //   'Color': '#1F88E5',
    //   'ClassName': 'e-others, e-release, e-steven-walker'
    // },
    // {
    //   'Id': 'Task 17',
    //   'Title': 'Task - 29022',
    //   'Status': 'Close',
    //   'Summary': 'Analyze stored procedures.',
    //   'Type': 'Story',
    //   'Priority': 'Critical',
    //   'Tags': 'Procedures',
    //   'Estimate': 5.5,
    //   'Assignee': 'Janet Leverling',
    //   'RankId': 7,
    //   'Color': '#02897B',
    //   'ClassName': 'e-story, e-release, e-janet-leverling'
    // },
    // {
    //   'Id': 'Task 18',
    //   'Title': 'Task - 29023',
    //   'Status': 'Validate',
    //   'Summary': 'Validate editing issues.',
    //   'Type': 'Story',
    //   'Priority': 'Critical',
    //   'Tags': 'Editing',
    //   'Estimate': 1,
    //   'Assignee': 'Nancy Davloio',
    //   'RankId': 1,
    //   'Color': '#02897B',
    //   'ClassName': 'e-story, e-critical, e-nancy-davloio'
    // },
    // {
    //   'Id': 'Task 19',
    //   'Title': 'Task - 29024',
    //   'Status': 'Review',
    //   'Summary': 'Test editing functionality.',
    //   'Type': 'Story',
    //   'Priority': 'Normal',
    //   'Tags': 'Editing,Test',
    //   'Estimate': 0.5,
    //   'Assignee': 'Nancy Davloio',
    //   'RankId': 5,
    //   'Color': '#02897B',
    //   'ClassName': 'e-story, e-normal, e-nancy-davloio'
    // },
    // {
    //   'Id': 'Task 20',
    //   'Title': 'Task - 29025',
    //   'Status': 'Open',
    //   'Summary': 'Enhance editing functionality.',
    //   'Type': 'Improvement',
    //   'Priority': 'Low',
    //   'Tags': 'Editing',
    //   'Estimate': 3.5,
    //   'Assignee': 'Andrew Fuller',
    //   'RankId': 5,
    //   'Color': '#673AB8',
    //   'ClassName': 'e-improvement, e-low, e-andrew-fuller'
    // },
    // {
    //   'Id': 'Task 21',
    //   'Title': 'Task - 29026',
    //   'Status': 'InProgress',
    //   'Summary': 'Improve the performance of the editing functionality.',
    //   'Type': 'Epic',
    //   'Priority': 'High',
    //   'Tags': 'Performance',
    //   'Estimate': 6,
    //   'Assignee': 'Nancy Davloio',
    //   'RankId': 5,
    //   'Color': '#e91e64',
    //   'ClassName': 'e-epic, e-high, e-nancy-davloio'
    // },
    // {
    //   'Id': 'Task 22',
    //   'Title': 'Task - 29027',
    //   'Status': 'Open',
    //   'Summary': 'Arrange web meeting with the customer to show editing demo.',
    //   'Type': 'Others',
    //   'Priority': 'High',
    //   'Tags': 'Meeting,Editing',
    //   'Estimate': 5.5,
    //   'Assignee': 'Steven walker',
    //   'RankId': 6,
    //   'Color': '#1F88E5',
    //   'ClassName': 'e-others, e-high, e-steven-walker'
    // },
    // {
    //   'Id': 'Task 23',
    //   'Title': 'Task - 29029',
    //   'Status': 'Review',
    //   'Summary': 'Fix the editing issues reported by the customer.',
    //   'Type': 'Bug',
    //   'Priority': 'Low',
    //   'Tags': 'Editing,Fix',
    //   'Estimate': '3.5',
    //   'Assignee': 'Janet Leverling',
    //   'RankId': 6,
    //   'Color': '#E64A19',
    //   'ClassName': 'e-bug, e-low, e-janet-leverling'
    // },
    // {
    //   'Id': 'Task 24',
    //   'Title': 'Task - 29030',
    //   'Status': 'Testing',
    //   'Summary': 'Fix the issues reported by the customer.',
    //   'Type': 'Bug',
    //   'Priority': 'Critical',
    //   'Tags': 'Customer',
    //   'Estimate': '3.5',
    //   'Assignee': 'Steven walker',
    //   'RankId': 1,
    //   'Color': '#E64A19',
    //   'ClassName': 'e-bug, e-critical, e-steven-walker'
    // },
    // {
    //   'Id': 'Task 25',
    //   'Title': 'Task - 29031',
    //   'Status': 'Testing',
    //   'Summary': 'Fix the issues reported in Safari browser.',
    //   'Type': 'Bug',
    //   'Priority': 'Critical',
    //   'Tags': 'Fix,Safari',
    //   'Estimate': 1.5,
    //   'Assignee': 'Nancy Davloio',
    //   'RankId': 2,
    //   'Color': '#E64A19',
    //   'ClassName': 'e-bug, e-release, e-nancy-davloio'
    // },
    // {
    //   'Id': 'Task 26',
    //   'Title': 'Task - 29032',
    //   'Status': 'Testing',
    //   'Summary': 'Check Login page validation.',
    //   'Type': 'Story',
    //   'Priority': 'Critical',
    //   'Tags': 'Testing',
    //   'Estimate': 0.5,
    //   'Assignee': 'Michael Suyama',
    //   'RankId': 3,
    //   'Color': '#02897B',
    //   'ClassName': 'e-story, e-release, e-michael-suyama'
    // },
    // {
    //   'Id': 'Task 27',
    //   'Title': 'Task - 29033',
    //   'Status': 'Testing',
    //   'Summary': 'Fix the issues reported in data binding.',
    //   'Type': 'Story',
    //   'Priority': 'Normal',
    //   'Tags': 'Databinding',
    //   'Estimate': '3.5',
    //   'Assignee': 'Janet Leverling',
    //   'RankId': 4,
    //   'Color': '#02897B',
    //   'ClassName': 'e-story, e-normal, e-janet-leverling'
    // },
    // {
    //   'Id': 'Task 28',
    //   'Title': 'Task - 29034',
    //   'Status': 'Testing',
    //   'Summary': 'Test editing functionality.',
    //   'Type': 'Story',
    //   'Priority': 'Normal',
    //   'Tags': 'Editing,Test',
    //   'Estimate': 0.5,
    //   'Assignee': 'Nancy Davloio',
    //   'RankId': 5,
    //   'Color': '#02897B',
    //   'ClassName': 'e-story, e-normal, e-nancy-davloio'
    // },
    // {
    //   'Id': 'Task 29',
    //   'Title': 'Task - 29035',
    //   'Status': 'Testing',
    //   'Summary': 'Fix editing issues reported in Firefox.',
    //   'Type': 'Bug',
    //   'Priority': 'Critical',
    //   'Tags': 'Editing,Fix',
    //   'Estimate': 1.5,
    //   'Assignee': 'Robert King',
    //   'RankId': 7,
    //   'Color': '#E64A19',
    //   'ClassName': 'e-bug, e-critical, e-robert-king'
    // },
    // {
    //   'Id': 'Task 30',
    //   'Title': 'Task - 29036',
    //   'Status': 'Testing',
    //   'Summary': 'Test editing feature in the IE browser.',
    //   'Type': 'Story',
    //   'Priority': 'Normal',
    //   'Tags': 'Testing',
    //   'Estimate': 5.5,
    //   'Assignee': 'Janet Leverling',
    //   'RankId': 10,
    //   'Color': '#02897B',
    //   'ClassName': 'e-story, e-normal, e-janet-leverling'
    // }
    // ];

    // export let cardData: Object[] = [
    //   {
    //     'Id': 'Task 1',
    //     'Title': 'Task - 29001',
    //     'Status': 'Open',
    //     'Summary': 'Analyze customer requirements.',
    //     'Priority': 'High',
    //     'Tags': 'Bug, Release Bug',
    //     'RankId': 1,
    //     'Assignee': 'Nancy Davloio'
    //   },
    //   {
    //     'Id': 'Task 2',
    //     'Title': 'Task - 29002',
    //     'Status': 'InProgress',
    //     'Summary': 'Add responsive support to applicaton',
    //     'Priority': 'Low',
    //     'Tags': 'Story, Kanban',
    //     'RankId': 1,
    //     'Assignee': 'Andrew Fuller'
    //   },
    //   {
    //     'Id': 'Task 3',
    //     'Title': 'Task - 29003',
    //     'Status': 'Open',
    //     'Summary': 'Show the retrived data from the server in grid control.',
    //     'Priority': 'High',
    //     'Tags': 'Bug, Breaking Issue',
    //     'RankId': 2,
    //     'Assignee': 'Janet Leverling'
    //   },
    //   {
    //     'Id': 'Task 4',
    //     'Title': 'Task - 29004',
    //     'Status': 'Open',
    //     'Summary': 'Fix the issues reported in the IE browser.',
    //     'Priority': 'High',
    //     'Tags': 'Bug, Customer',
    //     'RankId': 3,
    //     'Assignee': 'Andrew Fuller'
    //   },
    //   {
    //     'Id': 'Task 5',
    //     'Title': 'Task - 29005',
    //     'Status': 'Review',
    //     'Summary': 'Improve application performance.',
    //     'Priority': 'Normal',
    //     'Tags': 'Story, Kanban',
    //     'RankId': 1,
    //     'Assignee': 'Steven walker'
    //   },
    //   {
    //     'Id': 'Task 6',
    //     'Title': 'Task - 29009',
    //     'Status': 'Review',
    //     'Summary': 'API Improvements.',
    //     'Priority': 'Critical',
    //     'Tags': 'Bug, Customer',
    //     'RankId': 2,
    //     'Assignee': 'Nancy Davloio'
    //   },
    //   {
    //     'Id': 'Task 7',
    //     'Title': 'Task - 29010',
    //     'Status': 'Close',
    //     'Summary': 'Fix cannot open user\'s default database sql error.',
    //     'Priority': 'High',
    //     'Tags': 'Bug, Internal',
    //     'RankId': 8,
    //     'Assignee': 'Margaret hamilt'
    //   },
    //   {
    //     'Id': 'Task 8',
    //     'Title': 'Task - 29015',
    //     'Status': 'Open',
    //     'Summary': 'Fix the filtering issues reported in safari.',
    //     'Priority': 'Critical',
    //     'Tags': 'Bug, Breaking Issue',
    //     'RankId': 4,
    //     'Assignee': 'Margaret hamilt'
    //   },
    //   {
    //     'Id': 'Task 9',
    //     'Title': 'Task - 29016',
    //     'Status': 'Review',
    //     'Summary': 'Fix the issues reported in IE browser.',
    //     'Priority': 'High',
    //     'Tags': 'Bug, Customer',
    //     'RankId': 3,
    //     'Assignee': 'Andrew Fuller'
    //   },
    //   {
    //     'Id': 'Task 10',
    //     'Title': 'Task - 29017',
    //     'Status': 'Review',
    //     'Summary': 'Enhance editing functionality.',
    //     'Priority': 'Normal',
    //     'Tags': 'Story, Kanban',
    //     'RankId': 4,
    //     'Assignee': 'Janet Leverling'
    //   },
    //   {
    //     'Id': 'Task 11',
    //     'Title': 'Task - 29018',
    //     'Status': 'Close',
    //     'Summary': 'Arrange web meeting with customer to get login page requirement.',
    //     'Priority': 'High',
    //     'Tags': 'Feature',
    //     'RankId': 1,
    //     'Assignee': 'Andrew Fuller'
    //   },
    //   {
    //     'Id': 'Task 12',
    //     'Title': 'Task - 29020',
    //     'Status': 'Close',
    //     'Summary': 'Login page validation.',
    //     'Priority': 'Low',
    //     'Tags': 'Bug',
    //     'RankId': 2,
    //     'Assignee': 'Margaret hamilt'
    //   },
    //   {
    //     'Id': 'Task 13',
    //     'Title': 'Task - 29021',
    //     'Status': 'Close',
    //     'Summary': 'Test the application in IE browser.',
    //     'Priority': 'Normal',
    //     'Tags': 'Bug',
    //     'RankId': 3,
    //     'Assignee': 'Steven walker'
    //   },
    //   {
    //     'Id': 'Task 14',
    //     'Title': 'Task - 29022',
    //     'Status': 'Close',
    //     'Summary': 'Analyze stored procedure.',
    //     'Priority': 'Critical',
    //     'Tags': 'CustomSample',
    //     'RankId': 4,
    //     'Assignee': 'Janet Leverling'
    //   },
    //   {
    //     'Id': 'Task 15',
    //     'Title': 'Task - 29024',
    //     'Status': 'Review',
    //     'Summary': 'Check login page validation.',
    //     'Priority': 'Low',
    //     'Tags': 'Story',
    //     'RankId': 5,
    //     'Assignee': 'Nancy Davloio'
    //   },
    //   {
    //     'Id': 'Task 16',
    //     'Title': 'Task - 29025',
    //     'Status': 'Close',
    //     'Summary': 'Add input validation for editing.',
    //     'Priority': 'Critical',
    //     'Tags': 'Bug, Breaking Issue',
    //     'RankId': 5,
    //     'Assignee': 'Andrew Fuller'
    //   },
    //   {
    //     'Id': 'Task 17',
    //     'Title': 'Task - 29026',
    //     'Status': 'InProgress',
    //     'Summary': 'Improve performance of editing functionality.',
    //     'Priority': 'Critical',
    //     'Tags': 'Bug, Customer',
    //     'RankId': 2,
    //     'Assignee': 'Nancy Davloio'
    //   },
    //   {
    //     'Id': 'Task 18',
    //     'Title': 'Task - 29027',
    //     'Status': 'Open',
    //     'Summary': 'Arrange web meeting for cutomer requirement.',
    //     'Priority': 'High',
    //     'Tags': 'Story',
    //     'RankId': 5,
    //     'Assignee': 'Steven walker'
    //   },
    //   {
    //     'Id': 'Task 19',
    //     'Title': 'Task - 29029',
    //     'Status': 'Review',
    //     'Summary': 'Fix the issues reported by the customer.',
    //     'Priority': 'High',
    //     'Tags': 'Bug',
    //     'RankId': 6,
    //     'Assignee': 'Janet Leverling'
    //   },
    //   {
    //     'Id': 'Task 20',
    //     'Title': 'Task - 29030',
    //     'Status': 'InProgress',
    //     'Summary': 'Test editing functionality',
    //     'Priority': 'Low',
    //     'Tags': 'Story',
    //     'RankId': 3,
    //     'Assignee': 'Janet Leverling'
    //   },
    //   {
    //     'Id': 'Task 21',
    //     'Title': 'Task - 29031',
    //     'Status': 'InProgress',
    //     'Summary': 'Check filtering validation',
    //     'Priority': 'Normal',
    //     'Tags': 'Feature, Release',
    //     'RankId': 4,
    //     'Assignee': 'Janet Leverling'
    //   },
    //   {
    //     'Id': 'Task 22',
    //     'Title': 'Task - 29032',
    //     'Status': 'InProgress',
    //     'Summary': 'Arrange web meeting with customer to get login page requirement',
    //     'Priority': 'Critical',
    //     'Tags': 'Feature',
    //     'RankId': 5,
    //     'Assignee': 'Margaret hamilt'
    //   },
    //   {
    //     'Id': 'Task 23',
    //     'Title': 'Task - 29033',
    //     'Status': 'Open',
    //     'Summary': 'Arrange web meeting with customer to get editing requirements',
    //     'Priority': 'Critical',
    //     'Tags': 'Story, Improvement',
    //     'RankId': 6,
    //     'Assignee': 'Andrew Fuller'
    //   },
    //   {
    //     'Id': 'Task 24',
    //     'Title': 'Task - 29034',
    //     'Status': 'InProgress',
    //     'Summary': 'Fix the issues reported by the customer.',
    //     'Priority': 'Critical',
    //     'Tags': 'Bug, Customer',
    //     'RankId': 6,
    //     'Assignee': 'Steven walker'
    //   },
    //   {
    //     'Id': 'Task 25',
    //     'Title': 'Task - 29035',
    //     'Status': 'Close',
    //     'Summary': 'Fix the issues reported in Safari browser.',
    //     'Priority': 'High',
    //     'Tags': 'Bug',
    //     'RankId': 6,
    //     'Assignee': 'Nancy Davloio'
    //   },
    //   {
    //     'Id': 'Task 26',
    //     'Title': 'Task - 29036',
    //     'Status': 'Review',
    //     'Summary': 'Check Login page validation.',
    //     'Priority': 'Critical',
    //     'Tags': 'Bug, Customer',
    //     'RankId': 7,
    //     'Assignee': 'Margaret hamilt'
    //   },
    //   {
    //     'Id': 'Task 27',
    //     'Title': 'Task - 29037',
    //     'Status': 'Open',
    //     'Summary': 'Fix the issues reported in data binding.',
    //     'Priority': 'Normal',
    //     'Tags': 'Bug',
    //     'Estimate': '3.5',
    //     'RankId': 7,
    //     'Assignee': 'Steven walker'
    //   },
    //   {
    //     'Id': 'Task 28',
    //     'Title': 'Task - 29038',
    //     'Status': 'Close',
    //     'Summary': 'Test editing functionality.',
    //     'Priority': 'Normal',
    //     'Tags': 'Story',
    //     'Estimate': 0.5,
    //     'RankId': 7,
    //     'Assignee': 'Steven walker'
    //   }
];
