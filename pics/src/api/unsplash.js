import axios from "axios";

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {Authorization: 'Client-ID 021f68fe0b8a95c978c1d3aaf0508e2d8d8fb8688aa2385b47ac10cb23db33f1'}
});