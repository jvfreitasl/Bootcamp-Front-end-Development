import { helloWorld } from "./module.js";
import MyModule from "./module2.js";
import * as MyModulePack from "./module3.js";

helloWorld();
MyModule();
console.log(MyModulePack.name);
