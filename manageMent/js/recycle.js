  new Vue({
    el: '#app',
    ready: function() {
        var self = this;
        Bmob.initialize("79e03dbceb4fcd76250ace233a63b2a6", "77e63caf02a8f27d04e33d49249f15e2");
        var HistoryData = Bmob.Object.extend("HistoryData");
        var query = new Bmob.Query(HistoryData);
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
                        state: object.get('state'),
                        maintenance: object.get('maintenance'),
                        evaluate: object.get('evaluate'),
                        endAt: object.get('endAt')
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
            product:'',
            model: '',
            name: '',
            phone: '',
            state: '',
            maintenance: '',
            evaluate:'',
            endAt: ''
        },
        services:  [],
    },
    methods: {
//排序
        sortBy: function(sortparam) {
            this.sortparam = sortparam;
        },
//删除
        del: function(service) {
            var HistoryData = Bmob.Object.extend("HistoryData");
            var query = new Bmob.Query(HistoryData);
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

    }
});