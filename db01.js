var mysql = require('mysql'); // mysql 모듈 설치가 필요하다.


var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'java89',
  password : '1111',
  database : 'java89db'
});//javascript 객체

connection.connect();
console.log("연결 되었음.");


connection.end(); //바로 끊는 게 아니라 실행중인 SQL이 있으면, 모두 종료 후 연결 끊기 
console.log("연결 끊었음.");