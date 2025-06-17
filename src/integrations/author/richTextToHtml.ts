import { BLOCKS, MARKS } from '@contentful/rich-text-types';
import { documentToHtmlString, Options } from "@contentful/rich-text-html-renderer";
import { richTextFromMarkdown } from "@contentful/rich-text-from-markdown";

export default async function richTextToHtml(richText: string, options?: Partial<Options>) {
    let markdown = await richTextFromMarkdown(richText);
    let htmlText = documentToHtmlString(markdown, options);
    console.log(htmlText)
    return htmlText;
}

export const paragraph_styling = {
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node: { content: any; }, next: (arg0: any) => any) => `<p class='pb-4'>${next(node.content)}</p>`
  }
}

export const list_styling = {
  renderNode: {
    [BLOCKS.UL_LIST]: (node: { content: any; }, next: (arg0: any) => any) => `<ul class='mt-4 ml-6 list-disc'>${next(node.content)}</ul>`
  }
}

export const list_styling_light_margin = {
  renderNode: {
    [BLOCKS.UL_LIST]: (node: { content: any; }, next: (arg0: any) => any) => `<ul class='ml-4 list-disc'>${next(node.content)}</ul>`
  }
}