var mysql = require('mysql'); // mysql 모듈 설치가 필요하다.


var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'java89',
  password : '1111',
  database : 'java89db'
});//javascript 객체

connection.connect();
console.log("연결 되었음.");

//select 질의하기
connection.query(
  'select mno, name, tel, email, pwd from memb', 
  function(err, rows, fields) { // 서버에서 결과를 받았을 때 호출되는 함수
                //ㄴ받은 데이터
    if (err) throw err;
    
    for (var i = 0; i < rows.length; i++) {
      console.log(rows[i].mno, rows[i].name, rows[i].tel, rows[i].email, rows[i].pwd);
    }
});

connection.end(); //바로 끊는 게 아니라 실행중인 SQL이 있으면, 모두 종료 후 연결 끊기
console.log("연결 끊었음."); // 비동기라 얘는 실행됨.