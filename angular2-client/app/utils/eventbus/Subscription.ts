/**
 * Created by tvalentijn on 7/2/15.
 */

export class Subscription {
    constructor (
        public id: number,
        public callback: (payload?: any) => void) {
    }
}