import { Input, Button, Form, FormItem } from 'element-ui'
const element = {
  install: function (Vue) {
    Vue.use(Input)
    Vue.use(Button)
    Vue.use(Form)
    Vue.use(FormItem)
    Vue.prototype.$ELEMENT = { size: 'default', zIndex: 3000 }
  }
}

export default element
