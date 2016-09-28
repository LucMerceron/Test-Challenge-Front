import Bluebird from 'bluebird'
import superagent from 'superagent'

let Api = {
  getWithAccess: url => {
    return new Bluebird((resolve, reject) => {
      superagent
        .get(url + '?access_token=' + process.env.ACCESS_TOKEN)
        .withCredentials()
        .set('Accept', 'application/json')
        .end((err, res) => {
          if (!err) {
            resolve(res)
          } else {
            reject(err)
          }
        })
    })
  }
}

export default Api
