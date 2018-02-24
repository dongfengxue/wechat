//index.js //获取应用实例 
var app = getApp()
//  在数组中存在三个图像文件名 
var imagePaths = ['../../images/stone.jpg', '../../images/black.jpeg', '../../images/blackglass.jpeg', '../../images/blue.jpeg',
  '../../images/brother.jpeg', '../../images/cool.jpeg', 
  '../../images/curl.jpeg', '../../images/curlhair.jpeg',
  '../../images/drink.jpeg', '../../images/fat.jpeg',
  '../../images/forlove.jpeg', '../../images/four.jpeg',
  '../../images/glass.jpeg', '../../images/gragute.jpeg',
  '../../images/happyyear.jpeg', '../../images/longhair.jpeg',
  '../../images/love.jpeg', '../../images/mili.jpeg',
  '../../images/sea.jpeg', '../../images/stone.jpeg',
  '../../images/swim.jpeg', '../../images/tang.jpeg',
  '../../images/two.jpeg', '../../images/wet.jpeg',
  '../../images/whitethread.jpeg', '../../images/work.jpeg',
  '../../images/young.jpeg'
  ];
//  当前图像的索引  
var imageIndex = 0;
 Page({
  data: {
    imagePath: imagePaths[0],
    //  用于修改image组件显示图像的变量   
    title: '开始',
    //  用于改变按钮文本的变量
    isRunning: false,
    // 该变量为true，表示图像正在快速切换     
    userInfo: {},

    //播放  
    listenerButtonPlay: function () {
      wx.playBackgroundAudio({
        dataUrl: 'http://ws.stream.qqmusic.qq.com/5106429.m4a?fromtag=46',
        title: '薛之谦',
        //图片地址地址  
        coverImgUrl: 'http://i.gtimg.cn/music/photo/mid_album_90/a/F/000QgFcm0v8WaF.jpg'

      })
    },  
  },
  //事件处理函数    
  bindViewTap: function () { wx.navigateTo({ url: '../logs/logs' }) },
  //  定时器要执行的函数    
  change: function (e) {
    imageIndex++;
    //  当前图像索引大于最大索引时，重新设为第一个索引值（已达到循环显示图像的目的）   
    if (imageIndex > 27) {
      imageIndex = 0;
    }
    //  修改image组件要显示的图像（改变imagePath变量的值）     
    this.setData({ imagePath: imagePaths[imageIndex] })
  },
  //  点击按钮要执行的函数   
  guess: function (e) {
    //  获取isRunning变量的值   
    let isRunning = this.data.isRunning;  
     // 根据是否正在快速切换图像，决定如何修改按钮文本，以及是开启定时器，还是移除定时器    
    if (!isRunning) {
      this.setData({ title: '停止', isRunning: true });
      //  开启定时器（没100毫秒调用一次change函数）      
      this.timer = setInterval((function () { this.change() }).bind(this), 100);
    } else {
      this.setData({ title: '开始', isRunning: false });
      //  移除定时器      
      this.timer && clearInterval(this.timer);
    }
  }, onLoad: function () {
    console.log('onLoad');
          var that = this;
    //调用应用实例的方法获取全局数据   
    app.getUserInfo(function (userInfo) {
      //更新数据 
      that.setData({ userInfo: userInfo })
    })
  }
}) 