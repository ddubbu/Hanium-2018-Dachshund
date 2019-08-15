//content upload시 다 선택해야함?
//그래야하네, Board에서도 승인여부가 이미 값이 있었고 
//수정 누르기 전에 항상 장소를 기입했었구

module.exports = function(app, db) {

    //pk에 해당하는 data 유무 확인
    function getContent(num, callback) {
        let sql = `SELECT Start_Date, End_Date, Title, Type, No, Main
                    FROM Content 
                    Where No = ? `

        db.all(sql, [num], callback) //[]대괄호 안에 값을 위에 ? 값에 대입. 

    }

    function getAllContent(callback) {
        let sql = `SELECT Start_Date, End_Date, Title, Type, No, Main
                    FROM Content`

        db.all(sql, [], callback) //[]대괄호 안에 값을 위에 ? 값에 대입. 

    }

    //put
    app.put('/api/content/upload', function(req, res) {
        let Upload = req.body
        /* 넘어온 객체 데이터
            let data = {
                no : $scope.inputData.No,
                //b_sel : $scope.inputData.B_Sel,
                t_sel : $scope.inputData.T_Sel,
                s_date: $scope.inputData.start_date,
                e_date: $scope.inputData.end_date,
                title :$scope.inputData.Title,
                main :$scope.inputData.Main,
            }
        */
       console.log('put start')
       console.log(Upload) 
        try {

            let sql = `UPDATE Content SET Type = ?, 
                                        Start_Date = ?, 
                                        End_Date = ?, 
                                        Title = ?,
                                        Main = ?                   
                       WHERE No = ? `

            if (Upload === undefined ||  //Upload.no === undefined ||
                Upload.t_sel === undefined || Upload.t_sel.length <= 0 ||
                Upload.s_date === undefined || Upload.s_date.length <= 0 ||
                Upload.e_date ===undefined || Upload.e_date.length <= 0 ||
                Upload.title ===undefined|| Upload.title.length <= 0 ||
                Upload.main ===undefined|| Upload.main.length <= 0 ){
                
                //console.log(Upload) 
                //console.log(Upload.no)
                //console.log(Upload.t_sel)
                JsonResponse.sendJsonResponse(res, 400)
                return
            }

            getContent(Upload.no, (err, row) => {

                if (err) {
                    console.error(err.message)
                    JsonResponse.sendJsonResponse(res, 404)        
                }
        
                if (row) {
                    console.log(row)
                    db.run(sql, [Upload.t_sel,
                                Upload.s_date,
                                Upload.e_date,
                                Upload.title,
                                Upload.main,
                                Upload.no], (err) => { //정의한 sql 순서대로
                        
                        if (err) {
                            console.error(err.message)
                            JsonResponse.sendJsonResponse(res, 404)
                            
                            return      
                        }
                        JsonResponse.sendJsonResponse(res, 200)                
                        
                    }) 
                }
                else {
                    JsonResponse.sendJsonResponse(res, 404) 
                }
            })
        } 
        catch (e) {
            console.log(e)
            JsonResponse.sendJsonResponse(res, 500)  
        }  
    })
    //put끝

    //get
    app.get('/api/content/upload', function(req, res) {
        //post와 put을 제외한 작업엔 무필요 let location = req.body
        //body에 data가 없으니.

        try {
            //변수 없. 아무것도 안 넘김.
            getAllContent(     (err, row) => {

                if (err) {
                    console.error(err.message)
                    JsonResponse.sendJsonResponse(res, 404)        
                }
                
                //조회해온 모든 결과를 
                if (row) {
                    console.log(row)    
                        JsonResponse.sendJsonResponse(res, 200, row)                
                        
                }
                else {
                    JsonResponse.sendJsonResponse(res, 404) 
                }
            })
        } 
        catch (e) {
            JsonResponse.sendJsonResponse(res, 500)  
        }  
    })
    //get 끝
    
    
    //del 시작
    app.delete('/api/content/manage/:No', function(req, res) { 
        //api/board/뒤에 있는 나머지 url값을 req.params.Name변수에 할당하겠다.
        let No=req.params.No //간략화

        try {

            let sql = `DELETE From Content WHERE No = ? `

            if (No === undefined || No.length <= 0 ) {
                JsonResponse.sendJsonResponse(res, 400)
                return
            }

            getBoard(No, (err, row) => {
                console.log(Name)
                if (err) {
                    console.error(err.message)
                    JsonResponse.sendJsonResponse(res, 404)        
                }
        
                if (row) {
                    console.log(row)
                    db.run(sql, [No], (err) => {
                        if (err) {
                            console.error(err.message)
                            JsonResponse.sendJsonResponse(res, 404)
                            
                            return      
                        }
                        JsonResponse.sendJsonResponse(res, 200)  //json은 중괄호로 객체화해서 data보내기              
                        
                    }) 
                }
                else {
                    JsonResponse.sendJsonResponse(res, 404) 
                }
            })
        } 
        catch (e) {
            JsonResponse.sendJsonResponse(res, 500)  
        }  
    })
    //del 끝






}