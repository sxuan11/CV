
import JsonP from 'jsonp'
export default class Axios {
    static jsonp(options){
        return new Promise((resolve,reject)=>{
            JsonP(options.url,{
                param:'callback',
                timeout: 10000,
            },function(err,res){
                if(res.status === 0) {
                    resolve(res)
                } else {
                    reject(err)
                }
            })
        })
    }
}

// export function get_ip() {
//     JsonP('http://apis.map.qq.com/ws/location/v1/ip?ip%27%27&key=GWHBZ-IWZHI-OXNG4-5EVS3-6MJU6-YYB7E', {timeout:10000}, (err, data) => {
//       if (err) {
//         console.error(err);
//       } else {
//           console.log(data)
//         return data
//       }
//     })
//   }