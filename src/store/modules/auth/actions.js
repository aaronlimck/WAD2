export default {
  async signup(context, payload) {
    return context.dispatch("auth", {
      ...payload,
      mode: "signup",
    });
  },

  async login(context, payload) {
    return context.dispatch("auth", {
      ...payload,
      mode: "login",
    });
  },

  async auth(context, payload) {
    const mode = payload.mode;
    let url =
      "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAwfv0cPv34-F3iZG0VcyoPoH1ThhC3fUU";

    if (mode === "signup") {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAwfv0cPv34-F3iZG0VcyoPoH1ThhC3fUU";
    }
    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify({
        email: payload.email,
        password: payload.password,
        returnSecureToken: true,
      }),
    });
    const responseData = await response.json();
    if (!response.ok) {
      const error = new Error(
        responseData.message || "Failed to authenticate. Try again later"
      );
      throw error;
    }
    localStorage.setItem("token", responseData.idToken);
    localStorage.setItem("userId", responseData.localId);
    context.commit("setUser", {
      token: responseData.idToken,
      userId: responseData.localId,
    });
    return response.ok;
  },

  tryLogin(context) {
    const token = localStorage.getItem("token");
    const userId = localStorage.getItem("userId");

    if (token && userId) {
      context.commit("setUser", {
        token: token,
        userId: userId,
      });
    }
  },

  logout(context) {
    // localStorage.removeItem("token");
    // localStorage.removeItem("userId");
    // Remove all localStorage item
    localStorage.clear();

    context.commit("setUser", {
      token: null,
      userId: null,
    });
  },

  async resetpassword(context, payload) {
    const response = await fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=AIzaSyAwfv0cPv34-F3iZG0VcyoPoH1ThhC3fUU",
      {
        method: "POST",
        body: JSON.stringify({
          requestType: "PASSWORD_RESET",
          email: payload.email,
        }),
      }
    );
    const responseData = await response.json();
    if (!response.ok) {
      console.log(responseData);
      const error = new Error(
        responseData.message || "Failed to authenticate. Try again later"
      );
      throw error;
    } else {
      this.$router.replace("/signin");
    }
    console.log(responseData);
  },

  // async changePassword(context, payload){
  //   ///...
  // }
};
