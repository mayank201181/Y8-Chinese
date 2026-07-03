import type { TopicExtras } from "./types";

// Engagement extras live in lib/extras/<topicId>.ts, generated separately from
// the audited topic content. Register them here as they land.
export const EXTRAS_BY_TOPIC: Record<string, TopicExtras> = {};
