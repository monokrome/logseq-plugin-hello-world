import '@logseq/libs'

function execute() {
  logseq.App.showMsg('Hello, world.');
}

logseq.ready(execute).catch(console.error);
