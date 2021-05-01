export enum TaskStatusType {
    Todo = 0,
    Doing = 1,
    Done = 2
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
// export const TaskStatus: ISelectOption< TaskStatusType >[] =Object.keys(TaskStatusMap).map((key : TaskStatusType)=>({
// 		value : key,
// 		label : TaskStatusMap[key],
//     }));

export const TaskStatusList = Object.keys(TaskStatusMap).map(item=>({
    value:item,
    label:TaskStatusMap[item],
}))
    
export const AuditValueList:Array<ISelectOption< TaskStatusType>>=[
    {value:TaskStatusType.Todo, label: TaskStatusMap[0]},
    {value:TaskStatusType.Doing, label: TaskStatusMap[1]},

];