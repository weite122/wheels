window.jQuery = function(selectorOrElements) {
  var array = []
  if (typeof selectorOrElements === 'string') {
    var elements = document.querySelectorAll(selectorOrElements)

    for (var i = 0; i < elements.length; i++) {
      array.push(elements[i])
    }
  }eles if(selectorOrElements instanceof Array) {
 
    for (var i = 0; i < selectorOrElements.length; i++) {
      array.push(selectorOrElements[i]) //获取当前元素
  }
    array.previousSelection = selectorOrElements.previousSelection //获取上一次的元素
}

array.on = function(eventType, fn) {
  for (var i = 0; i < array.length; i++) {
    array[i].addEventListener('click', fn)
  }
  return array //链式调用的原理
}
array.addClass = function(className) {
  for (var i = 0; i < array.length; i++) {
    array[i].classList.add(className)
  }
  return array
}
array.removeClass = function(className) {
  for (var i = 0; i < array.length; i++) {
    array[i].classList.remove(className)
  }
  return array
}
array.toggleClass = function(className) {
  for (var i = 0; i < array.length; i++) {
    array[i].classList.toggle(className)
  }
  return array
}
array.text = function() {
  if(value === undefined) {
    var result = []
    for(var i = 0;i < array.length; i++) {
      result.push(array[i].textContent)
    }
    return result
  }else {
    for(var i = 0;i < array.length; i++) {
      array[i].textContent = value
    }
}
array.html = function(htmlString) {
  if(htmlString === undefined) {
    var result = []
    for(var i = 0;i < array.length; i++) {
      result.push(array[i].innerHTML)
    }
    return result
  }else {
    for(var i = 0;i < array.length; i++) {
      array[i].textContent = value
    }  
    return array
  }
}
array.find = function(selector) {
  var array2 = []
  for (var i = 0; i < array.length; i++) {
    var elements = array[i].querySelectorAll(selector)
    for (var j = 0; j < elements.length; j++) {
      array2.push(elements[j])//不确定elements有几个，所以需要再遍历一次
    }
  }
  array2.previousSelection = array // 记录之前的选择器
  var _array = jQuery(array2) // 获得array所有API，递归
  return _array 
}

array.end = function() {
  return array.previousSelection //返回上一次的元素
}


return array
}
window.$ =window.jQuery
