module.exports = function (app, db) {

    //content manage 할때 필요한 정보 가져오기
    function getContents(name, callback) {
        let sql = `SELECT No, Main, Title, Name, Type
                        FROM Content
                        WHERE Name = ? `

        db.all(sql, [name], callback) //[]대괄호 안에 값을 위에 ? 값에 대입. 

    }
    //js>ContentController>init_Main
    //즉, 콘텐츠 관리를 위한 보드 네임을 넘겨서 존재하는 콘텐츠를 리스트화하는 함수
    app.get('/api/content/manage/:Name', function (req, res) {
        //post와 put을 제외한 작업엔 무필요 let location = req.body
        //body에 data가 없으니.
        let Name = req.params.Name //간략화

        try {
            //변수 없. 아무것도 안 넘김.
            getContents(Name, (err, row) => {

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


    //boardlist 가져옴.
    function getBoard1(callback) {
        let sql = `SELECT Name, IsApproval
                            FROM Board `

        db.all(sql, [], callback) //[]대괄호 안에 값을 위에 ? 값에 대입. 

    }
    app.get('/api/get/boardlist', function (req, res) {
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

    //board 새로 추가(Post)
    app.post('/api/board/add', function (req, res) {

        console.log('aaa')
        let Upload = req.body
        console.log('업로드')
        console.log(Upload)
        try {
            let sql2 = `INSERT INTO Board(Name,IsApproval) 
                        values (?,?)  `
            if (Upload === undefined ||
                Upload.addB === undefined || Upload.addB.length <= 0 ||
                Upload.isApproval === undefined || Upload.isApproval.length <= 0) {
                console.log('addB잘 넘어온거 같은데.. 실패.ㅜ' + Upload)
                JsonResponse.sendJsonResponse(res, 400)
                return
            }
            db.run(sql2, [Upload.addB, Upload.isApproval], (err) => { //정의한 sql 순서대로

                if (err) {
                    console.error(err.message)
                    console.log('??' + Upload.addB)
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

    ////////////////////////////////////////////////////////

    //content manage 할때 필요한 정보 가져오기
    function getRotation(callback) {
        let sql = `SELECT Ro_Text, Ro_Image, Ro_Media
                        FROM Content_Rotation`

        db.all(sql, [], callback) //[]대괄호 안에 값을 위에 ? 값에 대입. 

    }
    //js>ContentController>init_Main
    //즉, 콘텐츠 관리를 위한 보드 네임을 넘겨서 존재하는 콘텐츠를 리스트화하는 함수
    app.get('/api/get/rotation/', function (req, res) {
        try {
            //변수 없. 아무것도 안 넘김.
            getRotation( (err, row) => {

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
}