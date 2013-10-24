<!DOCTYPE html>
<html lang="ja">
<head>
	<meta charset="UTF-8">
	<title></title>
	<link rel="stylesheet" href="./css/dropzone.css"/>
	<script src="./jquery.js"></script>
	<script src="./dropzone.js"></script>
	<script src="./upload.js"></script>

	<style>
		#image_drop_area{
			background-color:#ffffe0;
			width:300px;
			height:200px;
		}
		#preview_area{
			background-color:#e6e6e6;
			min-height:200px;
			width:600px;
		}
	</style>
</head>
<body>

<div id="image_drop_area">DROP ZONE</div>

<br><br>

<h2>PrevewArea</h2>
<div id="preview_area" class="dropzone-custom"></div>

</body>
</html>
