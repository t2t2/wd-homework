import Vue from 'vue'
import {library} from '@fortawesome/fontawesome-svg-core'
import {faCaretDown, faThumbtack} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'

library.add(faCaretDown, faThumbtack)

Vue.component('FontAwesomeIcon', FontAwesomeIcon)
