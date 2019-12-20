const statusCode = require('../module/statusCode');
const responseMessage = require('../module/responseMessage');
const authUtil = require('../module/authUtil');

articleDB = []

const article = {
    create: (blogIdx, title, contents) => {
        return new Promise((resolve, rejects) => {

            //게시글 만들기 성공 
            const article = {
                blogIdx,
                title,
                contents
            }
                
            articleDB.push(article);
            console.log(articleDB);
            const result = article;

            resolve({
                code:statusCode.OK,
                json:authUtil.successTrue(responseMessage.ARTICLE_CREATE_SUCCESS, result)
            })
            return;
        })
    },
    read: () => {

    },
    readAll: (blogIdx) => {
        return new Promise((resolve, rejects) => {

            const selectedArticle = articleDB.filter(element =>{
                console.log(element)
                return element.blogIdx == blogIdx;
            })

            resolve({
                code: statusCode.OK,
                json: authUtil.successTrue(responseMessage.ARTICLE_READ_ALL_SUCCESS, selectedArticle)
            });
        })
    },

    update: (blogIdx, idx, title, contents) => {
        return new Promise((resolve, rejects) => {

            //TODO blogIdx
            
            console.log(idx);
            console.log(title);

            articleDB[idx].title = title;
            articleDB[idx].contents = contents;

            resolve({
                code: statusCode.OK,
                json: authUtil.successTrue(responseMessage.ARTICLE_UPDATE_SUCCESS, articleDB[idx])
            });
            
            return;
        })
    },

    remove: (blogIdx, idx) => {
        
        return new Promise((resolve, reject) => {

            //TODO blogIdx

            if(idx >= articleDB.length){
                resolve({
                    code: statusCode.BAD_REQUEST,
                    json: authUtil.successFalse(responseMessage.NO_ARTICLE)
                });
                return;
            }

            articleDB.splice(idx, 1);
            resolve({
                code: statusCode.OK,
                json: authUtil.successTrue(responseMessage.ARTICLE_DELETE_SUCCESS, articleDB)
            });
        })
    }
}
module.exports = article;