require('dotenv').config();

const express = require('express');
const hbs = require('hbs');

const app = express();

app.set('view engine', 'hbs');
app.set('views', __dirname + '/views');

app.use(express.static('public'));



// 1: in the home,list all the students who took the exam (list all the students)
let {students} = require('./exam-info');
// ... Your code here

// 2: in the '/results' list all the students who passed the test and their score.
// Also, students should be in descending order based on their score.



app.get("/students", (req, res) => {
  students.sort((a, b) => {
    if (a.score > b.score) {
      return 1
    }
    else if (a.score < b.score) {
      return -1
    }
    else {
      return 0
    }
  })

  let results = students.filter((grade)=>{
    return grade.score > 6 
      
    
  })
  
  console.log(results);
  
    res.render('results.hbs', {results})
})



// ... Your code here

app.listen(process.env.PORT, () =>
  console.log(`App running on ${process.env.PORT}.`)
);
