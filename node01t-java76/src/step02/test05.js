// delete 실행 
var mysql = require('mysql'); 

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'java89',
  password : '1111',
  database : 'java89db'
});

connection.connect();

// select 질의하기
connection.query(
  "delete from memb where email=?", 
  ['okok'], 
  function(err, rows, fields) {
	  if (err) throw err;
	  
	  console.log("삭제 성공!");
});


connection.end();
