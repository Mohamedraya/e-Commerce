import dispatcher from './Dispatcher';
import {EventEmitter} from 'events';

class AuthStore extends EventEmitter{
    token = '';
    user = null;


    setToken (token) {
       this.token = token;
       this.emit('change');
    }

    setUser (user) {
       this.user = user;
       this.emit('change');
    }

    handle (action) {
        switch (action.type) {
            case 'SET_TOKEN':
                this.setToken(action.payload.token);
                break;

            case 'SET_USER':
                this.setUser(action.payload.user);
                break;    
        }
    }
}

const authstore = new AuthStore();

dispatcher.register(authstore.handle.bind(authstore));

export default authstore;