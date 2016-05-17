  new Vue({
    el: '#app',
    ready: function() {
        var self = this;
        Bmob.initialize("79e03dbceb4fcd76250ace233a63b2a6", "77e63caf02a8f27d04e33d49249f15e2");
        var UserData = Bmob.Object.extend("UserData");
        var query = new Bmob.Query(UserData);
        query.equalTo("state", "待审核");
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
                        adress:object.get('address'),
                        extratext:object.get('extratext'),
                        createdAt:object.createdAt
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
            kind: '',
            product: '',
            model:'',
            name: '',
            phone: '',
            adress: '',
            extratext: '',
            createdAt: ''
        },
        services:  [],
    },
    methods: {
//录入
        addService: function() {
          if(this.service.address && this.service.kind && this.service.product && this.service.model && this.service.phone && this.service.name  && this.service.address){
          Bmob.initialize("79e03dbceb4fcd76250ace233a63b2a6", "77e63caf02a8f27d04e33d49249f15e2");
          var UserData = Bmob.Object.extend("UserData");
          var userData = new UserData();
          userData.set("kind", this.service.kind);
          userData.set("product", this.service.product);
          userData.set("model", this.service.model);
          userData.set("phone", this.service.phone);
          userData.set("name", this.service.name);
          userData.set("address", this.service.address);
          userData.set("extratext", this.service.extratext);
          userData.set("state", "未处理");
          
          userData.save(null, {
              success: function(object) {
                      alert("添加服务工单成功, 工单号为:"+object.id);
                      },
              error: function(model, error) {alert("系统繁忙，请稍后再试!");}
                          });
              this.service.idnum = this.services.length + 1;
              this.services.push(this.service);
        }
        else{
           alert("请录入完整的信息！");
        }
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
        },
//修改状态
        dispachList:function(service){
         var UserData = Bmob.Object.extend("UserData");
   		 var query = new Bmob.Query(UserData);
        query.equalTo("phone", service.phone);
  		query.first({
      		success: function(object) {
            object.fetchWhenSave(true);
      		  object.set('state','等待接单');
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
       this.services.$remove(service);
        }
    }
});