import { Injectable } from '@nestjs/common';
import { parse } from 'path';
export interface Task{
  id: string,
  name: string,
  description: string,
  done: string
}
@Injectable()
export class AppService {
  private tasks:  {[key:string]: Task} = {};
  private last: number = 1;
  getHello(): string {
    return 'Hello World!';
  }

  getTask(query: Task): Array<Task>{
    const qkey: Array<string> = Object.keys(query);
    const arrtask: Array<Task> = Object.values(this.tasks);
    if (qkey.length == 0){
      return arrtask;
    }else{
      const result: Array<Task> = arrtask.filter(task => {
        let ch: boolean = true;
        qkey.forEach(qu => {
          if(task[qu]!=query[qu]){
            ch = false;
          }
        });
        return ch;
      })
      return result;
    }
  }

  postTask(data: Task): string{
    const name: string = data.name || "Untitle Task";
    const description: string = data.description || "";
    const done: string = data.done || "false";
    const id: string = this.last.toString();
    this.tasks[id] = {id,name,description,done}
    this.last += 1;
    return "Added Complete Task ID is: "+id.toString();
  }

  deleteTask(query: Task): string{
    const qkey: Array<string> = Object.keys(query);
    const arrtask: Array<string> = Object.keys(this.tasks);
    if (qkey.length == 0){
      return "No Deleted";
    }else{
      const result: Array<string> = arrtask.filter(task => {
        let ch: boolean = true;
        qkey.forEach(qu => {
          if(this.tasks[task][qu]!=query[qu]){
            ch = false;
          }
        });
        if (ch){delete this.tasks[task];}
        return ch;
      })
      return `${result} Deleted Complete`;
    }
  }

  deleteTaskId(id: string): string{
    delete this.tasks[id];
    return "Deleted Complete";
  }

  getTaskId(id: string): Task{
    return this.tasks[id];
  }

  putTaskId(id: string, data: Task): string{
    let temp: Task = this.tasks[id];
    const name: string = data.name || temp.name || "Untitle Task";
    const description: string = data.description || temp.description || "";
    const done: string = data.done || temp.done ||"false";
    this.tasks[id] = {id,name,description,done}
    return "Updated Complete";
  }
}
