function lectureRoomNoticeModifyConfirm(classID, boardID) {
		// 동적으로 form 생성
	    var form = document.createElement('form');
	    form.method = 'post';
	    form.action = 'lectureRoomNoticeModifyConfirm.do';

	    // classID를 전달하는 hidden input 추가
	    var classIDInput = document.createElement('input');
	    classIDInput.type = 'hidden';
	    classIDInput.name = 'classID';
	    classIDInput.value = classID;
	    form.appendChild(classIDInput);
	    
	    // boardID를 전달하는 hidden input 추가
	    var boardIDInput = document.createElement('input');
	    boardIDInput.type = 'hidden';
	    boardIDInput.name = 'boardID';
	    boardIDInput.value = boardID;
	    form.appendChild(boardIDInput);

	    // form을 문서에 추가하고 submit
	    document.body.appendChild(form);
	    form.submit();

	    // 필요하면 form을 제거
	    document.body.removeChild(form);
	}