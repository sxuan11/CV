
import jsonp from 'jsonp'


export function get_ip() {
    jsonp('http://pv.sohu.com/cityjson?ie=utf-8', null, (err, data) => {
      if (err) {
        console.error(err);
      } else {
        console.log(data)
        return data
        
      }
    })
  } 