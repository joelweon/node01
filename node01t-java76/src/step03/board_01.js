// 게시물 목록 출력 오류 사례1:
// => DBMS 결과를 가져오기 전에 클라이언트로 출력할 경우
var http = require('http');
var mysql = require('mysql');
var url = require('url');

//1) DB 커넥션 준비 
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'java89',
  password : '1111',
  database : 'java89db'
});

connection.connect();

// 2) HTTP 서버 준비
var httpServer = http.createServer(function(request, response) {
  var urlInfo = url.parse(request.url, true);
  response.writeHead(200, {
    'Content-Type' : 'text/html;charset=UTF-8'
  });
	
	if (urlInfo.pathname == '/board/list.do') {
		response.write("<!DOCTYPE html>\n");
		response.write("<html>\n");
		response.write("<head>\n");
		response.write("<meta charset=\"UTF-8\">\n");
		response.write("<title>게시판</title>\n");
		response.write("</head>\n");
		response.write("<body>\n");
		response.write("<h1>게시물 목록</h1>\n");
	
		// 게시물 목록 가져오기
		connection.query(
		  'select bdno, titl, conts from board', 
		  function(err, rows, fields) { // 서버에서 결과를 받았을 때 호출되는 함수
			  if (err) throw err;
			  response.write("<table>\n");
			  response.write("<tr>\n");
			  response.write("	<th>번호</th><th>제목</th><th>내용</th>\n");
			  response.write("</tr>\n");
			  
			  for (var i = 0; i < rows.length; i++) {
				  response.write("<tr>\n");
				  response.write("  <td>" + rows[i].bdno + "</td>\n");
				  response.write("  <td>" + rows[i].titl + "</td>\n");
				  response.write("  <td>" + rows[i].conts + "</td>\n");
				  response.write("</tr>\n");
			  }
			  
			  response.write("</table>");
		});
		
		response.write("</body>\n");
		response.write("</html>\n");
	}
	
	/*response.end();  에러........*/
});

// 3) HTTP 서버 가동
httpServer.listen(8989);
console.log("서버 실행 중...");

