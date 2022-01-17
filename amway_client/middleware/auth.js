export default function ({app, route, redirect}){
    // if (route.path !== '/SingIn') {
    //   //we are on a protected route
    //   if(!app.$fire.auth.currentUser) {
    //     //take them to sign in page
    //     return redirect('/')
    //   }
    // } 
    if (route.path === '/SingIn') {
      if(!app.$fire.auth.currentUser) {
        //leave them on the sign in page
      } else {
        return redirect('/')
      }
    }
  }
  