import { IConnection, IRoomHandlerListener } from '../../../api';
import { RoomSessionPollEvent } from '../../../events';
import { PollContentsEvent, PollErrorEvent, PollOfferEvent } from '../../communication';
import { BaseHandler } from './BaseHandler';

export class PollHandler extends BaseHandler
{
    constructor(connection: IConnection, listener: IRoomHandlerListener)
    {
        super(connection, listener);

        connection.addMessageEvent(new PollContentsEvent(this.onPollContentsEvent.bind(this)));
        connection.addMessageEvent(new PollOfferEvent(this.onPollOfferEvent.bind(this)));
        connection.addMessageEvent(new PollErrorEvent(this.onPollErrorEvent.bind(this)));
    }

    private onPollContentsEvent(event: PollContentsEvent): void
    {
        if(!this.listener) return;

        const session = this.listener.getSession(this.roomId);

        if(!session) return;

        const parser = event.getParser();

        if(!parser) return;

        const pollEvent = new RoomSessionPollEvent(RoomSessionPollEvent.CONTENT, session, parser.id);

        pollEvent.startMessage = parser.startMessage;
        pollEvent.endMessage = parser.endMessage;
        pollEvent.numQuestions = parser.numQuestions;
        pollEvent.questionArray = parser.questionArray;
        pollEvent.npsPoll = parser.npsPoll;

        this.listener.events.dispatchEvent(pollEvent);
    }

    private onPollOfferEvent(event: PollOfferEvent): void
    {
        if(!this.listener) return;

        const session = this.listener.getSession(this.roomId);

        if(!session) return;

        const parser = event.getParser();

        if(!parser) return;

        const pollEvent = new RoomSessionPollEvent(RoomSessionPollEvent.OFFER, session, parser.id);

        pollEvent.summary = parser.headline;
        pollEvent.summary = parser.summary;

        this.listener.events.dispatchEvent(pollEvent);
    }

    private onPollErrorEvent(event: PollErrorEvent): void
    {
        if(!this.listener) return;

        const session = this.listener.getSession(this.roomId);

        if(!session) return;

        const parser = event.getParser();

        if(!parser) return;

        const pollEvent = new RoomSessionPollEvent(RoomSessionPollEvent.ERROR, session, -1);
        pollEvent.headline = '???';
        pollEvent.summary = '???';

        this.listener.events.dispatchEvent(pollEvent);
    }
}
