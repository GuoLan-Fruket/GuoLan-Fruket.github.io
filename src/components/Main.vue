<template>
  <div>
    <img src="../assets/mainBackgroundv5.png" alt="none" id="backgroundPic">
    <el-container>
      <el-header>
        <div id="header">
          <a href="https://space.bilibili.com/63231"><img src="../assets/cartoonHead.webp" alt="none" id="headPicR"></a>
          <a href="https://space.bilibili.com/1431512"><img src="../assets/zhuyu.webp" alt="none" id="headPicL"></a>
          <router-link to="/main/home"><button class="headbutton">首页</button></router-link>
          <!-- <router-link to="/main/message"><button class="headbutton">个人信息</button></router-link> -->
          <router-link to="/main/work"><button class="headbutton">视频</button></router-link>
          <router-link to="/main/live"><button class="headbutton">直播</button></router-link>
          <router-link to="/main/funstory"><button class="headbutton">逸闻</button></router-link>
          <!-- <router-link to="/main/represent"><button class="headbutton">代表作</button></router-link> -->
        </div>
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </div>
</template>

<script>
export default {
  name: "Main",
}
</script>

<style scoped>
*{
  padding: 0;
  margin: 0;
}
#header{
  text-align: center;
  background-color: white;
  margin: 0 auto;
  height: 55px;
  width: 100%;
}
#headPicR{
  height: 50px;
  margin: 0 20px;
  position: absolute;
  left: 23%;
}
#headPicL{
  height: 50px;
  margin: 0 20px;
  position: absolute;
  left: 72%;
}
#backgroundPic{
  position: fixed;
  z-index: -999;
  /* height: 100%; */
  width: 100%;
}
.headbutton{
  height: 50px;
  width: 130px;
  background-color: white;
  border: 0;
  border-radius: 5px;
  font-size: 20px;
  font-weight: bold;
  transition: 0.3s;
  cursor:pointer;
}
.headbutton:hover{
  height: 50px;
  width: 130px;
  background-color: rgb(234, 51, 51);
  border: 0;
  font-weight: bold;
  color: white;
}

</style>