import {Deck} from './view/deck';

import { io } from 'socket.io-client/dist/socket.io.js';
import {Role} from './model/quiz';

import notificationService from './service/notificationService';

export interface MultiplexConfig {
    role: Role
    presentationId: string;
    presentationSecret: string;
    presentationSocketUrl: string;
}

interface Socket {
    on(message: string, callback: (event:any)=>void): void;
}

let deck: Deck;

function initTraineeMultiplex(config: MultiplexConfig){
    const socket:Socket = io(config.presentationSocketUrl);
    socket.on('connect', () => {
        console.log('Connected to multiplex engine as a client');

        // removing controls from the deck engine
        deck.configure({
            controls: false,
            keyboard: false,
        });

        notificationService.info('Connected to multiplex engine as a client');
    });
    socket.on('connect_error', (err) => {
        console.log('Unable to connect to multiplex engine');
        // adding controls back to allow user to self navigate
        deck.configure({
            controls: true,
            keyboard: true,
        });

        notificationService.warn('Unable to connect to multiplex engine');
    });

    socket.on(config.presentationId, function(message) {
        console.log(message);
        // ignore data from sockets that aren't ours
        if (message.socketId !== config.presentationId) { return; }

        if ( message.state ) {
            deck.setState(message.state);
        }
        if( message.type ){
            deck.dispatchEvent({
                type: message.type,
                data: {}
            });
        }
    });
}

function initTrainerMultiplex(config: MultiplexConfig){
    const socket = io(config.presentationSocketUrl);
    socket.on('connect', () => {
        console.log('Connected to multiplex engine as a presenter');
        notificationService.info('Connected to multiplex engine as presenter');
    });
    socket.on('connect_error', (err) => {
        console.log('Unable to connect to multiplex engine');
        notificationService.warn('Unable to connect to multiplex engine');
    });

    function postState( evt ) {
        const messageData = {
            state: deck.getState(),
            secret: config.presentationSecret,
            socketId: config.presentationId,
            content: (evt || {}).content
        };
        console.log('sending message ', messageData);
        socket.emit('broadcast', messageData );
    }

    function postEvent( evt ) {
        const messageData = {
            secret: config.presentationSecret,
            socketId: config.presentationId,
            type: evt.type
        };
        console.log('sending message ', messageData);
        socket.emit('broadcast', messageData );
    }

    // Monitor events that trigger a change in state
    deck.on( 'slidechanged', postState );
    deck.on( 'fragmentshown', postState );
    deck.on( 'fragmenthidden', postState );
    deck.on( 'overviewhidden', postState );
    deck.on( 'overviewshown', postState );
    deck.on( 'paused', postState );
    deck.on( 'resumed', postState );

    // Monitor events that should be broadcasted to other presentations
    deck.on( 'quiz-show-responses', postEvent );

    console.log('Initialized multiplexing');
}

export function initMultiplex(deckParam: Deck, config: MultiplexConfig){
    deck = deckParam;
    console.log(config);
    if(config.role === Role.TRAINEE){
        initTraineeMultiplex(config);
    }
    if(config.role === Role.TRAINER){
        initTrainerMultiplex(config);
    }
}
