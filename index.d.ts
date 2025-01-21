declare namespace VMBrowserify {
  class Context {
    [key: string]: any;
  }

  class Script {
    constructor(code: string);

    code: string;
    iFrame: any;

    runInContext(context: Context): any;
    runInThisContext(): any;
    runInNewContext(context?: object): any;
  }

  function createScript(code: string): Script;
  function createContext(context?: object): Context;

  function runInContext(code: string, context: Context): any;
  function runInThisContext(code: string): any;
  function runInNewContext(code: string, context?: object): any;
}

export default VMBrowserify;