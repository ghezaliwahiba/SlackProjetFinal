import { Time } from "@angular/common";
import { User } from "./user";
import { Channel } from "./channel";

export interface Message {
    id: number;
    localDate?: Date;
    localTime?: Date;
    content: String;
    user?: User;
    channel?: Channel;
}
