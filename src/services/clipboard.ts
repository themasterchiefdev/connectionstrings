import * as ClipboardJS from "clipboard";

export function readFromClipboard(selector: string) {
  const readFromCp = new ClipboardJS(selector);
  readFromCp.on("success", e => {
    // // tslint:disable-next-line:no-console
    // console.log("Action: ", e.action);
    // // tslint:disable-next-line:no-console
    // console.info("Text:", e.text);
    // // tslint:disable-next-line:no-console
    // console.info("Trigger:", e.trigger);
    e.clearSelection();
  });
  readFromCp.on("error", e => {
    // tslint:disable-next-line:no-console
    console.error("Action:", e.action);
    // tslint:disable-next-line:no-console
    console.error("Trigger:", e.trigger);
  });
}
