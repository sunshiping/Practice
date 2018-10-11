const https = require('https')

module.exports = async (ctx) => {
    const {appid, secret, loginCode} = ctx.request.body
    console.log('后', appid, secret, loginCode)
    let url = 'https://api.weixin.qq.com/sns/jscode2session?appid=' + appid + '&secret=' + secret + '&grant_type=authorization_code&js_code=' + loginCode
    const jscode = await getJSON(url)
    ctx.state.data = {
        jscode,
        msg: 'success'
    }
}

function getJSON (url) {
    return new Promise((reslove, reject) => {
        https.get(url, res => {
            let urlData = ''
            res.on('data', data => {
                urlData += data
            })
            res.on('end', data => {
                const jscode = JSON.parse(urlData)
                if (jscode) {
                    reslove(jscode)
                }
                reject(jscode)
            })
        })
    })
}
