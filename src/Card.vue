<template>
<div class="card-container"  @click="$emit('openModal', true); 클릭한물건= i">
    <div class="card" >
    <img :src="물건.image" class="goods-img">
    <h4 >{{물건.title}}</h4>
    <p>{{물건.price}}원 / 개</p>
    </div>
</div>
</template>

<script>
export default{
    props:{
        물건: Object, 
    },
    

}
</script>
<style>
.grid{
    display: grid;
    grid-template-columns: repeat(3, 1fr);
}
.card{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 500px;
    font-size: 1.2rem;
}
.goods-img{
    max-width: 50%;
    height: 50%;
}
</style>