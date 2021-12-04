<template>
    <div>
       <div class="wrapper fadeInDown">
  <div id="formContent">
    <div class="fadeIn first">
    </div>
    <form>
      <input type="text" id="login" class="fadeIn second" name="login" placeholder="ID를 입력하세요" v-model="email">
      <input type="text" id="password" class="fadeIn third" name="login" placeholder="비밀번호를 입력하세요" v-model="password">
    </form>
    <button class="btn" v-on:click="signup">가입하기</button>
    <div id="formFooter">
      <a class="underlineHover" href="login">로그인할래요</a>
    </div>

  </div>
</div>
    </div>
</template>
<script>
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword} from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBbUlbvrvV2Uj-LR7bDHF0RJdYy5mSNqJw",
    authDomain: "nyangdiz-b0211.firebaseapp.com",
    databaseURL: "https://nyangdiz-b0211-default-rtdb.firebaseio.com",
    projectId: "nyangdiz-b0211",
    storageBucket: "nyangdiz-b0211.appspot.com",
    messagingSenderId: "69242287095",
    appId: "1:69242287095:web:8cc8fe4af4156f706cb4f2"
  };
  
initializeApp(firebaseConfig);
const auth = getAuth();


export default{ 
    data(){
    return{
      email : '',
      password : ''
      }
    },
    methods: {
      signup() {
        createUserWithEmailAndPassword(auth, this.email, this.password)
        .then((userCredential) => {
              // Signed up
              const user = userCredential.user;
              console.log(user)
              alert("회원가입 성공")
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode + errorMessage)
            alert("회원가입 실패")
        });
      }
    }
  }
</script>

<style>
.btn {
  background-color: #56baed;
  border: none;
  color: white;
  padding: 15px 80px;
  text-align: center;
  text-decoration: none;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  text-transform: uppercase;
  font-size: 13px;
  box-shadow: 0 10px 30px 0 rgb(95 186 233 / 40%);
  border-radius: 5px 5px 5px 5px;
  margin: 5px 20px 40px 20px;
  transition: all 0.3s ease-in-out;
}
</style>