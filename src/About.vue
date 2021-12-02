<template>
<div class="funding-container">
    <div class="funding-text">
        <h1>펀딩(공동구매) 개설 방법</h1>
        펀딩 개설을 원하시는 분은 [제품명], [이미지], [구매가격], [최소 인원], [모금 계좌]를 정리해 아래 이메일로 신청글을 보내주세요!
        연락을 받은 즉시 검수하여 <router-link to="/shop" @click="$emit('makeTrue', true)">shop</router-link>게시판에 추가하겠습니다!
        <a href="mailto:nyangdiz@hanyang.ac.kr">✉ nyangdiz@hanyang.ac.kr</a>
    
        <h1>펀딩(공동구매) 참여 방법</h1>
        <router-link to="/shop"  @click="$emit('makeTrue', true)">shop</router-link>게시판을 통해 원하는 제품을 클릭하고, 구매 수량을 입력하시면 [계좌], [금액], [연락처]가 안내됩니다.
        입금을 완료한 후, [연락처]로 확인 연락을 남겨주세요!
    </div>
</div>
</template>

<script>
export default{
    props:{
        card: Boolean,
        banner: Boolean,
    }
}
</script>
<style>
.funding-container{
    display: flex;
    text-align: center;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.funding-text{
    max-width: 50%;
    font-size: 20px;
}
.funding-text > h1 {
    margin-top: 3rem;
    color: #05499f;
    font-size: 30px;
}
</style>