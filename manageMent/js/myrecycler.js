     function getCookie(sName) {
                  var aCookie = document.cookie.split('; ');
                  for (var i=0; i < aCookie.length; i++) {
                         var aCrumb = aCookie[i].split('=');
                          if (sName == aCrumb[0])
                             return decodeURI(aCrumb[1]);
                        }
                        return '';
                }
                var a = decodeURI(getCookie("UserName"));
  new Vue({
    el: '#app',
    ready: function() {
        var self = this;
        Bmob.initialize("79e03dbceb4fcd76250ace233a63b2a6", "77e63caf02a8f27d04e33d49249f15e2");
        var UserData = Bmob.Object.extend("UserData");
        var query = new Bmob.Query(UserData);
        query.equalTo("kind", "回收"); 
        query.equalTo("maintenance", a);
        query.find({
            success: function(results) {     
                for(var i = 0; i < results.length; i++) {
                    var object = results[i];
                    var tmp = {
                        model: object.get('model'),
                        name: object.get('name'),
                        phone: object.get('phone'),
                        product: object.get('product'),
                        updatedAt:object.updatedAt
                    };
                    self.services.push(tmp);
                }
            },
        error: function(error) {
            alert("查询失败: " + error.code + " " + error.message);}
      });    
    },
    data: {
        sortparam: '',
        service: {
            idnum: 0,
            product: '',
            model:'',
            phone: '',
            name: '',
            evaluate:'',
            updatedAt: ''
        },
        services:  [],
    },
    methods: {
//排序
        sortBy: function(sortparam) {
            this.sortparam = sortparam;
        },
//修改状态
        dispachList:function(acceptList){
         var UserData = Bmob.Object.extend("UserData");
       var query = new Bmob.Query(UserData);
        query.equalTo("phone", acceptList.phone);
      query.first({
          success: function(object) {
            object.set('state','等待接单');
            object.set('maintenance','decodeURI(getCookie("UserName"))');
            object.save(null, {
             success: function(objectUpdate) {
              alert("派单成功, 状态已更改为:"+objectUpdate.get("state")+"!");
            },
          error: function(model, error) {
            alert("系统繁忙，请稍后再试!");
          }
        });
      },
      error: function(object, error) {
        alert("系统繁忙，请稍后再试!");
      }
    });
        }

    }
});