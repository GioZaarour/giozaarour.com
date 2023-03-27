import React from 'react';
import ArticleItem from '../components/ArticleItem';
import { ArticleList} from '../helpers/ArticleList';

import "../styles/Writing.css";

function Writing() {
  return (
    <div className="articles">
      {/*<h1>Writings</h1>*/}
      <div className="articleList">
        {ArticleList.map((article, idx) => {
          return (
            <ArticleItem id={idx} title={article.title} thumbnail={article.thumbnail} date={article.date} link={article.hyperlink}/>
          );
        })}
      </div>
    </div>
  )
}

export default Writing