import _ from "lodash";

import sentenceCase from "./sentenceCase";

const MARKDOWN_IMAGE_REGEX = /!\[(.+)\]\((.+)\)/;

// GroupableImage: Camel case with - and number
// e.g. addCtaToWithdrawalNotAvailableScreen-0
//      addCtaToWithdrawalNotAvailableScreen-1
// These 2 will be grouped together and have a section assigned for them
const GROUPABLE_IMAGE_NAME_REGEX = /([a-zA-Z]+)-(\d+)/;

enum LINE_TYPE {
  TEXT,
  IMAGE,
  GROUPABLE_IMAGE
}

export default function formatEvidences(textBlob: string) {
  const lines = _(textBlob)
    .split("\n")
    .map(line => {
      const imageRegexMatch = line.match(MARKDOWN_IMAGE_REGEX);
      // Not a markdown image, return them right away
      if (!imageRegexMatch) return { text: line, type: LINE_TYPE.TEXT };

      const [, imageName, imageLink] = imageRegexMatch;
      const imageTag = `<img src="${imageLink}" alt="${imageName}" width="250"/>`;

      const groupableImageRegexMatch = line.match(GROUPABLE_IMAGE_NAME_REGEX);
      // Not a groupable image, return them right away
      if (!groupableImageRegexMatch)
        return { text: imageTag, type: LINE_TYPE.IMAGE };

      const [, group, imageIndex] = groupableImageRegexMatch;

      return {
        text: imageTag,
        type: LINE_TYPE.GROUPABLE_IMAGE,
        meta: { group, imageIndex: +imageIndex }
      };
    })
    .value();

  const textLines = _.reject(lines, { type: LINE_TYPE.GROUPABLE_IMAGE });
  const groupableImageLines = _(lines)
    .filter({
      type: LINE_TYPE.GROUPABLE_IMAGE
    })
    .orderBy("meta.group")
    .orderBy("meta.imageIndex")
    .groupBy("meta.group")
    .flatMap((imageLines, groupName) => {
      return [
        // Group header and separator
        { text: "", type: LINE_TYPE.TEXT },
        { text: `## ${sentenceCase(groupName)}`, type: LINE_TYPE.TEXT },
        { text: "", type: LINE_TYPE.TEXT },

        // Grouped images
        ...imageLines
      ];
    })
    .value();

  return _([...textLines, ...groupableImageLines])
    .map("text")
    .join("\n");
}
