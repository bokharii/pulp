export type Doc = {
  id: string;
  name: string;
  content: string;
};

export type Message = {
  id: string;
  role: "user" | "assistant";
  content: string;
};
