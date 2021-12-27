<script>
	import  CardTimeOut  from 'components/Cards/CardTimeOut.svelte';
	import  CardNotification  from 'components/Cards/CardNotification.svelte';
	import  CardBusyIndicator  from 'components/Cards/CardBusyIndicator.svelte';
	import SuccessToast from "components/Toast/SuccessToast.svelte";
  import { createEventDispatcher } from "svelte";
  import { UserRegistrationReqPromiseClient } from "../../../proto/registration_grpc_web_pb";
  import { ReqUserRegistration } from "../../../proto/registration_pb";
  import Registration from 'services/userregistration.js';
  import { _ } from 'services/i18n.js';
// core components

// export let location;

const dispatch = createEventDispatcher();


let showNotification = false;
let showToastSuccess = false;
let showBusyIndicator = false;
let messageNotification = "";
let userRegister = {
  FirstName: "",
  LastName: "",
  Email: "",
  Password: "",
  PasswordConfirm: ""
};
let reqUserRegistration = new proto.registration.ReqUserRegistration();
async function myRegistration(){
      var deps={
          reqUserRegistration,
          proto:{
              ReqUserRegistration,
              UserRegistrationReqClient: UserRegistrationReqPromiseClient,
          }
      }

      let registration = new Registration(deps);
      return await registration.userRegistration();
  }
  
  function RegisterUser() {
   //console.log("User register=>", userRegister);
    if(userRegister.FirstName == ""){
            messageNotification = "Error, the name is required";
            showNotification=true;
            return;
        }

        if(userRegister.LastName == ""){
            messageNotification = "Error, the last is required";
            showNotification=true;
            return;
        }

        if(userRegister.Email == ""){
            messageNotification = "Error, the email is required";
            showNotification=true;
            return;
        }

        if(userRegister.Password == ""){
            messageNotification = "Error, the password is required";
            showNotification=true;
            return;
        }

        if(userRegister.PasswordConfirm == ""){
            messageNotification = "Error, the password confirm is required";
            showNotification=true;
            return;
        }


        if(userRegister.PasswordConfirm != userRegister.Password){
            messageNotification = "Error, the password confirm is different to password";
            showNotification=true;
            return;
        }

        let newCreateDate = new Date();
        newCreateDate = newCreateDate.toISOString();

        reqUserRegistration.setFirstname(userRegister.FirstName);
        reqUserRegistration.setLastname(userRegister.LastName);
        reqUserRegistration.setEmail(userRegister.Email);
        reqUserRegistration.setPassword(userRegister.Password);
        reqUserRegistration.setCreatedate(newCreateDate);
        reqUserRegistration.setUpdatedate(newCreateDate);
        reqUserRegistration.setStatus("New");
        reqUserRegistration.setCustomersList([]);
        reqUserRegistration.setUsertype(1);
        reqUserRegistration.setStatusdate(newCreateDate);
        showBusyIndicator=true;
        myRegistration().then((data)=>{
           //console.log("User registration==>",data);
            showBusyIndicator=false;
            showToastSuccess=true;
            closeMaintenance();
            userRegister = {};
        }).catch((error)=>{
           //console.log("Error user registration==>",error);
            showBusyIndicator=false;
            if(error.message != undefined){
              messageNotification = error.message;
              showNotification=true;
            }
            
        });  
  }



  const handleToggleModalNotification = () => {
    showNotification = !showNotification
  }


  const closeMaintenance = () => {
   
      setTimeout(function (){
        showToastSuccess = false;
        dispatch('close')
      }, 1000);
    

    
  }
 

</script>


<SuccessToast showToast={showToastSuccess}>
</SuccessToast>
<CardBusyIndicator 
  title="Please wait..."
    open={showBusyIndicator}
  >
</CardBusyIndicator>
<CardNotification
isOpen={showNotification}
message={messageNotification}
on:close={() => handleToggleModalNotification()}>
</CardNotification>
<CardTimeOut />
<form>
  <div class="relative w-full mb-3 mt-5">
    <label
      class="block  text-blueGray-600 text-xs font-bold mb-2"
      for="grid-name"
    >
    {$_("First Name")}
    </label>
    <input
      id="grid-name"
      type="text"
      class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
      placeholder="Name"
      bind:value={userRegister.FirstName}
    />
  </div>
  <div class="relative w-full mb-3">
    <label
      class="block  text-blueGray-600 text-xs font-bold mb-2"
      for="grid-name"
    >
    {$_("Last Name")}
    </label>
    <input
      id="grid-lastname"
      type="text"
      class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
      placeholder="Last Name"
      bind:value={userRegister.LastName}
    />
  </div>
  <div class="relative w-full mb-3">
    <label
      class="block  text-blueGray-600 text-xs font-bold mb-2"
      for="grid-email"
    >
    {$_("Email")}
    </label>
    <input
      id="grid-email"
      type="email"
      class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
      placeholder="Email"
      bind:value={userRegister.Email}
    />
  </div>

  <div class="relative w-full mb-3">
    <label
      class="block  text-blueGray-600 text-xs font-bold mb-2"
      for="grid-password"
    >
    {$_("Password")}
    </label>
    <input
      id="grid-password"
      type="password"
      class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
      placeholder="Password"
      bind:value={userRegister.Password}
    />
  </div>
  <div class="relative w-full mb-3">
    <label
      class="block  text-blueGray-600 text-xs font-bold mb-2"
      for="grid-password"
    >
    {$_("Password Confirm")}
    </label>
    <input
      id="grid-password"
      type="password"
      class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
      placeholder="Password"
      bind:value={userRegister.PasswordConfirm}
    />
  </div>
  <div>
    <label class="inline-flex items-center cursor-pointer">
      <input
        id="customCheckLogin"
        type="checkbox"
        class="form-checkbox border-1 rounded text-blueGray-700 ml-1 w-5 h-5 ease-linear transition-all duration-150"
        bind:value={userRegister.AcceptTerm}
      />
      <span class="ml-2 text-sm font-semibold text-blueGray-600 ">
        {$_("I agree with the")}
        <a
          href="#pablo"
          on:click={(e) => e.preventDefault()}
          class="text-red-500"
        >
        {$_("Privacy Policy")}
        </a>
      </span>
    </label>
  </div>

  <div class="btn-wrapper text-right">
    <button
      class="bg-blueGray-700 active:bg-blueGray-600 text-white font-normal px-4 py-2 rounded outline-none focus:outline-none mr-2 mb-1  shadow hover:shadow-md inline-flex items-center font-bold text-xs ease-linear transition-all duration-150"
      type="button"
      on:click={RegisterUser}
    >
    {$_("Register")}
    </button>
    <button
      class="bg-blueGray-700 active:bg-blueGray-600 text-white font-normal px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1  shadow hover:shadow-md inline-flex items-center font-bold text-xs ease-linear transition-all duration-150"
      type="button"
      on:click={() => dispatch("close")}
    >
    {$_("Back")}
    </button>
  </div>
</form>
