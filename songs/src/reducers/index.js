import {combineReducers} from "redux";

const songs = () => {
    return [
        {title: 'One', duration: '12:34'},
        {title: 'Master of puppets', duration: '5:25'},
        {title: 'Tornado of souls', duration: '4:11'},
        {title: 'Whohaa', duration: '2:32'}
    ]
}

const selectedSong = (selectedSong = null, action) => {
    return action.type === 'SONG_SELECTED'
        ? action.payload
        : selectedSong;
}

export default combineReducers({songs, selectedSong})