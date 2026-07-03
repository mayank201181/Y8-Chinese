import { notFound } from "next/navigation";
import TopicClient from "./TopicClient";

// Next 16: params/searchParams are Promises.
export default async function TopicPage(props: {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ tab?: string }>;
}) {
  const { id } = await props.params;
  const { tab } = await props.searchParams;
  const valid = [
    "greetings", "family", "school", "hobbies", "food", "shopping",
    "daily-routine", "weather", "travel", "home", "health", "festivals",
  ];
  if (!valid.includes(id)) notFound();
  return <TopicClient id={id} initialTab={tab} />;
}
