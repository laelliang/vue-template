import http from './instance'
export const test = () => {
  console.log(JSON.stringify(http))
  http.setContentType().get('/api/data', {
    params: {
      xx: 'xxxxx'
    },
    data: {
      xxx: 'xxxxx'
    }
  })
  http.setContentType().post('/api/data', {
    xx: 'xxxxx'
  })
  console.log(http)

}