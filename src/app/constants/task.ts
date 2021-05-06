export enum TaskStatusType {
    Todo = '0',
    Doing = '1',
    Done = '2'
}

export const TaskStatusMap = {
    [TaskStatusType.Todo] : 'Todo',
    [TaskStatusType.Doing] : 'Doing',
    [TaskStatusType.Done] : 'Done'
}
export interface ISelectOption<T> {
    value : T;
    label : string;
}

export const TaskStatusList = Object.keys(TaskStatusMap).map(item=>({
    key: item,
    label: TaskStatusMap[item],
}))
    