<template>
  <section>
    <div class="container mx-auto"></div>
  </section>
  <TabsWrapper>
    <Tab title="Profile">
      <form @submit.prevent="submitForm">
        <img
          src="../../images/avatar.png"
          alt="Avatar"
          class="avatar"
          style="
            vertical-align: middle;
            width: 50px;
            height: 50px;
            border-radius: 50%;
            float: left;
            margin-right: 2px;
          "
        />

        <button
          class="py-1 px-1.5"
          id="change_avatar"
          style="float: left; margin-right: 9px; width: 120px"
        >
          Change Avatar
        </button>
        <button class="py-1 px-3" style="float: left; width: 120px">
          Delete
        </button>

        <br /><br /><br />
        <div class="form-control">
          <label for="userName">Name</label>
          <input
            id="userName"
            type="text"
            name="userName"
            :value="this.$store.getters.userName"
          />
        </div>
        <div class="form-control">
          <label for="userEmail">Email</label>
          <input
            id="userEmail"
            type="text"
            name="userEmail"
            :value="this.$store.getters.userEmail"
          />
        </div>

        <div class="form-control">
          <label for="userPhone">Phone</label>
          <input
            id="userPhone"
            type="text"
            name="userPhone"
            :value="this.$store.getters.userPhone"
          />
        </div>

        Password:
        <br />
        <button class="py-1 px-3" id="change_password" @click="changePassword">
          Change Password
        </button>

        <br /><br />
        <button class="py-1 px-3">Save Profile</button>
      </form>
    </Tab>

    <Tab title="Registered Events">
      <event-card></event-card>
    </Tab>
  </TabsWrapper>
</template>

<style scoped>
form {
  max-width: 520px;
}

form {
  max-width: 520px;
}

.form-control {
  margin: 0.8rem 0;
}

label {
  font-weight: 400;
  color: #787878;
}

input {
  display: block;
  width: 100%;
  font-weight: 400;
  border: 1px solid #eee;
  border-radius: 5px;
  padding: 0.5rem 1rem;
}

button {
  border: 1px black solid;
  border-radius: 5px;
}

#change_password {
  background-color: #f56a01;
  color: white;
}
</style>

<script>
import Tab from "../../components/UI/TheTab.vue";
import TabsWrapper from "../../components/UI/TabsWrapper.vue";

export default {
  components: { Tab, TabsWrapper },
  async mounted() {
    try {
      await this.$store.dispatch("loadUserData");
    } catch (err) {
      //this.error = err.message || "Failed to authenticate, try later";
    }
  },
  methods: {
    // async changePassword(){
    //   const token = localStorage.get('token')
    //   try{
    //     await this.$store.dispatch("changePassword", {
    //       idToken: token,
    //       password:
    //     })
    //   }catch(err){
    //   }
    // }
  },
};
</script>
