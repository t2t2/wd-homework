import Vue from 'vue'
import {library} from '@fortawesome/fontawesome-svg-core'
import {faCaretDown, faCheck, faComments, faExclamation, faPlay, faPencilAlt, faThumbtack, faTimes} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'

library.add(faCaretDown, faCheck, faComments, faExclamation, faPlay, faPencilAlt, faThumbtack, faTimes)

Vue.component('FontAwesomeIcon', FontAwesomeIcon)
