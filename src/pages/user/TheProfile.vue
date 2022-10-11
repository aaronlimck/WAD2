
<template>
  <section>
    <div class="container mx-auto">
    </div>
  </section>
    <TabsWrapper>
      <Tab title="Profile"> 
       <form>
          
          <img src="../../images/avatar.png" alt="Avatar" class="avatar" 
          style = "vertical-align: middle;
          width: 50px;
          height: 50px;
          border-radius: 50%;
          float:left;
          
          margin-right:2px;">

          <button class="py-1 px-1.5" id = "change_avatar" style="float:left; margin-right:9px; width:120px;">Change Avatar</button>
          <button class="py-1 px-3" style="float:left; width:120px">Delete</button>
          
          <br><br><br>
          Name:
          <br>
            <input type="text" 
                  name="user_name"
                  size="20"
                  value= "Dehou"  
                  style="border:1px solid black;">
          <br><br>        
          Email:        
          <br>
            <input type="text" 
                  name="user_email"
                  size="20"
                  value= "student.2021@scis.smu.edu.sg"  
                  style="border:1px solid black;">

          <br><br>        
          Phone Number:        
          <br>
            <input type="text" 
                  name="user_phone_number"
                  size="20"
                  value= "12345678"  
                  style="border:1px solid black;">
          
          <br><br>        
          Password:        
          <br>
            <button class="py-1 px-3" id = "change_password">Change Password</button>
            
          <br><br>
            <button class="py-1 px-3">Save Profile</button>
        </form>
      </Tab>

      <Tab title="Registered Events"> 
        <event-card></event-card>
        
      </Tab>
    </TabsWrapper>
    
</template>

<style scoped>
  input[type=text]{
    width:280px;
  }

  button{
    border: 1px black solid;
    border-radius:5px;
  }

  #change_password{
    background-color:#f56a01;
    color:white;
  }

</style>


<script setup>
  import Tab from '../../components/UI/TheTab.vue'
  import TabsWrapper from '../../components/UI/TabsWrapper.vue'

</script>