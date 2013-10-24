<?php
//ファイルを保存
move_uploaded_file( $_FILES['file']['tmp_name'], './tmp/'.$_FILES['file']['name'] );
