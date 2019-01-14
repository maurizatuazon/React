import axios from 'axios';
const KEY = 'AIzaSyAVlSgILu0zgqYhqKH7Ex39aj_LEgk9YqU';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});