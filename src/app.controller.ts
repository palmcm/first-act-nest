import { Controller, Get, Post, Req, Param, Delete, Put, Query } from '@nestjs/common';
import { AppService, Task } from './app.service';
import { Request } from 'express'

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  
  @Get("/tasks")
  getTask(@Query() query: Task): Array<Task> {
    return this.appService.getTask(query);
  }

  @Post("/tasks")
  postTask(@Req() req: Request): string {
    return this.appService.postTask(req.body);
  }

  @Delete("/tasks")
  deleteTask(@Query() query: Task): string{
    return this.appService.deleteTask(query);
  }

  @Delete("/tasks/:id")
  deleteTaskId(@Param('id') id: string){
    return this.appService.deleteTaskId(id);
  }

  @Get("/tasks/:id")
  getTaskId(@Param('id') id: string): Task{
    return this.appService.getTaskId(id);
  }

  @Put("/tasks/:id")
  putTaskId(@Param('id') id: string,@Req() req: Request): string{
    return this.appService.putTaskId(id,req.body);
  }
}
