import { LinkModel } from "@/types/model/link";

const LIST_OF_LINKS_PATH = "/links";

export async function fetchLinks(query: string): Promise<Array<LinkModel>> {
  //   const res = await fetch(`${process.env.API_URL}/${LIST_OF_LINKS_PATH}`);
  //   if (!res.ok) {
  //     throw new Error("Fetch link failed");
  //   }
  //   return res.json();
  return [
    {
      title: "Tracking in React Apps - DEV Community",
      description:
        "Disclaimer    The code might not be a best practice, because it's based on personal... Tagged with javascript, react, monitoring, todayilearned.",
      url: "https://dev.to/peterchu999/tracking-in-react-apps-584e",
      favicon:
        "https://dev-to-uploads.s3.amazonaws.com/uploads/articles/3otvb2z646ytpt1hl2rv.jpg",
    },
    {
      title:
        "🩸ChatGPT Privacy Leak: Thousands of Conversations Now Publicly Indexed by Google - DEV Community",
      description:
        "A space to discuss and keep up software development and manage your software career",
      url: "https://dev.to/alifar/exposed-google-is-indexing-private-ai-conversations-heres-what-you-should-know-37m5",
      favicon:
        "https://dev-to-uploads.s3.amazonaws.com/uploads/articles/3otvb2z646ytpt1hl2rv.jpg",
    },
    {
      title: "Introduction to RxJava | Baeldung",
      description:
        "Discover RxJava - a library for composing asynchronous and event-based programs.",
      url: "https://www.baeldung.com/rx-java",
      favicon:
        "https://www.baeldung.com/wp-content/uploads/2017/08/On-Baeldung-2.jpg",
    },
  ].filter((l) =>
    l.title.toLocaleLowerCase().includes(query.toLocaleLowerCase())
  );
}
