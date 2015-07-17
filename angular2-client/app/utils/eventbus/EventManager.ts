/**
 * Created by tvalentijn on 7/2/15.
 * Based on: http://csharperimage.jeremylikness.com/2012/11/building-javascript-event-aggregator.html
 */

import {Message} from "utils/eventbus/MessageInterface";
import {MessageImpl} from "utils/eventbus/MessageImpl";
import {Subscription} from "utils/eventbus/Subscription";

export class EventManager {

    private _messages: any = [];
    static instance: EventManager;
    static isCreating:Boolean = false;

    constructor() {
        if (!EventManager.isCreating) {
            throw new Error("You can't call new in Singleton instances! Call EventManager.getInstance() instead.");
        }
    }

    static getInstance() {
        if (EventManager.instance == null) {
            EventManager.isCreating = true;
            EventManager.instance = new EventManager();
            EventManager.isCreating = false;
        }
        return EventManager.instance;
    }

    subscribe(message: string, callback: (payload?: any) => void ) {
        var msg: Message;
        msg = this._messages[message] || <Message>(this._messages[message] = new MessageImpl(message));
        return msg.subscribe(callback);
    }

    unSubscribe(message: string, token: number) {
        if (this._messages[message]) {
            (<Message>(this._messages[message])).unSubscribe(token);
        }
    }

    publish(message: string, payload?: any) {
        if (this._messages[message]) {
            (<Message>(this._messages[message])).notify(payload);
        }
    }
}
