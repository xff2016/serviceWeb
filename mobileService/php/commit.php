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
        $switcher = $_POST["switcher"];
        $record = $_POST["record"];
        $maintenanceLog = $_POST["maintenanceLog"];
        $maintenanceExtratext = $_POST["maintenanceExtratext"];
try {

    $bmobObj = new BmobObject("MaintenanceData");
    $res=$bmobObj->create(array("solved"=>$switcher,"record"=>$record,"maintenanceLog"=>$maintenanceLog,"maintenanceExtratext"=>$maintenanceExtratext)); //添加对象

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