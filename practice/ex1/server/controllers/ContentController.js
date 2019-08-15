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

    //Board list 가져오기 위함.
    function getBoard1(callback) {
        let sql = `SELECT Name, IsApproval
                    FROM Board `

        db.all(sql, [], callback) //[]대괄호 안에 값을 위에 ? 값에 대입. 

    }

    //Content > Main 내용 가져오기 위함.
/*    function getMains(Name, callback) {
        let sql = `SELECT Main, Title, Name
                    FROM Content
                    WHERE Name = ? `

        db.all(sql, [Name], callback) //[]대괄호 안에 값을 위에 ? 값에 대입. 

    }
*/

   function getMains(name, callback) {
        let sql = `SELECT Main, Title, Name
                    FROM Content
                    WHERE Name = ? `

        db.all(sql, [name], callback) //[]대괄호 안에 값을 위에 ? 값에 대입. 

    }

    function getBoard(Name, callback) {
        let sql = `SELECT Location, Name, IsApproval, Reg_Date
                    FROM Board
                    WHERE Name = ? `

        db.get(sql, [Name], callback) //[]대괄호 안에 값을 위에 ? 값에 대입. 

    }
/*
    //////////////////////////////content manage를 위한 작업
    app.get('/api/content/manage/:Name', function(req,res){

        let Name=req.params.Name

        try {
            //변수 없. 아무것도 안 넘김.
            getMains(Name,(err, row) => {

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

*/








    //////////////////////////////////////////content upload(put) or post
    //put
    app.put('/api/content/upload/:No', function (req, res) {
        let Upload = req.body
        let No=req.params.No
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
                                        Main = ?,
                                        Name = ?
                       WHERE No = ? `

            if (Upload === undefined ||  //Upload.no === undefined ||
                Upload.b_sel === undefined || Upload.b_sel.length <= 0 ||
                Upload.t_sel === undefined || Upload.t_sel.length <= 0 ||
                Upload.s_date === undefined || Upload.s_date.length <= 0 ||
                Upload.e_date === undefined || Upload.e_date.length <= 0 ||
                Upload.title === undefined || Upload.title.length <= 0 ||
                Upload.main === undefined || Upload.main.length <= 0) {

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
                                Upload.b_sel,
                                No], (err) => { //정의한 sql 순서대로

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

    //Post
    app.post('/api/content/upload', function (req, res) {
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

            let sql = `INSERT INTO Content(Type,Start_Date,End_Date,Title,Main,Name) 
                        values ( ?,?,?,?,?,?)  `

            if (Upload === undefined ||  //Upload.no === undefined ||
                Upload.b_sel === undefined || Upload.b_sel.length <= 0 ||
                Upload.t_sel === undefined || Upload.t_sel.length <= 0 ||
                Upload.s_date === undefined || Upload.s_date.length <= 0 ||
                Upload.e_date === undefined || Upload.e_date.length <= 0 ||
                Upload.title === undefined || Upload.title.length <= 0 ||
                Upload.main === undefined || Upload.main.length <= 0) {

                //console.log(Upload) 
                //console.log(Upload.no)
                //console.log(Upload.t_sel)
                JsonResponse.sendJsonResponse(res, 400)
                return
            }
                    db.run(sql, [Upload.t_sel,
                                Upload.s_date,
                                Upload.e_date,
                                Upload.title,
                                Upload.main,
                                Upload.b_sel], (err) => { //정의한 sql 순서대로

                                    if (err) {
                                        console.error(err.message)
                                        JsonResponse.sendJsonResponse(res, 404)

                                        return
                                    }
                                    JsonResponse.sendJsonResponse(res, 200)

                                })
                }
                
        catch (e) {
            console.log(e)
            JsonResponse.sendJsonResponse(res, 500)
        }
    })
    //post끝


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
    
   /////////////////////////////////////////////
   app.get('/api/content', function (req, res) {
    try {
        //변수 없. 아무것도 안 넘김.
        getBoard1((err, row) => {

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
   /////////////////////////////////////////////
    
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