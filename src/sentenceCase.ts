import _ from "lodash";

const CAMEL_CASE_REGEX = /([a-z]+)([A-Z])/g;
const CONNECTOR_CHARACTERS = /[-_.]/g;

export default function sentenceCase(input = "") {
  let result;

  // Stringify the input
  result = `${input}`;

  // Add spaces for camelCases
  result = result.replace(CAMEL_CASE_REGEX, "$1 $2");

  // Replace connector characters with spaces
  result = result.replace(CONNECTOR_CHARACTERS, " ");

  // Lower case everything
  result = _.toLower(result);

  // Capitalise first letter
  result = _.upperFirst(result);

  return result;
}
