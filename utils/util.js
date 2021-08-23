
//传入值是否为空
const isBlank = obj => {
  return obj == undefined || obj == "undefined" || obj == null || obj == "" || obj == "null";
}

//展示异常页面
function showError(page, type) {
  page.setData({
    ERROR_TYPE: type,
    ERROR_PAGE: true
  })
}

//隐藏异常页面
function hideError(page) {
  page.setData({
    ERROR_PAGE: false
  })
}

//获取当前时间
function getNowFormatDate() {
  let date = new Date();
  let separatorO = "-";
  let separatorS = ":";
  let month = date.getMonth() + 1 < 10 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1;
  let strDate = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
  let strHours = date.getHours() < 10 ? '0' + date.getHours() : date.getHours();
  let strMinutes = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();
  let strSeconds = date.getSeconds() < 10 ? (date.getSeconds() == 0 ? '00' : '0' + date.getSeconds()) : date.getSeconds();
  let currentDate = date.getFullYear() + separatorO + month + separatorO + strDate + " " + strHours + separatorS + strMinutes + separatorS + strSeconds;
  return currentDate;
}

// new Date 不生效问题
function getDate(time) {
  let arr = time ? time.split(/[- : . \/]/) : [];
  let date = new Date(2020, 1, 1);
  if (arr.length == 1) {
    date = new Date(arr[0], 1, 1);
  }
  if (arr.length == 2) {
    date = new Date(arr[0], parseInt(arr[1]) - 1, 1);
  }
  if (arr.length == 3) {
    date = new Date(arr[0], parseInt(arr[1]) - 1, arr[2]);
  }
  if (arr.length == 4) {
    date = new Date(arr[0], parseInt(arr[1]) - 1, arr[2], arr[3], 1);
  }
  if (arr.length == 5) {
    date = new Date(arr[0], parseInt(arr[1]) - 1, arr[2], arr[3], arr[4]);
  }
  if (arr.length == 6) {
    date = new Date(arr[0], parseInt(arr[1]) - 1, arr[2], arr[3], arr[4], arr[5]);
  }
  return date;
}

//比较日期大小
export function getDateDiff(sDate, eDate) {
  let flag = false
  let sDateTime = sDate.replace('-', '/') //替换字符，变成标准格式
  let eDateTime = eDate.replace('-', '/')
  let sNewDate = new Date(Date.parse(getDate(sDateTime))) //getDate此处使用该方法，是为了解决ios new Date 不生效问题
  let eNewDate = new Date(Date.parse(getDate(eDateTime)))
  // console.log(sNewDate, eNewDate)
  if (sNewDate > eNewDate) {
    flag = true
  } else {
    flag = false
  }
  return flag
}

//2020-06-27T14:20:27.000000Z 时间格式转换成 2020-06-27 14:20:27
export function rTime(date) {
  let json_date = new Date(date).toJSON();
  let new_json_date = new Date(json_date)
  let addHour = new_json_date.setHours(new_json_date.getHours() + 8)
  let d = new Date(new Date(new Date(addHour).toISOString().replace(/T/g, ' ').replace(/\.[\d]{3}Z/, '')));
  return d.getFullYear() + '-' + (d.getMonth() + 1 < 10 ? "0" + (d.getMonth() + 1) : d.getMonth() + 1) + '-' + (d.getDate() < 10 ? "0" + d.getDate() : d.getDate()) + ' ' + (d.getHours() < 10 ? '0' + d.getHours() : d.getHours()) + ':' + (d.getMinutes() < 10 ? '0' + d.getMinutes() : d.getMinutes()) + ':' + (d.getSeconds() < 10 ? (d.getSeconds() == 0 ? '00' : '0' + d.getSeconds()) : d.getSeconds());
}

export function $attr(e, key) {
  return e.currentTarget.dataset[key]
}
module.exports = {
  isBlank,
  showError,
  hideError,
  getNowFormatDate,
  getDate,
  getDateDiff,
  rTime,
  $attr
}
