var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles ={ 
'article-one': {
    title:'Article One (SK Jaiswal)',
    heading:'Articel One',
    date:'Aug 07 2017',
    content:`
                <p>
                        This is the content for my First Article.This is the content for my First Article.This is the content for my First Article.This is the content for my First Article.This is the content for my First Article.This is the content for my First Article.
                </p>
                <p>
                    This is the content for my First Article.This is the content for my First Article.This is the content for my First Article.This is the content for my First Article.This is the content for my First Article.This is the content for my First Article.
                </p>
                <p>
                    This is the content for my First Article.This is the content for my First Article.This is the content for my First Article.This is the content for my First Article.This is the content for my First Article.This is the content for my First Article.
                </p>`
    
},
'article-two':{
    title:'Article Two (SK Jaiswal)',
    heading:'Articel Two',
    date:'Aug 08 2017',
    content:`
                <p>
                    This is the content for my Second Article.
              
                </p>`},
'article-three':{
    title:'Article Three (SK Jaiswal)',
    heading:'Articel Three',
    date:'Aug 09 2017',
    content:`
                <p>
                    This is the content for my Third Article.
              
                </p>`}
};
function createTemplate (data){
    var title = data.title;
    var heading = data.heading;
    var date = data. date;
    var content = data.content;
var htmlTemplate= `
<html>
    <head>
        <title>
            ${title}
        </title>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <link href="/ui/style.css" rel="stylesheet" />
    </head>
    <body>
     <div class="container">
            <div>
                <a href="/">Home</a>
            </div>
            <hr/>
            <h3>
                ${heading}
            </h3>
            <div>
                ${date}
            </div>
            <div>
             ${content}  
            </div>
     </div>
    </body>
</html>

`;
return htmlTemplate;
}


app.get('/:articleName', function (req, res) {
    //articleName == article-one
    //articles[articleName] == {}content object for article one
    var articleName = req. parans.articleName;
  res.send(createTemplate(articles[articleName]));
});

app.get('/article-one', function (req, res) {
    res.sendFile(path.join(__dirname, 'ui', 'article-one.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
