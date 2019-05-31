const host = '1zyhcj.1-zhao.cn'
const referer = `https://${host}`
const phoneReg = /^1[34578]\d{9}$/ // 正则手机号码
module.exports = {
    phoneReg,
    //获取openId
    GetSaveEngineerOpenId: `${referer}/CollectionAPI/GetSaveEngineerOpenId`,
    //判断是否绑定
    IsBanDing: `${referer}/CollectionAPI/IsBanDing`,
    //获取手机号码
    GetUserPhone: `${referer}/CollectionAPI/GetUserPhone`,
    //获取用户信息
    GetUserInfo: `${referer}/CollectionAPI/GetUserInfo`,
    //提交用户信息
    PostUserData: `${referer}/CollectionAPI/PostUserData`,
    //获取图片条款等信息 type 1 登录页图片 2 提交页图片 3 政策信息
    GetCollection: `${referer}/CollectionAPI/GetCollection`,
}