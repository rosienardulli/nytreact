import React, { Component } from 'react';
import API from './../../utils/API';
import Article from './../../Components/Article';

class Home extends Component {
   state = {
       articles: [],
       q: "",
       start_year: "",
       end_year: "",
   }

   componentDidMount() {
    this.getArticles();
    this.getSavedArticles();
    }

   //my methods
   getArticles = () => {
       API.getArticles({
           q: this.state.q,
           start_year: this.state.start_year,
           end_year: this.state.end_year
       })
    
       .then(res =>
    this.setState({
        articles: res.data,
    })
       )
   
   .catch(err => console.log(err));
    }
    handleArticleSave = id => {
        const article = this.state.articles.find(article => article._id === id);
        API.saveArticle(article).then(res => {
            this.getSavedArticles();
            this.getArticles()
    });
}

    getSavedArticles = () => {
        API.getSavedArticles()
        .then(res => 
        this.setState({
            savedArticles: res.data
        })
    )
        .catch(err => console.log(err));
    }

   render() {
       return (
           <div>
               I am a list of articles
               {this.state.articles.map(article => (
                   <Article
                   key={article._id}
                   _id={article._id}
                   title={article.headline.main}
                   url={article.web_url}
                   date={article.pub_data}
                   handleClick={this.handleArticleSave}
                   buttonText="Save Article"
                   />
               ))}
               <p> Saved Articles</p>
               {this.state.articles.map(article => (
                   <Article
                   key={article._id}
                   _id={article._id}
                   title={article.headline.main}
                   buttonText="Delete Article"
                   />
               ))}
           </div>
       )
    }
   };

export default Home;