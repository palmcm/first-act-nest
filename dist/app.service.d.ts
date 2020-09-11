export interface Task {
    id: string;
    name: string;
    description: string;
    done: string;
}
export declare class AppService {
    private tasks;
    private last;
    getHello(): string;
    getTask(query: Task): Array<Task>;
    postTask(data: Task): string;
    deleteTask(query: Task): string;
    deleteTaskId(id: string): string;
    getTaskId(id: string): Task;
    putTaskId(id: string, data: Task): string;
}
