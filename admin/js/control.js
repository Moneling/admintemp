(function(angular){
 var userAPP =angular.module('userAPP');
 userAPP.controller('userLisrControl', ['$scope', function ($scope) {

 	$scope.users=[
 	{ID:1001,imageUrl:"images/admin.png",phoneNum:18812888812,userName:"祥晴",
 	businessName:"中国航天",businessQuality:"国企",busAddress:"海淀区",
 	companyStaue:"100-10000",jobNum:11,setFile:11,lasrLoginTime:"2016-11-11",action:"查看"},
 	{ID:1002,imageUrl:"images/admin.png",phoneNum:18812888812,userName:"祥晴",
 	businessName:"中国航天",businessQuality:"国企",busAddress:"海淀区",
 	companyStaue:"100-10000",jobNum:11,setFile:11,lasrLoginTime:"2016-11-11",action:"查看"},
 	{ID:1003,imageUrl:"images/admin.png",phoneNum:18812888812,userName:"祥晴",
 	businessName:"中国航天",businessQuality:"国企",busAddress:"海淀区",
 	companyStaue:"100-10000",jobNum:11,setFile:11,lasrLoginTime:"2016-11-11",action:"查看"},
 	{ID:1004,imageUrl:"images/admin.png",phoneNum:18812888812,userName:"祥晴",
 	businessName:"中国航天",businessQuality:"国企",busAddress:"海淀区",
 	companyStaue:"100-10000",jobNum:11,setFile:11,lasrLoginTime:"2016-11-11",action:"查看"},
 	{ID:1005,imageUrl:"images/admin.png",phoneNum:18832188812,userName:"祥晴",
 	businessName:"中国航天5",businessQuality:"国企",busAddress:"海淀区",
 	companyStaue:"100-10000",jobNum:11,setFile:11,lasrLoginTime:"2016-12-11",action:"查看"},

 	]
 	
 }])

})(angular)