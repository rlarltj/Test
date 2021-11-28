<template>
    <!-- 안쓰는 Component임 -->
  <div class="black-bg" v-if="Modal">
  <div class="white-bg">
    <img :src="물건데이터[클릭한물건].image" style="width:70%">
    <h4>{{ 물건데이터[클릭한물건].title }}</h4>
    <p>{{ 물건데이터[클릭한물건].content }}</p>
    <p>{{ 물건데이터[클릭한물건].price }} 원</p>
    <Discount />
    <button @click="Modal=false">닫기</button>
  </div>
</div>

</template>

<script>
export default{
    name: 'Modal',
    props: {
        물건데이터: Array,
        클릭한물건: Number,
        Modal: Boolean,
    }   
}
</script>