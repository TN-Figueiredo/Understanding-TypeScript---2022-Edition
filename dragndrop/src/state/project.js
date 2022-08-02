"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.stateManager = exports.StateManager = void 0;
const project_1 = require("../models/project");
class State {
    constructor() {
        this.listeners = [];
    }
    addListener(listenerFn) {
        this.listeners.push(listenerFn);
    }
}
class StateManager extends State {
    constructor() {
        super();
        this.projects = [];
    }
    static getInstance() {
        if (this.instance) {
            return this.instance;
        }
        else {
            this.instance = new StateManager();
            return this.instance;
        }
    }
    addProject(title, description, numOfPeople) {
        const newProject = new project_1.Project(Math.random().toString(), title, description, numOfPeople, project_1.ProjectStatus.Active);
        this.projects.push(newProject);
        this.updateListeners();
    }
    moveProject(projectId, newStatus) {
        const project = this.projects.find((prj) => prj.id === projectId);
        if (project && project.status !== newStatus) {
            project.status = newStatus;
            this.updateListeners();
        }
    }
    updateListeners() {
        for (const listenerFn of this.listeners) {
            listenerFn(this.projects.slice());
        }
    }
}
exports.StateManager = StateManager;
exports.stateManager = StateManager.getInstance();
