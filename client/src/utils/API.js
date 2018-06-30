import axios from 'axios';
import filterParams from './filterParams';

export default {
    //get articles from nyt
    getArticles: function(params) {
        return axios.get('/api/nyt', { params: filterParams(params) });
    }
};