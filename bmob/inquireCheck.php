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
        $phone = $_POST["phone"];
try {
      //  echo($kind+$address+$extratext);

    /*
     *  bmobObject 的例子
     */
    $bmobObj = new BmobObject("UserData");
    //$res=$bmobObj->create(array("kind"=>$kind,"phone"=>$phone,"name"=>$name,"address"=>$address,"product"=>$product,"model"=>$model,"extratext"=>$extratext,)); //添加对象
     $res=$bmobObj->get("",array('where={"phone":"$phone"}','')); //对象的查询,
                       //$kindtmp=array_search('kind', $res);
//$array = (array) $res;
//$kindtmp=$array[0]->kind;
foreach($students as $obj){
         echo "姓名：".$obj->name."年龄：".$obj->age."专业：".$obj->subject."<br/>";
    }
//echo $res[0]->kind;
//echo $res->scalar; 
                        //$kindtmp=$bmobObj->get("kind");
                        //$nametmp=$bmobObj->get("name",array('where={"phone":"$phone"}','limit=1'));
                        //$producttmp=$bmobObj->get("product",array('where={"phone":"$phone"}','limit=1'));
                        //$modeltmp=$bmobObj->get("model",array('where={"phone":"$phone"}','limit=1'));
                        //$phonetmp=$bmobObj->get("phone",array('where={"phone":"$phone"}','limit=1'));
                        //$statetmp=$bmobObj->get("state",array('where={"phone":"$phone"}','limit=1'));
                       //$maintenancetmp=$bmobObj->get("maintenance",array('where={"phone":"$phone"}','limit=1'));
                       //$kindtmp=$res=>get("kind");
                       //$nametmp=$res->get("name");
                       //$producttmp=$res->get("product");
                       //$modeltmp=$res->get("model");
                       //$phonetmp=$res->get("phone");
                      // $statetmp=$res->get("state");
                    //$maintenancetmp=$res->get("maintenance");
                    //echo $res;
                    //}
                   // else
                    //{
                    //    echo "<script>alert('系统繁忙，请稍候！'); history.go(-1);</script>";
                         
                    //}

    // $res=$bmobObj->get("bd89c6bce9"); // 获取id为bd89c6bce9的对象
     //$res=$bmobObj->get(); // 获取所有对象
    // $res=$bmobObj->update("bd89c6bce9", array("score"=>60,"playerName"=>"game")); //更新对象bd89c6bce9, 任何您未指定的key都不会更改,所以您可以只更新对象数据的一个子集
    // $res=$bmobObj->delete("bd89c6bce9"); //删除对象bd89c6bce9
//这里是表示查找playerName为"game"的对象，只返回２个结果
    // $res=$bmobObj->increment("bd89c6bce9","score",array(-2)); //id为bd89c6bce9的field score数值减2
    // $res=$bmobObj->increment("bd89c6bce9","score",array(2)); //id为bd89c6bce9的field score数值加2
    // $res=$bmobObj->deleteField("ZS5wHHHV","score"); //在一个对象中删除一个字段
    // $res=$bmobObj->addArray("list",array("person1","person2")); //在对象字段list中添加数组数据
    // $res=$bmobObj->updateArray("ZS5wHHHV","list",array("person3","person2")); //修改对象id为"ZS5wHHHV"中数组字段list的数组
    // $res=$bmobObj->deleteArray("ZS5wHHHV","list",array("person3","person2")); //删除对象id为"ZS5wHHHV"中数组字段list的数组

    //数据关联
    //添加关联关系

    //在字段添加一行记录并在game添加一个关联关系，指向Game对象,　其id为Vn7r999S
    // $res=$bmobObj->addRelPointer(array(array("game","Game","Vn7r999S"), array("game1","Game","Vn7r999S")));
    //在字段添加一行记录并在opponents添加多个关联关系，指向Player对象
    // $res=$bmobObj->addRelRelation("opponents",array(array("Player","30BRpppy"),array("Player","g5s7EEEV")));
    //修改对象的关联数据，指向Game对象,　其id为Vn7r999S
    // $res=$bmobObj->updateRelPointer("794030b43a", "game", "Game", "Vn7r999S");
    //修改对象的一对多的关联数据
    // $res=$bmobObj->updateRelRelation("ce7f6de5c2", "opponents", array(array("Player","30BRpppy"), array("Player","g5s7EEEV")));
    //删除对象的关联数据
    // $res=$bmobObj->deleteRelation("ce7f6de5c2", "opponents", array(array("Player","30BRpppy"), array("Player","g5s7EEEV")));

    ////批量操作
    // $bmobBatch = new BmobBatch();
    // $data=array(
    //  array(
    //      "method"=>"POST",
    //      "path"=>"/1/classes/GameScore",
    //      "body"=>array(
    //                  "score"=>1337,
    //                  "playerName"=>"Sean Plott",
    //              ),
    //  ),
    //  array(
    //      "method"=>"POST",
    //      "path"=>"/1/classes/GameScore",
    //      "body"=>array(
    //                  "score"=>1338,
    //                  "playerName"=>"ZeroCool",
    //              ),
    //  ),
    // );
    // $res=$bmobBatch->batch($data);

    var_dump($res);
    //var_dump($array);
} catch (Exception $e) {
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
          <strong class="weui_dialog_title">服务进度：【<?php echo $statetmp?>】</strong>
        </div>
        <div class="weui_dialog_bd">联系人：<?php echo $nametmp?>
        <br>手机号码：<?php echo $phonetmp?>
        <br>服务类型：<?php echo $kindtmp?>
        <br>产品类型：<?php echo $producttmp?>
        <br>产品型号：<?php echo $modeltmp[3]?>

        </div>
        <div class="weui_dialog_ft">
            <a href="../html/inquire.html" class="weui_btn_dialog primary">确定</a>
        </div>
    </div>
</div>
</body>
</html>