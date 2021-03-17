const express = require('express');
const app = express();

const courses = [
  {id: 1, name: 'course1'},
  {id: 2, name: 'course2'},
  {id: 3, name: 'course3'},
  {id: 4, name: 'course4'}
]

app.get('/', (req, res) => {
  res.send('Hello world');
});

app.get('/api/courses', (req, res) => {
  res.send([1,2,3,4]);  
});

app.get('/api/courses/:id', (req, res) => {
  const course = courses.find(c => c.id === parseInt(req.params.id));
  if(!course) res.status(404).send('The course you are looking for is not found\n please try another ID')
  res.send(course)
});

app.listen(8080);