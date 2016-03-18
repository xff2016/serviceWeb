  wx.config({
      debug: false,
      appId: 'wx96fb745a97967dde',
      timestamp: 1421142450,
      nonceStr: '9hKgyCLgGZOgQmEI',
      signature:'e5f472d738ab7b1497a23aa3e89685a2406c3088',
      jsApiList: [
        'closeWindow'
      ]
  });

wx.ready(function () {
  // 8.7 关闭当前窗口
  document.querySelector('#closeWindow').onclick = function () {
    wx.closeWindow();
  };
});
wx.error(function (res) {
  //alert(res.errMsg);
});