<?php
include_once 'lib/BmobObject.class.php';
include_once 'lib/BmobUser.class.php';
include_once 'lib/BmobBatch.class.php';
include_once 'lib/BmobFile.class.php';
include_once 'lib/BmobImage.class.php';
include_once 'lib/BmobRole.class.php';
include_once 'lib/BmobPush.class.php';
include_once 'lib/BmobPay.class.php';
include_once 'lib/BmobSms.class.php';
include_once 'lib/BmobApp.class.php';
include_once 'lib/BmobSchemas.class.php';
include_once 'lib/BmobTimestamp.class.php';
include_once 'lib/BmobCloudCode.class.php';
include_once 'lib/BmobBql.class.php';
        $kind = $_POST["kind"];
        $phone = $_POST["phone"];
        $name = $_POST["name"];
        $address = $_POST["address"];
        $product = $_POST["product"];
        $model = $_POST["model"];
        $extratext = $_POST["extratext"];
try {

    $bmobObj = new BmobObject("UserData");
    $res=$bmobObj->create(array("kind"=>$kind,"phone"=>$phone,"name"=>$name,"address"=>$address,"product"=>$product,"model"=>$model,"extratext"=>$extratext,)); //添加对象

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