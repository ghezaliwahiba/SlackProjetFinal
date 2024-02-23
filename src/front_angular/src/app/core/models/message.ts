import { User } from "./user";

export interface Message {
  id: number;
  date: Date;
  hour: Date;
  content: String;
  user: User;
  channel: string;
}
