(function ($, win) {
	// cached element and class name.
	var btnTabNotice = $('.new-jebid-multi-notice-tab-wrp'),
		btnTabLink = $('.new-jebid-multi-notice-tab-link'),
		noticeBoard = $('.new-jebid-notice-board'),
		linkActiveClassName = 'new-jebid-multi-notice-tab__active',
		blindClassName = 'new-jebid-blind';
	
	
	// delegate event from its parent to target link and show&hide its own board.
	btnTabNotice.delegate('a', 'click', function () {
		var target = $(this), idx = target.parent().index();
		
		btnTabLink.removeClass(linkActiveClassName);
		target.addClass(linkActiveClassName);
		
		noticeBoard.addClass(blindClassName);
		$('.new-jebid-notice-tab-0'+parseInt(idx+1,10)).removeClass(blindClassName);
	});
	
	// Follow up page scroll
	var
		subpageContents = $('.new-jebid-subpage-contents'),
		subLeftArea = $('.new-jebid-sub-left-area');
	
	$(win).bind('scroll', function () {
		var scrollTop = getCurrentScrollTop();
		console.log(scrollTop);
		
		if(scrollTop >= 128){
			subpageContents.addClass('new-jebid-left-area-active');
			subLeftArea.addClass('new-jebid-fixed-left');
		}else{
			subpageContents.removeClass('new-jebid-left-area-active');
			subLeftArea.removeClass('new-jebid-fixed-left');
		}
	});
	
	
	function getCurrentScrollTop(){
		return $(win).scrollTop();
	}
	
	function addFavorite() {
		if(win.external.AddFavorite){
			win.external.AddFavorite('http://www.naver.com/', '네이버'); // 수정할 것
		}else{
			alert('사용하시는 브라우저는 본 기능을 지원하지 않습니다. 수동으로 설정해주세요.');
		}
	}
	
	function setHomePage(){
		if(document.body.setHomePage){
			document.body.style.behavior='url(#default#homepage)';
			document.body.setHomePage('http://www.naver.com/');
		} else {
			alert('사용하시는 브라우저는 본 기능을 지원하지 않습니다. 수동으로 설정해주세요.');
		}
	}
	
	$('.new-jebid-link-fave').bind('click', addFavorite);
	$('.new-jebid-link-start').bind('click', setHomePage);

}(jQuery, window));