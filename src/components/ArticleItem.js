import React from 'react'

function ArticleItem({thumbnail, title, date, link}) {
  return (
    <div
      className="articleItem"
      onClick={() => {
        //navigate(link);
        window.open(link, "Article").focus();
        //window.location.replace("/", "Home");
        //window.scrollTo(0,0);
      }}
    >
        <div style={{backgroundImage: `url(${thumbnail})` }} className="bgImage" />
        <h1> {title}</h1>
        <p>{date}</p>
    </div>
  )
}

export default ArticleItem