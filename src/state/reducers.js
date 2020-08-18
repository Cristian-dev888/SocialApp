import {OPEN_INVITE_DIALOGE, } from './actions';

function viuLiveApp(state, action) {
    switch (action.type) {
        case OPEN_INVITE_DIALOGE: {
            state = Object.assign({}, state,{
                openedInvitePopup: action.open
            })
            break;
        }
        default: {
            if(action.value !== undefined){
                let obj = {};
                obj[action.type] = action.value;
                state = Object.assign({}, state, obj);
            }
        }
    }
    return state;
}

export default viuLiveApp;