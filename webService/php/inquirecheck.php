<meta charset="UTF-8">
<?php
include_once '../../bmob/lib/BmobObject.class.php';
include_once '../../bmob/lib/lib/BmobUser.class.php';
include_once '../../bmob/lib/lib/BmobBatch.class.php';
include_once '../../bmob/lib/lib/BmobFile.class.php';
include_once '../../bmob/lib/lib/BmobImage.class.php';
include_once '../../bmob/lib/lib/BmobRole.class.php';
include_once '../../bmob/lib/lib/BmobPush.class.php';
include_once '../../bmob/lib/lib/BmobPay.class.php';
include_once '../../bmob/lib/lib/BmobSms.class.php';
include_once '../../bmob/lib/lib/BmobApp.class.php';
include_once '../../bmob/lib/lib/BmobSchemas.class.php';
include_once '../../bmob/lib/lib/BmobTimestamp.class.php';
include_once '../../bmob/lib/lib/BmobCloudCode.class.php';
include_once '../../bmob/lib/lib/BmobBql.class.php';
    $phone = $_POST["phone"];
    try {
     $userData = new BmobObject("UserData");
     $res=$userData->get("",array('where={"phone":"'.$phone.'"}','limit=2'));
     $array = get_object_vars($res);
     if($array['results'][0]->address){ 
         $address = $array['results'][0]->address;
         $name = $array['results'][0]->name;
         $state = $array['results'][0]->state;
         $kind = $array['results'][0]->kind;
         $product = $array['results'][0]->product;
         $model = $array['results'][0]->model;
 	  }
 	 else{
 		echo "<script>alert('该手机号码暂时没有服务单！');history.go(-1);</script>";
		exit;
		}
    } 
    catch (Exception $e) {
    echo $e;
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
<div class="weui_dialog_confirm">
    <div class="weui_mask"></div>
    <div class="weui_dialog">
        <div class="weui_dialog_hd">
          <strong class="weui_dialog_title">服务进度：<?php if($state){echo $state;}else{echo "等待处理";}?></strong>
        </div>
        <div class="weui_dialog_bd">联系人：<?php echo $name?>
        <br>手机号码：<?php echo $phone?>
        <br>服务类型：<?php echo $kind?>
        <br>产品类型：<?php echo $product?>
        <br>产品型号：<?php echo $model?>

        </div>
        <div class="weui_dialog_ft">
            <a href="../html/inquire.html" class="weui_btn_dialog primary">确定</a>
        </div>
    </div>
</div>
</body>
</html>