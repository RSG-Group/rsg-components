// @flow
/* eslint-disable no-console */
export default function RSGTransition(style: string = "", time: string = "ease", type: string) {
  if (!time) {
    console.error("RSGTransition: You must set time!");
    console.warn("syntax: RSGTransition(style, time, type)");
    console.log("For more info - Docs: \nhttps://github.com/RSG-Group/rsg-components/wiki/RSGTransition");
    return undefined;
  }
  if (!type) {
    console.info("If you don't want to set type, please don't set anything!\nThe type by default is ease...");
    console.info("Example: RSGTransition(\"background\", \"5s\") - without type.\nActually type will be set to ease by default.\ntype === \"ease\"");
    console.log("For more info - Docs: \nhttps://github.com/RSG-Group/rsg-components/wiki/RSGTransition");
    console.info("Don't worry! This isn't error. This is just tip.");
  }
  const returnValue = { transition: (`${style} ${time} ${type}`) };
  return returnValue;
}
