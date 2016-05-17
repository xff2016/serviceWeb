<?php
include_once '../../bmob/lib/BmobObject.class.php';
include_once '../../bmob/lib/BmobUser.class.php';
include_once '../../bmob/lib/BmobBatch.class.php';
include_once '../../bmob/lib/BmobFile.class.php';
include_once '../../bmob/lib/BmobImage.class.php';
include_once '../../bmob/lib/BmobRole.class.php';
include_once '../../bmob/lib/BmobPush.class.php';
include_once '../../bmob/lib/BmobPay.class.php';
include_once '../../bmob/lib/BmobSms.class.php';
include_once '../../bmob/lib/BmobApp.class.php';
include_once '../../bmob/lib/BmobSchemas.class.php';
include_once '../../bmob/lib/BmobTimestamp.class.php';
include_once '../../bmob/lib/BmobCloudCode.class.php';
include_once '../../bmob/lib/BmobBql.class.php';
        $kind = $_POST["kind"];
        $phone = $_POST["phone"];
        $name = $_POST["name"];
        $address = $_POST["address"];
        $product = $_POST["product"];
        $model = $_POST["model"];
        $extratext = $_POST["extratext"];
try {

    $bmobObj = new BmobObject("UserData");
    $res=$bmobObj->create(array("kind"=>$kind,"phone"=>$phone,"name"=>$name,"address"=>$address,"product"=>$product,"model"=>$model,"extratext"=>$extratext,"isEnd"=>0,"evaluate"=>"×","maintenance"=>"×","state"=>"待审核")); //添加对象

    if($res)
                    {
                        header("refresh:0;url=../html/lastMsg.html");
                           exit;
                    }
                    else
                    {
                        echo "<script>alert('系统繁忙，请稍候！'); history.go(-1);</script>";
                         
                    }
    

    //var_dump($res);
} catch (Exception $e) {
    echo $e;
}
?>