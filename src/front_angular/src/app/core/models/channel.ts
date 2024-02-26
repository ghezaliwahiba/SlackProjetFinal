import { Message } from "./message";

export interface Channel {
  id: number;
  channelName?: string;
  messages?: Message[];
}
