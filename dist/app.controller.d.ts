import { AppService, Task } from './app.service';
import { Request } from 'express';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    getHello(): string;
    getTask(query: Task): Array<Task>;
    postTask(req: Request): string;
    deleteTask(query: Task): string;
    deleteTaskId(id: string): string;
    getTaskId(id: string): Task;
    putTaskId(id: string, req: Request): string;
}
