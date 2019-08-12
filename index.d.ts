
declare module "typescript-interface-collition-issue-module-c/index" {
    export interface ExampleInterface {
        exampleProperty2: number;
    }
}


declare module "typescript-interface-collition-issue-module-c" {
  import main = require('typescript-interface-collition-issue-module-c/index');
  export = main;
}


