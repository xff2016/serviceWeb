       function getCookie(sName) {
                  var aCookie = document.cookie.split('; ');
                  for (var i=0; i < aCookie.length; i++) {
                         var aCrumb = aCookie[i].split('=');
                          if (sName == aCrumb[0])
                             return decodeURI(aCrumb[1]);
                        }
                        return '';
                }
                var name = decodeURI(getCookie("UserName"));
                var kind = decodeURI(getCookie("kind"));
        Bmob.initialize("79e03dbceb4fcd76250ace233a63b2a6", "77e63caf02a8f27d04e33d49249f15e2");
                var UserData = Bmob.Object.extend("UserData");
                var query1 = new Bmob.Query(UserData);
                query1.equalTo("maintenance", name);
                query1.equalTo("kind", kind);
                query1.equalTo("state", "正在服务");
                query1.count({
                    success: function(count) {     
                      var count1 = count;
                      document.getElementById("underService").innerHTML=count1;
                    },
                error: function(error) {
                    alert("查询失败: " + error.code + " " + error.message);}
            });


                var HistoryData = Bmob.Object.extend("HistoryData");
                var query2 = new Bmob.Query(HistoryData);
                var evaluate = 0;
                query2.equalTo("maintenance", name);
                query2.equalTo("kind", kind);
                query2.equalTo("state", "已完成");
                query2.count({
                    success: function(count) {     
                      var count2 = count;
                      document.getElementById("successed").innerHTML=count2;
                    },
                error: function(error) {
                    alert("查询失败: " + error.code + " " + error.message);}
            });
                query2.find({
                    success:function(results){
                    for(var i = 0; i < results.length; i++) {
                    var object = results[i];
                    var length = results.length;
                    evaluate = Number(evaluate)+Number(object.get('evaluate'));
                    }
                    evaluate = (Number(evaluate))/(Number(length));
                    document.getElementById("evaluate").innerHTML = parseFloat(evaluate);
                }});

  new Vue({
    el: '#app',
    ready: function() {
        var self = this;
        Bmob.initialize("79e03dbceb4fcd76250ace233a63b2a6", "77e63caf02a8f27d04e33d49249f15e2");
        var _User = Bmob.Object.extend("_User");
        var query = new Bmob.Query(_User);
        query.equalTo("username", name);
        query.equalTo("kind", kind);
        query.find({
            success: function(results) {     
                for(var i = 0; i < results.length; i++) {
                    var object = results[i];
                    var tmp = {
                        address: object.get('address'),
                        email: object.get('email'),
                        mobilePhoneNumber: object.get('mobilePhoneNumber'),
                        createdAt:object.createdAt,
                        updatedAt:object.updatedAt
                    };
                    self.services.push(tmp);
                }
            },
        error: function(error) {
            alert("查询失败: " + error.code + " " + error.message);}
      });    


      //   var UserData = Bmob.Object.extend("UserData");
      //   var query1 = new Bmob.Query(UserData);
      //   query1.equalTo("maintenance", name);
      //   query1.equalTo("kind", kind);
      //   query1.equalTo("state", "正在服务");
      //   query1.count({
      //       success: function(count) {     
      //         var count1 = count;
      //       },
      //   error: function(error) {
      //       alert("查询失败: " + error.code + " " + error.message);}
      // });    


    },
    data: {
        sortparam: '',
        service: {
            address: '',
            email: '',
            mobilePhoneNumber:'',
            createdAt: '',
            updatedAt: ''
        },
        services:  [],
    },
    methods: {
//排序
        sortBy: function(sortparam) {
            this.sortparam = sortparam;
        }

    }
}




);