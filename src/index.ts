import {MainService} from "./app/MainService";
export default class Main {
    constructor() {
        console.log('Typescript Webpack starter launched 5');
    }
}

let start = new Main();
new MainService().logMe('index.ts');
(<any>window).loadPlugin = loadPlugin;

function loadPlugin() {
    const input = (<any>document.querySelector('#input')).value;
    console.log('Loading plugin', input);
    // System.import(input);
}