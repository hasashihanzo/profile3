var app = angular.module('myApp',[]);
app.controller('myController', function($scope) {
	$scope.abm = "About Me";
	$scope.updateInfo = "Updated 20 minuted ago";
	$scope.verify = "Verify";
	$scope.des = "Description about me !";
	$scope.cv = "Công việc";
	$scope.job1 = "https://tranthinh2003.blogspot.com/2022/01/hanh-trinh-truong-thanh-cua-toi.html";
	$scope.job2 = "Donate for me at paypal.me/tranthinh07";
	$scope.contact = "Thông tin liên lạc";
	$scope.contact1 = "trangiathinh599@gmail.com";
	$scope.contact2 = "https://www.facebook.com/groups/kiyoshiandfriend";
	$scope.contactmi = " Contact Me";
	$scope.ifyou = "Nếu có thắc mắc gì thì các bạn có thể liên lạc mình !";
	$scope.modal1 = "Facebook";
	$scope.modal2 = "Instagram";
	$scope.modal3 = "Zalo";
	$scope.modal4 = "Email";
	$scope.modal5 = "SmS";
	$scope.linkfb = "https://www.facebook.com/profile.php?id=100029741415725";
	$scope.linkzl = "https://www.instagram.com/tranthinh220703/";
	$scope.linksc = "https://www.instagram.com/tranthinh220703/";
	$scope.linkgm = "trangiathinh599@gmail.com";
	$scope.phonenumber = "079xxxxxxx";
	$scope.email = "trangiathinh599@gmail.com";
	$scope.title2 = "My Story";
	$scope.contentStory1 = "Kiyoshi là biệt danh của tôi.";
	$scope.contentStory2 = "Người bạn tôi đã được gặp trên mạng. Cô ấy là 1 best Liliana với khả năng gánh team cực đỉnh. Những pha hightlight cũng có. Bên cạnh đó không thể quên những pha mù light do chính cô ấy tạo ra. Tuy là thế cô ấy còn được biết đến với biệt danh Bà Hoàng drama";
	$scope.storytitle1 = "Hành trình trưởng thành hơn từng ngày";
	$scope.storytitle2 = "Bạn khác giới khác giới khá thân";
	$scope.nothinglikeus = "Thank for watching";
	$scope.thankall = "Cảm ơn mọi người đã lắng nghe";
	$scope.au = "Kiyoshi";
	$scope.phone = false;
	$scope.reverse = function () {
		$scope.phone= !$scope.phone;
	}
	$scope.gmail = false;
	$scope.reverse2 = function () {
		$scope.gmail= !$scope.gmail;
	};
});