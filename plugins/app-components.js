import Vue from 'vue'

// UI
import Intro from '@/components/UI/Intro'
import PostsList from '@/components/Blog/PostsList'
import Message from '@/components/UI/Message'
// Controls
import AppButton from '@/components/UI/Controls/Button'
import AppInput from '@/components/UI/Controls/Input'
import AppTextArea from '@/components/UI/Controls/TextArea'

// UI
Vue.component('Intro', Intro)
Vue.component('Message', Message)
Vue.component('PostsList', PostsList)
// Controls
Vue.component('AppButton', AppButton)
Vue.component('AppInput', AppInput)
Vue.component('AppTextArea', AppTextArea)
