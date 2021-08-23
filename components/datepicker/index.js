
const leftPad0 = function(v, n) {
  if (!v) {
    v = "";
  }
  let prefix = "";
  for (let i = 0; i < n; i++) {
    prefix += "0";
  }
  return (prefix + v).substr(-n);
};
const stringToDate = function(str) {
  str = str.replace(/-/g, "/");
  return new Date(str);
};
const isLeapYear = function(year) {
  if (((year % 4) == 0) && ((year % 100) != 0) || ((year % 400) == 0)) {
    return true;
  }
  return false;
};
const now = new Date();
const years = [];
const beginYear = 1990;
for (var i = beginYear; i <= 2100; i++) {
  years.push(i + "年");
}
const months = [];
for (var i = 0; i < 12; i++) {
  months.push(leftPad0(i + 1, 2) + "月");
}
const days = [];
for (var i = 0; i < 31; i++) {
  days.push(leftPad0(i + 1, 2) + "日");
}
const hours = [];
for (var i = 0; i < 24; i++) {
  hours.push(leftPad0(i, 2) + "时");
}
const minutes = [];
for (var i = 0; i < 60; i++) {
  minutes.push(leftPad0(i, 2) + "分");
}

Component({
  /**
   * 组件的属性列表
   */
  properties: {
    value: String,
    dateValue: {
      type: Date
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    valueArray: [0, 0, 0, 0, 0],
    rangeValues: [
      years,
      months,
      days,
      hours,
      minutes
    ],
    pickerYear: beginYear,
    pickerMonth: 1
  },
  observers: {
    value: function(v) {
      this.setData({
        valueArray: this._dateToValueArray(stringToDate(v))
      })
    },
    dateValue: function(date) {
      this.setData({
        valueArray: this._dateToValueArray(date)
      })
    },
    valueArray: function(v) {
      this._settMonthDays(v[0] + beginYear, v[1] + 1);
      this._default();
    }
  },
/**
   * 组件的方法列表
   */
  methods: {
    _dateToValueArray(date) {
      return [date.getFullYear() - beginYear, date.getMonth(), date.getDate() - 1, date.getHours(), date.getMinutes()];
    },
    getArrayIndex(arr, obj){
      var i = arr.length;
      while (i--) {
          if (arr[i] === obj) {
              return i;
          }
      }
      return -1;
    },
    _settMonthDays(year, month) {
      let monthDays = 31;
      switch (month) {
        case 2:
          monthDays = 28;
          if (isLeapYear(year)) {
            monthDays = 29;
          }
          break;
        case 4:
        case 6:
        case 9:
        case 11:
          monthDays = 30;
          break;
      }
      let days = [];
      for (let i = 0; i < monthDays; i++) {
        days.push(leftPad0(i + 1, 2) + "日");
      }
      //for(let s=0;s<this.data.rangeValues.length;s++){
        
      //}
      this.setData({
        pickerYear: year,
        pickerMonth: month,
        "rangeValues[2]": days,

      });
    },
    _default(){
      let date = new Date();
        let getMonth = date.getMonth()+1;
        let getDate = date.getDate();
        let getHours = date.getHours();
        let getMinutes = date.getMinutes();
        if(getMonth<10){
          getMonth='0'+getMonth;
        }
        if(getDate<10){
          getDate='0'+getDate;
        }
        if(getHours<10){
          getHours = '0'+getHours;
        }
        if(getMinutes<10){
          getMinutes='0'+getMinutes;
        }
        this.setData({
          'valueArray[0]':this.getArrayIndex(this.data.rangeValues[0],date.getFullYear()+'年'),
          'valueArray[1]':this.getArrayIndex(this.data.rangeValues[1],getMonth+'月'),
          'valueArray[2]':this.getArrayIndex(this.data.rangeValues[2],getDate+'日'),
          'valueArray[3]':this.getArrayIndex(this.data.rangeValues[3],getHours+'时'),
          'valueArray[4]':this.getArrayIndex(this.data.rangeValues[4],getMinutes+'分')
        })
    },
    
    handleCancel(e) {
      this.setData({
        valueArray: this.data.valueArray
      })
    },
    handleColumnChange(e) {
      if (e.detail.column > 1) return false;
      let year = this.data.pickerYear;
      let month = this.data.pickerMonth;
      if (e.detail.column == 0) {
        year = e.detail.value + beginYear;
      } else if (e.detail.column == 1) {
        month = e.detail.value + 1;
      }
      this._settMonthDays(year, month);
    },
    handleValueChange(e) {
      let dateArr = [];
      for (let i in e.detail.value) {
        let v = this.data.rangeValues[i][e.detail.value[i]];
        dateArr.push(v.toString().substr(0, v.length - 1))
      }
      let dateString = dateArr[0] + "-" + dateArr[1] + "-" + dateArr[2] + " " + dateArr[3] + ":" + dateArr[4] + ":00";
      this.triggerEvent('change', {
        date: stringToDate(dateString),
        dateString
      })
    }
  }
})