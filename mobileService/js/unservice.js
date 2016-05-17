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
                
  new Vue({
    el: '#app',
    ready: function() {
        var self = this;
        Bmob.initialize("79e03dbceb4fcd76250ace233a63b2a6", "77e63caf02a8f27d04e33d49249f15e2");
        var UserData = Bmob.Object.extend("UserData");
        var query = new Bmob.Query(UserData);
        var query2 = query;
        query.equalTo("state", "等待接单");
        query.find({
            success: function(results) {     
                for(var i = 0; i < results.length; i++) {
                    var object = results[i];
                    var tmp = {
                        kind: object.get('kind'),
                        product: object.get('product'),
                        model: object.get('model'),
                        name: object.get('name'),
                        phone: object.get('phone'),
                        address: object.get('address'),
                        extratext:object.get('extratext'),
                        createdAt:object.createdAt
                    };
                    self.services.push(tmp);
                }
          	},
      	error: function(error) {
            alert("查询失败: " + error.code + " " + error.message);}
    	});
        query2.equalTo("state", "等待接单");
        
    },
    data: {
        sortparam: '',
        service: {
            idnum: 0,
            kind: '',
            product: '',
            model:'',
            name: '',
            phone: '',
            address: '',
            extratext:'',
            createdAt: ''
        },
        services:  [],
    },
    methods: {
//修改状态
        dispachList:function(service){
        var UserData = Bmob.Object.extend("UserData");
       var query = new Bmob.Query(UserData);
        query.equalTo("phone", service.phone);
        query.equalTo("address", service.address);
        query.first({
          success: function(object) {
            object.set('state','正在服务');
            object.set('maintenance',name);
            object.save(null, {
             success: function(objectUpdate) {
              alert("派单成功, 状态已更改为:"+objectUpdate.get("state")+"!");
            },
          error: function(model, error) {
            alert("系统繁忙，请稍后再试!");
          }
        });
      }});
        this.services.$remove(service);
      },
//删除
        del: function(service) {
        var UserData = Bmob.Object.extend("UserData");
        var query = new Bmob.Query(UserData);
        query.equalTo("phone", service.phone);
      query.find({
      success: function(results) {
         query.destroyAll({
        success: function(){
        },
        error: function(err){
        }
      });
    },
    error: function(error) {
        alert("失败: " + error.code + " " + error.message);
    }});
        this.services.$remove(service);
        },
//排序
        sortBy: function(sortparam) {
            this.sortparam = sortparam;
        }

    }
});