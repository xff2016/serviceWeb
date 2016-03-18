<?php
		$kind = $_POST["kind"];
		$phone = $_POST["phone"];
		$name = $_POST["name"];
		$address = $_POST["address"];
		$product = $_POST["product"];
		$model = $_POST["model"];
		$extratext = $_POST["extratext"];
				
		$link = mysqli_connect(SAE_MYSQL_HOST_M.':'.SAE_MYSQL_PORT,SAE_MYSQL_USER,SAE_MYSQL_PASS);
		 mysqli_select_db($link,SAE_MYSQL_DB);
				mysqli_query($link,"set names 'utf8'");	//设定字符集
					$sql_insert = "insert into user (phone,name,address,model,product,kind,extratext) values('$_POST[phone]','$_POST[name]','$_POST[address]','$_POST[model]','$_POST[product]','$_POST[kind]','$_POST[extratext]')";
					$res_insert = mysqli_query($link,$sql_insert);
					if($link)
					{
						header("refresh:0;url=../html/lastMsg.html");
						   exit;
					}
					else
					{
						echo "<script>alert('系统繁忙，请稍候！'); history.go(-1);</script>";
						 
					}		      
?>