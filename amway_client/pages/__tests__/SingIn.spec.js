import { shallowMount,RouterLinkStub, mount } from "@vue/test-utils";
import Sign from "../SingIn";
import Vue from 'vue'
import Vuetify from 'vuetify'
import assert from 'assert'
import Vuex,{mapState,mapActions,mapMutations} from 'vuex'
Vue.use(Vuetify)
Vue.use(Vuex)
const factory = () => {
  return shallowMount(Sign, {
  });
};
describe('Sign', () => {
    let vuetify
    let store
    beforeEach(() => {
      vuetify = new Vuetify()
      store=new Vuex.Store({
        data:()=>({
            icons: {
                mdiClose,
                mdiHelpCircle,
                mdiEyeOffOutline,
              },
              password: '',
              email: '',
              snackbar: false,
              snackbarText: 'No error message',
          }),
        methods:{
            submit() {
                this.$v.$touch()
              },
              login() {
                let that = this
                that.snackbarText = "You Signed in"
                this.$fire.auth.signInWithEmailAndPassword(this.email, this.password)
                .catch(function (error){
                  that.snackbarText = error.message
                  that.snackbar = true
                }).then((user) => {
                  //we are signed in
                  // $nuxt.$router.push('/')
                  that.snackbar = true
                })
          
              },
              forgotPassword() {
                let that = this
                this.$fire.auth
                  .sendPasswordResetEmail(this.email)
                  .then(function () {
                    that.snackbarText = 'reset link sent to ' + that.email
                    that.snackbar = true
                  })
                  .catch(function (error) {
                    that.snackbarText = error.message
                    that.snackbar = true
                  })
              },
        },
         computed:{
            selectErrors() {
                const errors = []
                if (!this.$v.select.$dirty) return errors
                !this.$v.select.required && errors.push('Item is required')
                return errors
              },
              nameErrors() {
                const errors = []
                if (!this.$v.password.$dirty) return errors
                !this.$v.password.required && errors.push('Password is required.')
                return errors
              },
              emailErrors() {
                const errors = []
                if (!this.$v.email.$dirty) return errors
                !this.$v.email.email && errors.push('Must be valid e-mail')
                !this.$v.email.required && errors.push('E-mail is required')
                return errors
              },
      }})
    })  
    it('Bir Vue kopmonenti', () => {
      const wrapper = factory();
      expect(wrapper.isVueInstance()).toBeTruthy();
  })
    it('Snapshot Ozelligi', () => {
      const wrapper = factory();
      expect(wrapper.html()).toMatchSnapshot();
  })
 }) 