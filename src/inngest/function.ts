import { inngest } from "./client";
import {
  createAgent,
  openai,
} from "@inngest/agent-kit";
export const helloWorld = inngest.createFunction(
  { id: "hello-world" },
  { event: "test/hello.world" },
  async ({ event, step }) => {
    // await step.sleep("wait-a-moment", "5s");
    const summarizer = createAgent({
  model: openai({model: "gpt-4o"}),
  name: "Summarizer",
  system: "You are an expert at summarizing text concisely in 2 words.",
});
    const {output} = await summarizer.run(`Summarize this: ${event.data.value}`);
    return { output };
  },
);
