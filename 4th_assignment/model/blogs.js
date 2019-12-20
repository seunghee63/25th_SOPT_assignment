const statusCode = require('../module/statusCode');
const responseMessage = require('../module/responseMessage');
const authUtil = require('../module/authUtil');

blogDB = []

const blog = {
    create: (user, address) => {
        return new Promise((resolve, rejects) => {

            //블로그 만들기 성공 
            const blog = {
                user,
                address
            }
                
            blogDB.push(blog);
            console.log(blogDB);
            const result = blog;

            resolve({
                code:statusCode.OK,
                json:authUtil.successTrue(responseMessage.BLOGS_CREATE_SUCCESS, result)
            })
            return;
        })
    },
    read: () => {

    },
    readAll: () => {
        return new Promise((resolve, rejects) => {
            resolve({
                code: statusCode.OK,
                json: authUtil.successTrue(responseMessage.BLOGS_READ_ALL_SUCCESS, blogDB)
            });
        })
    },

    update: (idx, user, address) => {
        return new Promise((resolve, rejects) => {

            blogDB[idx].user = user;
            blogDB[idx].address = address;

            resolve({
                code: statusCode.OK,
                json: authUtil.successTrue(responseMessage.BLOG_UPDATE_SUCCESS, blogDB[idx])
            });
            
            return;
        })
    },
    remove: (idx) => {
        
        return new Promise((resolve, reject) => {

            if(idx >= blogDB.length){
                resolve({
                    code: statusCode.BAD_REQUEST,
                    json: authUtil.successFalse(responseMessage.NO_BLOG)
                });
                return;
            }

            blogDB.splice(idx, 1);
            resolve({
                code: statusCode.OK,
                json: authUtil.successTrue(responseMessage.BLOGS_DELETE_SUCCESS, blogDB)
            });
        })
    }
}
module.exports = blog;