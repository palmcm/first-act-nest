"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppService = void 0;
const common_1 = require("@nestjs/common");
let AppService = class AppService {
    constructor() {
        this.tasks = {};
        this.last = 1;
    }
    getHello() {
        return 'Hello World!';
    }
    getTask(query) {
        const qkey = Object.keys(query);
        const arrtask = Object.values(this.tasks);
        if (qkey.length == 0) {
            return arrtask;
        }
        else {
            const result = arrtask.filter(task => {
                let ch = true;
                qkey.forEach(qu => {
                    if (task[qu] != query[qu]) {
                        ch = false;
                    }
                });
                return ch;
            });
            return result;
        }
    }
    postTask(data) {
        const name = data.name || "Untitle Task";
        const description = data.description || "";
        const done = data.done || "false";
        const id = this.last.toString();
        this.tasks[id] = { id, name, description, done };
        this.last += 1;
        return "Added Complete Task ID is: " + id.toString();
    }
    deleteTask(query) {
        const qkey = Object.keys(query);
        const arrtask = Object.keys(this.tasks);
        if (qkey.length == 0) {
            return "No Deleted";
        }
        else {
            const result = arrtask.filter(task => {
                let ch = true;
                qkey.forEach(qu => {
                    if (this.tasks[task][qu] != query[qu]) {
                        ch = false;
                    }
                });
                if (ch) {
                    delete this.tasks[task];
                }
                return ch;
            });
            return `${result} Deleted Complete`;
        }
    }
    deleteTaskId(id) {
        delete this.tasks[id];
        return "Deleted Complete";
    }
    getTaskId(id) {
        return this.tasks[id];
    }
    putTaskId(id, data) {
        let temp = this.tasks[id];
        const name = data.name || temp.name || "Untitle Task";
        const description = data.description || temp.description || "";
        const done = data.done || temp.done || "false";
        this.tasks[id] = { id, name, description, done };
        return "Updated Complete";
    }
};
AppService = __decorate([
    common_1.Injectable()
], AppService);
exports.AppService = AppService;
//# sourceMappingURL=app.service.js.map