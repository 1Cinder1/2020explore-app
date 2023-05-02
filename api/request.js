import {authRequest,basicRequest} from "@/api/index.js"
// 获取文章列表
export const getArticleList=()=>{
	return authRequest({url:'/article/list',method:'get'})
}
//获取用户信息
export const getUserInfo=(params)=>{
	return basicRequest({url:'/login',method:'post',data:params})
}
//注册
export const userRegister=(params)=>{
	return basicRequest({url:'/signup/email',method:'post',data:params})
}
//获取邮箱验证码
export const getEmailCode=(email)=>{
	return basicRequest({url:`/signup/send/emailcode?email=${email}`,method:'get'})
}
// 文章收藏接口
export const getArticleCollect=(articleId)=>{
	return authRequest({url:`/article/collect?articleId=${articleId}`,method:'get'})
}
// 获取用户的收藏列表，返回数据为文章详细数据列表
export const getArticleCollectList=()=>{
	return authRequest({url:'/article/collect-list',method:'get'})
}


// 文章点赞接口
export const getArticleLike=(articleId)=>{
	return authRequest({url:`/article/like?articleId=${articleId}`,method:'get'})
}
// 根据用户返回用户的点赞收藏列表，返回为文章的id
export const getArticleLikeCollectList=()=>{
	return authRequest({url:'/article/like-collect-list',method:'get'})
}
// 发布文章接口
export const ArticlePublich=(articleVos)=>{
	return authRequest({url:'/article/publish',method:'post',data:articleVos})
}
// 点击次数加一
export const getArticleAdd=(articleId)=>{
	return authRequest({url:`/article/view-add?articleId=${articleId}`,method:'get'})
}
// 获取所有常变数据的平均值
export const getDataAverage=()=>{
	return authRequest({url:'/data/average',method:'get'})
}
// 获取心脏类数据历史列表
export const getHeartHistory=()=>{
	return authRequest({url:'/data/heart-history',method:'get'})
}
//心脏病预测历史数据
export const getHeartPredictHistory=()=>{
	return authRequest({url:'/predict/heart-predict-history',method:'get'})
}
// 中风预测历史数据
export const getStrokePredictHistory=()=>{
	return authRequest({url:'/predict/stroke-predict-history',method:'get'})
}

// 重置密码发送验证码
export const reviseCaptcha=()=>{
	return authRequest({url:'/revise-Captcha',method:'get'})
}
// 重置密码
export const revisePassword=(captcha,newPassword)=>{
	return authRequest({url:`/revise-password/${captcha}/${newPassword}`,method:'post'})
}


// 获取用户基本健康信息和用户信息
export const getUserBasicInfo=()=>{
	return authRequest({url:`/user/info`,method:'get'})
}
// 修改用户的健康信息
export const editHealthInfo=(HealthInfoVo)=>{
	return authRequest({url:`/user/editHealthInfo`,method:'post',data:HealthInfoVo})
}
