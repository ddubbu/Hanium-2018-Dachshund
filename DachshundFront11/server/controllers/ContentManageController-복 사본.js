
module.exports = function(app, db) {
        //content manage 할때 필요한 정보 가져오기
        function getMains(name, callback) {
            let sql = `SELECT No, Main, Title, Name, Type
                        FROM Content
                        WHERE Name = ? `
    
            db.all(sql, [name], callback) //[]대괄호 안에 값을 위에 ? 값에 대입. 
    
        }
    
        app.get('/api/content/manage/:Name', function(req, res) {
            //post와 put을 제외한 작업엔 무필요 let location = req.body
            //body에 data가 없으니.
            let Name=req.params.Name //간략화
    
            try {
                //변수 없. 아무것도 안 넘김.
                getMains(Name,(err, row) => {
    
                    if (err) {
                        console.error(err.message)
                        console.log('여기')
                        JsonResponse.sendJsonResponse(res, 404)        
                    }
                    
                    //조회해온 모든 결과를 
                    if (row) {
                        console.log(row)    
                        JsonResponse.sendJsonResponse(res, 200, row)                
                            
                    }
                    else {
                        console.log('저기')
                        JsonResponse.sendJsonResponse(res, 404) 
                    }
                })
            } 
            catch (e) {
                JsonResponse.sendJsonResponse(res, 500)  
            }  
        })
        //get 끝
}