// Account / profile / progress types shared between client store and server.

export interface Profile {
  id: string;
  name: string;
  avatar: string; // emoji
  createdAt: number;
}

export interface Account {
  id: string;
  familyName: string;
  profiles: Profile[];
}

export interface SrsItem {
  qid: string; // question id OR "vocab:<topicId>:<hanzi>"
  step: number; // index into SRS_LADDER; graduates past the end
  dueAt: number; // epoch ms
  lapses: number;
}

export interface ActivityEvent {
  at: number;
  kind: "quiz" | "paper" | "exam" | "guide" | "flashcards" | "challenge" | "review";
  topicId?: string;
  label: string;
  correct?: number;
  total?: number;
  stars?: number;
}

export interface Analytics {
  totalMinutes: number;
  sessions: number;
  lastSeen: number;
  perDayMinutes: Record<string, number>; // "YYYY-MM-DD" -> minutes
  perTopic: Record<
    string,
    { attempts: number; correct: number; minutes: number; lastSeen: number }
  >;
  log: ActivityEvent[]; // most recent first, capped
}

export interface ProgressDoc {
  version: 1;
  stars: number;
  awarded: Record<string, number>; // paperId -> stars earned (best)
  attempts: Record<string, { correct: number; wrong: number }>; // qid -> tallies
  guidesRead: Record<string, string[]>; // topicId -> section headings read
  missed: string[]; // qids answered wrong at least once (review pool)
  srs: Record<string, SrsItem>;
  challengeBest: Record<string, number>; // topicId -> best challenge score
  streak: { count: number; lastDay: string }; // "YYYY-MM-DD"
  goalMinutes: number; // daily goal
  vocabKnown: Record<string, number>; // "topicId:hanzi" -> confidence 0-3
  analytics: Analytics;
  updatedAt: number;
}

export const SRS_LADDER_DAYS = [1, 3, 7, 16, 35];

export function emptyProgress(): ProgressDoc {
  return {
    version: 1,
    stars: 0,
    awarded: {},
    attempts: {},
    guidesRead: {},
    missed: [],
    srs: {},
    challengeBest: {},
    streak: { count: 0, lastDay: "" },
    goalMinutes: 15,
    vocabKnown: {},
    analytics: {
      totalMinutes: 0,
      sessions: 0,
      lastSeen: 0,
      perDayMinutes: {},
      perTopic: {},
      log: [],
    },
    updatedAt: 0,
  };
}
