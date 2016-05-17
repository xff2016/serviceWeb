  new Vue({
    el: '#app',
    ready: function() {
        var self = this;
        Bmob.initialize("79e03dbceb4fcd76250ace233a63b2a6", "77e63caf02a8f27d04e33d49249f15e2");
        var UserData = Bmob.Object.extend("UserData");
        var query = new Bmob.Query(UserData);
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
//回收站
    recycle: function(service){
            //复制到HistoryData数据表
            var HistoryData = Bmob.Object.extend("HistoryData");
            var query = new HistoryData();
            query.set("kind", service.kind);
            query.set("phone", service.phone);
            query.set("product", service.product);
            query.set("address", service.address);
            query.set("extratext", service.extratext);
            query.set("model", service.model);
            query.set("name", service.name);
            query.set("state", service.state);
            query.set("evaluate", service.evaluate);
            query.set("maintenance", service.maintenance);
            query.set("startAt", service.createdAt);
            query.set("endAt", service.updatedAt);
            query.save(null, {success: function(query) {alert('添加回收站成功，回收站objectId是：' + gameScore.id);},
                              error: function(query, error) {alert('转移回收站失败，返回错误信息：' + error.description);}
                             });
            //删除原表中的数据
            var UserData = Bmob.Object.extend("UserData");
            var query1 = new Bmob.Query(UserData);
            query1.equalTo("phone", service.phone);
            query1.find({success: function(results) {
                              query1.destroyAll({
                                success: function(){ },
                                error: function(err){ } });},
                         error: function(error) {
                         alert("失败: " + error.code + " " + error.message); }});
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
   			          success: function(){},
   			          error: function(err){}});},
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