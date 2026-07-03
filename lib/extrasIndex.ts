import type { TopicExtras } from "./types";

import { greetingsExtras } from "./extras/greetings";
import { familyExtras } from "./extras/family";
import { schoolExtras } from "./extras/school";
import { hobbiesExtras } from "./extras/hobbies";
import { foodExtras } from "./extras/food";
import { shoppingExtras } from "./extras/shopping";
import { dailyRoutineExtras } from "./extras/daily-routine";
import { weatherExtras } from "./extras/weather";
import { travelExtras } from "./extras/travel";
import { homeExtras } from "./extras/home";
import { healthExtras } from "./extras/health";
import { festivalsExtras } from "./extras/festivals";

// Engagement extras live in lib/extras/<topicId>.ts, generated separately from
// the audited topic content. Register them here as they land.
export const EXTRAS_BY_TOPIC: Record<string, TopicExtras> = {
  greetings: greetingsExtras,
  family: familyExtras,
  school: schoolExtras,
  hobbies: hobbiesExtras,
  food: foodExtras,
  shopping: shoppingExtras,
  "daily-routine": dailyRoutineExtras,
  weather: weatherExtras,
  travel: travelExtras,
  home: homeExtras,
  health: healthExtras,
  festivals: festivalsExtras,
};
