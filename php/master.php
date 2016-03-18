<?php
		$id = $_POST["id"];
		$passwrd =  $_POST["passwrd"];
		$link = mysqli_connect(SAE_MYSQL_HOST_M.':'.SAE_MYSQL_PORT,SAE_MYSQL_USER,SAE_MYSQL_PASS);
				mysqli_select_db($link,SAE_MYSQL_DB);
				mysqli_query($link,"set names 'utf8'");	//设定字符集

			$sql = "select state from user where id = '$_POST[id]'&& passwrd = '$_POST[passwrd]";
			$result = mysqli_query($link,$sql);	//执行SQL语句
			$num = mysqli_num_rows($result);
			if($num)
			{
				$row = mysqli_fetch_array($result);	//将数据以索引方式储存在数组中
				if($row[0]==0)
					{

					}
				else{}
			}
			else
			{
				echo "<script>alert('该手机号码暂时没有回收服务单！');history.go(-1);</script>";
				header("refresh:5;url=./inquire.html");
						   exit;
			}

?>
<!DOCTYPE html>
<html>
<head lang="en">
 <meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=0"> 
<link rel='stylesheet prefetch' href='https://res.wx.qq.com/open/libs/weui/0.3.0/weui.css'>     <title>服务单进度查询</title>   
<style type="text/css">
body{
    font-family:Microsoft YaHei;
  line-height:2;
}
h1{
    font: Microsoft YaHei;
}
.weui_label{
  width: 5em;
}
</style>   

</head>

<body ontouchstart="" >
<div class="hd">
<h2 class="page_title"  style="text-align:center" ><img src="../Images/123.jpg" height="33" width="33" align="absmiddle">
查询服务</h2>
</div>
<article class="weui_article align="absmiddle"">
    <section>
        <h2 class="title" ><b>尊敬的<?php echo $row[1]?>，您的服务状态如下：</b></h2>
    </section>
</article>
<div class="weui_dialog_confirm">
    <div class="weui_mask"></div>
    <div class="weui_dialog">
        <div class="weui_dialog_hd">
          <strong class="weui_dialog_title">服务进度：【<?php echo $state?>】</strong>
        </div>
        <div class="weui_dialog_bd">联系人：<?php echo $row[1]?>
        <br>手机号码：<?php echo $phone1?>
        <br>服务类型：<?php echo $row[4]?>
        <br>产品类型：<?php echo $row[2]?>
        <br>产品型号：<?php echo $row[3]?>

        </div>
        <div class="weui_dialog_ft">
            <a href="../html/inquire.html" class="weui_btn_dialog primary">确定</a>
        </div>
    </div>
</div>
</body>
</html>