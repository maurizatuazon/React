import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 0a8bf2ba8a5eeaf9fbca32e4b10ce84e4cae43bcc6256ca0d6ba7f3d1e2cb012'
    }
});