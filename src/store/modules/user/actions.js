export default {
  async createUser(context, payload) {
    const userId = context.rootGetters.userId;
    const token = context.rootGetters.token;
    const response = await fetch(
      `https://bojio-6872d-default-rtdb.asia-southeast1.firebasedatabase.app/users/${userId}.json?auth=` +
        token,
      {
        method: "PUT",
        body: JSON.stringify({
          userName: payload.userName,
          userEmail: payload.userEmail,
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
    }
    //console.log(response);
    return response.ok;
  },

  async loadUserData(context) {
    const userId = context.rootGetters.userId;
    const token = context.rootGetters.token;

    const response = await fetch(
      `https://bojio-6872d-default-rtdb.asia-southeast1.firebasedatabase.app/users/${userId}.json?auth=` +
        token,
      {
        method: "GET",
      }
    );

    const responseData = await response.json();
    if (!response.ok) {
      console.log(responseData);
      const error = new Error(
        responseData.message || "Failed to authenticate. Try again later"
      );
      throw error;
    }
    context.commit("setUserData", {
      userName: responseData.userName != null ? responseData.userName : null,
      userEmail: responseData.userEmail != null ? responseData.userEmail : null,
      userPhone: responseData.userPhone != null ? responseData.userPhone : null,
      userClub: responseData.userClub != null ? responseData.userClub : null,
    });
    localStorage.setItem("userClub", responseData.userClub);
    console.log(responseData);
    return response.ok;
  },
};
