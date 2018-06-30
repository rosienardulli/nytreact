import React, { Component } from 'react';
import API from './../../utils/API';


class Home extends Component {
   state = {
       articles: [],
       q: "",
       start_year: "",
       end_year: "",
   }

   componentDidMount() {
    this.getArticles();
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
   render() {
       return (
           <div>
               I am a list of articles
               {this.state.articles.map(article => (
                   <div>{article.headline.main}</div>
               ))}
           </div>
       )
    }
   };

export default Home;