import * as echarts from '../../ec-canvas/echarts';
var barec1 = null
var barec2 = null
var barec3 = null
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    campusList: [{
      campusId: 111,
      name: '全公司'
    }, {
      campusId: 222,
      name: '哈布塔盖'
    },
    {
      campusId: 333,
      name: '毛都'
    },
    {
      campusId: 444,
      name: '茂明'
    },
    {
      campusId: 555,
      name: '李汉梁'
    },{
      campusId: 666,
      name: '哈布塔盖'
    }],
    currentCampus: 111,
    // 折线图
    ec1: {
      onInit: function (canvas, width, height) {
        barec1 = echarts.init(canvas, null, {
          width: width,
          height: height
        });
        canvas.setChart(barec1);
        return barec1;
      }
    },
    ec2: {
      onInit: function (canvas, width, height) {
        barec2 = echarts.init(canvas, null, {
          width: width,
          height: height
        });
        canvas.setChart(barec2);
        return barec2;
      }
    },
    ec3: {
      onInit: function (canvas, width, height) {
        barec3 = echarts.init(canvas, null, {
          width: width,
          height: height
        });
        canvas.setChart(barec3);
        return barec3;
      }
    },
   
  },


  chooseCampus: function(options) {
    var _this = this
    var id = options.currentTarget.dataset.id;
    //设置当前样式
    _this.setData({
      'currentCampus': id
    })
  },

  onLoad: function (options) {

  },
  onReady() {
    setTimeout(this.getData, 500);
  },

  getData() {
    barec1.setOption({
      title: { //标题
        text: '功率',
        left: '7',
        textStyle: {
          color: '#414F6E',
          fontWeight: 'bold',
        },
      },
        tooltip: {
          trigger: 'axis'
        },
        renderAsImage: true, //支持渲染为图片模式
        color: ["#41A4FF", "#37C461"], //图例图标颜色
        legend: {
          show: true,
          itemGap: 25, //每个图例间的间隔
          top: 20,
          left: 'right',
          x: 30, //水平安放位置,离容器左侧的距离  'left'
          z: 100,
          textStyle: {
            color: '#383838'
          },
        },
        grid: { //网格
          left: 10,
          top: 50,
          containLabel: true, //grid 区域是否包含坐标轴的刻度标签
        },
        xAxis: {
                type: 'category',
                boundaryGap: false,
                data: ['0', '3', '6', '9', '12', '15', '18','21','24','27'],
                // show: false
              },
        yAxis: {
          name:'MW',
          // x: 'left',
          type: 'value',
          splitLine: {
            lineStyle: {
              type: 'dashed'
            }
          }
          // show: false
        },
        series: [{
                name: '功率',
                type: 'line',
                smooth: true,
                data: [18, 200, 465, 630, 878, 940, 833,680,200]
              }]   
    })


    barec2.setOption({
      title: { //标题
        text: '电量',
        left: '7',
        textStyle: {
          color: '#414F6E',
          fontWeight: 'bold',
        },
      },
        tooltip: {
          trigger: 'axis'
        },
        renderAsImage: true, //支持渲染为图片模式
        color: [ "#37C461"], //图例图标颜色
        legend: {
          show: true,
          itemGap: 25, //每个图例间的间隔
          top: 20,
          left: 'right',
          x: 30, //水平安放位置,离容器左侧的距离  'left'
          z: 100,
          textStyle: {
            color: '#383838'
          },
        },
        grid: { //网格
          left: 10,
          top: 50,
          containLabel: true, //grid 区域是否包含坐标轴的刻度标签
        },
        xAxis: {
                type: 'category',
                boundaryGap: false,
                data: ['00:00', '03:00', '06:00', '09:00', '12:00', '15:00', '18:00','21:00','24:00'],
                // show: false
              },
        yAxis: {
          x: 'center',
          type: 'value',
          splitLine: {
            lineStyle: {
              type: 'dashed'
            }
          }
          // show: false
        },
        series: [{
                name: '发电量',
                type: 'line',
                smooth: true,
                data: [18, 200, 465, 630, 878, 940, 833,680,200]
              }]   
    })

    barec3.setOption({
      title: { //标题
        text: '风速',
        left: '7',
        textStyle: {
          color: '#414F6E',
          fontWeight: 'bold',
        },
      },
        tooltip: {
          trigger: 'axis'
        },
        renderAsImage: true, //支持渲染为图片模式
        color: ["#ffa500"], //图例图标颜色
        legend: {
          show: true,
          itemGap: 25, //每个图例间的间隔
          top: 20,
          left: 'right',
          x: 30, //水平安放位置,离容器左侧的距离  'left'
          z: 100,
          textStyle: {
            color: '#383838'
          },
        },
        grid: { //网格
          left: 10,
          top: 50,
          containLabel: true, //grid 区域是否包含坐标轴的刻度标签
        },
        xAxis: {
                type: 'category',
                boundaryGap: false,
                data: ['00:00', '03:00', '06:00', '09:00', '12:00', '15:00', '18:00','21:00','24:00'],
                // show: false
              },
        yAxis: {
          x: 'center',
          type: 'value',
          splitLine: {
            lineStyle: {
              type: 'dashed'
            }
          }
          // show: false
        },
        series: [{
                name: '风速',
                type: 'line',
                smooth: true,
                data: [0, 4.5, 9, 13.5, 18, 19, 20,22.5,18]
              }]   
    })

    
  },
  

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})
