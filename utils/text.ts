import copyTool from 'copy-to-clipboard';

export const capitalize = (str: string) => str.charAt(0).toUpperCase() + str.slice(1);

export const copy = (str: string) => copyTool(str);
