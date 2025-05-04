import type { Incident } from "@/types/incident"

export const mockIncidents: Incident[] = [
  {
    id: 1,
    title: "Biased Recommendation Algorithm",
    description:
      "Algorithm consistently favored certain demographics in product recommendations, leading to unequal exposure of opportunities across user groups. Investigation revealed training data imbalance.",
    severity: "Medium",
    reported_at: "2025-03-15T10:00:00Z",
  },
  {
    id: 2,
    title: "LLM Hallucination in Critical Info",
    description:
      "LLM provided incorrect safety procedure information when asked about emergency protocols. This could have led to dangerous situations if followed. Model needs additional safety guardrails.",
    severity: "High",
    reported_at: "2025-04-01T14:30:00Z",
  },
  {
    id: 3,
    title: "Minor Data Leak via Chatbot",
    description:
      "Chatbot inadvertently exposed non-sensitive user metadata in responses. No personal identifiable information was leaked, but the incident highlights potential vulnerabilities in the system.",
    severity: "Low",
    reported_at: "2025-03-20T09:15:00Z",
  },
  {
    id: 4,
    title: "Facial Recognition False Positive",
    description:
      "Security system incorrectly identified an authorized individual as an unauthorized person, triggering unnecessary security protocols. System needs recalibration.",
    severity: "Low",
    reported_at: "2025-03-25T16:45:00Z",
  },
  {
    id: 5,
    title: "AI-Generated Content Misattribution",
    description:
      "Content generation system produced material that closely resembled copyrighted work without proper attribution. Content review process needs strengthening.",
    severity: "Medium",
    reported_at: "2025-03-28T11:20:00Z",
  },
  {
    id: 6,
    title: "Automated Decision System Failure",
    description:
      "Critical decision-making system went offline for 30 minutes, affecting service availability. Backup systems did not engage properly, requiring manual intervention.",
    severity: "High",
    reported_at: "2025-04-02T08:10:00Z",
  },
]
