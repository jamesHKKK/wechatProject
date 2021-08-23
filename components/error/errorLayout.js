// component/error/errorLayout.js
Component({
  properties: {
    show: {
      type: Boolean,
      value: false
    },
    top: {
      type: Number,
      value: 240
    },
    eType: {
      type: Number,
      value: 1, //type:1.网络、2.请求、3.数据
      observer(newVal, oldVal) {
        let errorTip = '请求异常，请稍候重试';
        if (newVal == 1) {
          errorTip = '网络异常,请稍候重试！';
        } else if (newVal == 2) {
          errorTip = '哎哟，服务器开了个小差！';
        } else if (newVal == 3) {
          errorTip = '暂时没有数据哦！';
        }
        this.setData({
          errorTip: errorTip
        })
      }
    }
  },
  ready() {
    let eType = this.properties.eType;
    let errorTip = '请求异常，请稍候重试';
    if (eType == 1) {
      errorTip = '网络异常,请稍候重试！';
    } else if (eType == 2) {
      errorTip = '哎哟，服务器开了个小差！';
    } else if (eType == 3) {
      errorTip = '暂时没有数据哦！';
    }
    this.setData({
      errorTip: errorTip
    })
  },
  methods: {
    errorTap(e) {
      let eType = this.properties.eType;
      if (eType != 3) {
        this.triggerEvent('errorClick');
      }
    }
  }
})