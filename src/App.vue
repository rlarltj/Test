<template>
<div>
  <img alt="logo" src="./assets/logo.png" class="main-logo"/>
<div class="menu">
  <a href="login"> 로그인 </a>
  <a href="home"> Home </a>
  <router-link to="/shop" @click="card=true; banner=true; receipt=false">Shop</router-link>
  <a href="about"> About </a>
  <a href="logout"> 로그아웃 </a>

</div>

<!-- @makeTrue="card=true; banner=true" :card="card" :banner="banner" -->
<router-view></router-view>

<div v-if="banner">
  <!-- shop 버튼을 클릭할 경우 상단 고정 Banner 등장 -->
<Banner />
</div>

<div v-if="card">
  <!-- card가 true면 가격순정렬, 되돌리기 버튼과 Card Component가 화면에 렌더링됩니다.
  card의 기본값은 default며 메뉴의 shop을 클릭하면 true가 됩니다. -->
<div class="button-Con">
<button @click="priceSort()">가격순정렬</button>
<button @click="sortReturn()">되돌리기</button>
</div>
<div class="grid">
<Card @openModal="Modal = true; 클릭한물건= i" :물건="물건데이터[i]" v-for="(a,i) in 5" :key="i"/>
</div>
</div>


<!-- 제품을 클릭할 경우 나타나는 상세페이지(Modal)입니다.  -->
<transition name="fade">
<div class="black-bg" v-if="Modal">
  <div class="white-bg">
    <button @click="Modal=false" class="exitBtn"></button>
    <img :src="물건데이터[클릭한물건].image" class="modalImg">
    <h4>{{ 물건데이터[클릭한물건].title }}</h4>
    <p>{{ 물건데이터[클릭한물건].content }}</p>
    <Banner />
    <input @input="month = $event.target.value"  placeholder="수량을 입력하세요" >
    <p> {{month}} 개 : {{ 물건데이터[클릭한물건].price * month}} 원</p>
    <h5>최소 인원: {{물건데이터[클릭한물건].min}}</h5>
    <router-link to="/cart" @click="Modal=false; card=false; banner=false; receipt=true" ><button> 입금하기!!</button></router-link>
  </div>
</div>
</transition>

<!-- 상세페이지에서 입금하기 버튼을 클릭하면 receipt가 true되어 receipt-container가 뜹니다. -->
<div v-if="receipt" class="receipt-container">
  <div>
    <img :src="물건데이터[클릭한물건].image" class="receipt-image">
      <button @click="month++">+</button>
  <button @click="month= month-1">-</button>
  </div> 
  <div class="receipt-box">{{물건데이터[클릭한물건].title}}
  <div class="receipt-text">
    <div>{{month}}개</div>
    <div>총 {{ 물건데이터[클릭한물건].price * month}}원입니다. </div>
    <div> 우리은행 1002-261-123456(김린)으로 입금해주세요!</div>
  </div>
  </div>

  </div>
</div>
</template>

<script>
import data from './assets/data'
import Banner from './Banner.vue'
import Card from './Card.vue'
// import Modal from './Modal.vue'
export default {
  name: 'App',
  data(){                     
    return{
      month: 1,
      클릭한물건: 0,
      물건데이터: data,
      물건데이터2: [...data],
      Modal: false,
      card: false,
      banner: false,
      receipt: false,
    }
  },
  watch :{
    month(a){
       if (isNaN(a) == true){
        alert('숫자를 입력하세요');
        this.month = 1;
       }
        else if(a<1){
          alert('한개부터 구매 가능합니다.');
          this.month = 1;
        }
    }
  },
  methods : {
    priceSort(){
    this.물건데이터.sort(function(a,b){
      return a.price - b.price
    })
  },  
    sortReturn(){
      this.물건데이터 = [...this.물건데이터2];
    }
    
  },
  components: {
    Banner: Banner,
    // Modal: Modal,
    Card: Card,
    
  }
}
</script>

<style>
.main-logo{
  height: 250px;
}
.menu {
  background : rgba(0,0,0,0.09);
  padding : 15px;
  border-radius : 5px;
  
}
.menu a {
 color:#05499f;
  padding: 0 15px 0 15px;
  font-weight: bold;
  font-size: 20px;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding-bottom: 20px;
}

body {
  margin : 0;
}
div {
  box-sizing: border-box;
}
.button-Con {
  display: flex;
  justify-content: right;
}
.modalImg{
  width: 60%;
  height: 400px;
}
.black-bg {
  width: 100%; height:100%;
  background: rgba(0,0,0,0.5);
  position: fixed;
  top:0;
  padding: 20px;
}
.white-bg {
  margin: auto;
  position: relative;
  width: 50%; background: white;
  border-radius: 8px;
  padding: 20px;
} 
.exitBtn{
  position: absolute;
  width: 40px;
  height: 40px;
  display:inline-block;*display:inline;
  right: 5px;
  top: 5px;
  font-weight: bold;
}
.exitBtn:after {display: inline-block;content: "\00d7"; font-size:15pt;}
.room-img{
  float: clear;
  width: 80%;
  margin-top: 40px;
}
.button-Con{
  padding-right:10px;
}
.button-Con button{
  margin-left: 10px;
}
.banner{
  background: rgba(46,110,185,0.35);
  padding: 10px;
  margin: 10px;
  border-radius: 10px;
  height: 100%;
}

.fade-enter-from{
  opacity: 0;
}
.fade-enter-active{
  transition: all 1s;
}
.fade-enter-to{
  opacity:1;
}

.fade-leave-from{
  opacity: 1;
}
.fade-leave-active{
  transition: all 1s;
}
.fade-leave-to{
  opacity:0;
}

/* 영수증페이지 */
.receipt-container{
  display: flex;
  flex-direction: row;
  justify-content: center;
  text-align: center;
}
.receipt-box{
  display: flex;
  flex-direction: column;
  text-align:center;
  justify-content: center;
}

.receipt-text{
  color: #132452; 
  font-weight: bold;
  font-size: 30px;
}
</style>
