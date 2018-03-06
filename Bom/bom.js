window.$ = function() {
  let array = []
  return array
}

$.bom = {
  openAtCenter: function(width, height, url) {
    widow.open(url, '_blank', `
      width=${width}px,height=${height}px,
      screenX=${screen.width/2 - width/2}px,
      screenY=${screen.height/2 - height/2}px,
     `)
  },

  search: function(name, value) {
    if (value === undefined) {
      let result = {}
      let search = windwo.location.search
      if (search[0] === '?'){
        search = search.slice(1)
      }
      let searchArray = search.split('&')
      for (var i = 0;i < searchArray.length; i++) {
        let parts = searchArray[i].split('=')
        result[decodeURIComponent(parts[0])] = decodeURIComponent(parts[i] || '')
      }
      return result
    }
    let result = searchAll()
    if (value === undefined) {
      return result[name]
    }else{
      if (result[name] === undefined){
        location.search += `&${encodeURIComponent(name)}=${encodeURIComponent(value)}`
      }else{
        result[name] = encodeURIComponent(value)
        let newSearch = '?'
        for (let key in result) {
          newSearch += `${encodeURIComponent(key)=${encodeURIComponent(result[key])}}&`
        }
        location.search = newSearch
      }
    }
  }
}
