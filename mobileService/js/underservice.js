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
        query.equalTo("maintenance", name);
        query.equalTo("kind", kind);
        query.equalTo("state", "正在服务");
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
                        address:object.get('address'),
                        extratext:object.get('extratext'),
                        maintenance:object.get('maintenance'),
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
            extratext:'',
            address:'',
            maintenance: '',
            updatedAt: ''
        },
        services:  [],
    },
    methods: {

//排序
        sortBy: function(sortparam) {
            this.sortparam = sortparam;
        },

//反馈
        feedback: function(service){
        document.cookie="name="+service.name;
        document.cookie="phone="+service.phone;
        document.cookie="product="+service.product;
        document.cookie="model="+service.model;
        location.href="./feedback.html";
        }
    }
});
