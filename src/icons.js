import Vue from 'vue'
import {library} from '@fortawesome/fontawesome-svg-core'
import {faCaretDown, faCheck, faClock, faComments, faExclamation, faPlay, faPencilAlt, faThumbtack, faTimes} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'

library.add(faCaretDown, faCheck, faClock, faComments, faExclamation, faPlay, faPencilAlt, faThumbtack, faTimes)

Vue.component('FontAwesomeIcon', FontAwesomeIcon)
