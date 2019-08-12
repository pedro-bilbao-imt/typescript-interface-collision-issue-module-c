
declare module "typescript-interface-collition-issue-module-c/index" {
    export interface ExampleInterface {
        exampleProperty: string;
    }
}


declare module "typescript-interface-collition-issue-module-c" {
  import main = require('typescript-interface-collition-issue-module-c/index');
  export = main;
}


