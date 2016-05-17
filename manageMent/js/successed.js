  new Vue({
    el: '#app',
    ready: function() {
        var self = this;
        Bmob.initialize("79e03dbceb4fcd76250ace233a63b2a6", "77e63caf02a8f27d04e33d49249f15e2");
        var UserData = Bmob.Object.extend("UserData");
        var query = new Bmob.Query(UserData);
        query.equalTo("state", "已完成");
        query.find({
            success: function(results) {     
                for(var i = 0; i < results.length; i++) {
                    var object = results[i];
                    var tmp = {
                        kind: object.get('kind'),
                        model: object.get('model'),
                        name: object.get('name'),
                        phone: object.get('phone'),
                        product: object.get('product'),
                        state:object.get('state'),
                        maintenance:object.get('maintenance'),
                        evaluate:object.get('evaluate'),
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
            kind: '',
            product: '',
            model:'',
            phone: '',
            name: '',
            state:'',
            maintenance: '',
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
        dispachList:function(book){
         var UserData = Bmob.Object.extend("UserData");
   		 var query = new Bmob.Query(UserData);
        query.equalTo("phone", book.phone);
  		query.first({
      		success: function(object) {
            object.fetchWhenSave(true);
      		  object.set('state','已受理-等待接单');
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