import accessibility from "./PathText/accessibility";
import alignment from "./PathText/alignment";
import cache from "./PathText/cache";
import character_limit from "./PathText/character_limit";
import child_events from "./PathText/child_events";
import circle_last_char from "./PathText/circle_last_char";
import flipped from "./PathText/flipped";
import initial from "./PathText/initial";
import layout from "./PathText/layout";
import text from "./PathText/text";
import vertical_alignment from "./PathText/vertical_alignment";
import vertical_alignment_layout from "./PathText/vertical_alignment_layout";

export const visual = {
  alignment,
  character_limit,
  circle_last_char,
  flipped,
  initial,
  layout,
  text,
  vertical_alignment,
  vertical_alignment_layout
};

export const nonVisual = {
  accessibility,
  cache,
  child_events
};

export default { ...visual, ...nonVisual };
