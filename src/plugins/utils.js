'use strict'

const _utils = {
   
}

const Utils = {}

Utils.install = function (app, options) {
    app.config.globalProperties.$utils = _utils
}
// app.use(Utils)
export default Utils
