/**
 * Created by tvalentijn on 7/2/15.
 */

export interface MessageInterface {
    subscribe(callback: (payload?: any) => void): number;
    unSubscribe(id: number): void;
    notify(payload?: any): void;
}
