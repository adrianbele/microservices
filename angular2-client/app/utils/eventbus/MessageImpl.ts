/**
 * Created by tvalentijn on 7/2/15.
 */

import {Message} from "utils/eventbus/MessageInterface";
import {Subscription} from "utils/eventbus/Subscription";

export class MessageImpl implements Message {

    private _subscriptions: Subscription[] = [];
    private _nextId: number = 0;

    constructor(public message: string) {
        console.log("MessageImpl.constructor for [" + message + "]");
    }

    public subscribe(callback: (payload?: any) => void) {
        var subscription = new Subscription(this._nextId++, callback);
        this._subscriptions[subscription.id] = subscription;
        return subscription.id;
    }

    public unSubscribe(id: number) {
        this._subscriptions[id] = undefined;
    }

    public notify(payload?: any) {
        var index;
        for (index = 0; index < this._subscriptions.length; index++) {
            if (this._subscriptions[index]) {
                this._subscriptions[index].callback(payload);
            }
        }
    }
}
