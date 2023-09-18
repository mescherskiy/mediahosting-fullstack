const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, 'frontend', 'build')));
app.get('/', (req,res) => {
  res.sendFile(path.join(__dirname, 'frontend', 'build', 'index.html'));
});
app.get('*', (req,res) => {
  res.sendFile(path.join(__dirname, 'frontend', 'build', 'index.html'));
});
app.listen(port, ()=>{
  console.log("Server is running on port: ", port)
})