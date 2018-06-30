import axios from 'axios';
import filterParams from './filterParams';

export default {
    //get articles from nyt
    getArticles: function(params) {
        return axios.get('/api/nyt', { params: filterParams(params) });
    },

    //save article to our db
    saveArticle: function(articleData) {
        return axios.post('/api/articles', articleData);
    },

    getSavedArticles: function() {
    return axios.get('/api/articles');
}
};
