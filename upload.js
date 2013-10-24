$(function(){
	$('#image_drop_area').dropzone({
		url:'./api.php',
		paramName:'file',
		maxFilesize:1, //MB
		addRemoveLinks:true,
		previewsContainer:'#preview_area',
		thumbnailWidth:100, //px
		thumbnailHeight:100, //px
		uploadprogress:function(_file, _progress, _size){
			_file.previewElement.querySelector("[data-dz-uploadprogress]").style.width = "" + _progress + "%";
		},
		success:function(_file, _return, _xml){
			_file.previewElement.classList.add("dz-success");
		},
		error:function(_file, _error_msg){
			var ref;
			(ref = _file.previewElement) != null ? ref.parentNode.removeChild(_file.previewElement) : void 0;
		},
		removedfile:function(_file){
			var ref;
			(ref = _file.previewElement) != null ? ref.parentNode.removeChild(_file.previewElement) : void 0;
		},
		previewTemplate: "<div class=\"dz-preview dz-file-preview\">\n  <div class=\"dz-details\">\n    <div class=\"dz-filename\"><span data-dz-name></span></div>\n    <div class=\"dz-size\" data-dz-size></div>\n    <img data-dz-thumbnail />\n  </div>\n  <div class=\"dz-progress\"><span class=\"dz-upload\" data-dz-uploadprogress></span></div>\n  <div class=\"dz-success-mark\"><span>✔</span></div>\n  <div class=\"dz-error-mark\"><span>✘</span></div>\n  <div class=\"dz-error-message\"><span data-dz-errormessage></span></div>\n</div>",
		dictRemoveFile:'削除',
		dictCancelUpload:'キャンセル'
	});
});
