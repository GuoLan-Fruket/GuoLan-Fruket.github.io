<template>
  <div>
    <div class="background" ref="background">
      <el-container>
        <el-header style="height: 200px;">
          <div class="container">
            <p id="uptext">欢迎来到</p>
          </div>
        </el-header>
        <el-main style="height: 330px;">
          <div class="container">
            <img src="../assets/cartoonHead.webp" alt="none" id="img" @mouseover="changePic" @mouseleave="changePic2"><br/>
            <router-link to="./main/home">
              <el-button round id="enterbutton">点 击 进 入</el-button>
            </router-link>
          </div>
        </el-main>
        <el-footer style="height: 200px;">
          <div class="container">
            <p id="buttontext"><span id="xfyx">旋风游侠</span>的直播间</p>
          </div>
        </el-footer>
      </el-container>
    </div>
  </div>
</template>

<script>
export default {
  name:"Welcome",
  mounted() {
    this.$refs.background.style.height = window.innerHeight + "px";
  },
  methods:{
    changePic(e) {
      e.target.src = require("../assets/zhuyu.webp");
    },
    changePic2(e) {
      e.target.src = require("../assets/cartoonHead.webp");
    }
  }
}
</script>

<style scoped>
*{
  padding: 0px;
  margin: 0px;
}
.background{
  background-color: black;
  width:100%;
  position: fixed;
}
.container{
  color: white;
  text-align: center;
}
#uptext{
  font-size: 700%;
  font-family: STXingkai;
  margin: 30px 0;
  letter-spacing: 50px;
  text-shadow: 2px 2px #409eff;
}
#img{
  height: 150px;
  transition: 0.3s;
  border-radius: 5px;
}
#enterbutton{
  background-color: transparent;
  border: 2px solid white;
  color: white;
  height: 70px;
  width: 200px;
  margin: 30px 0;
  font-size: 170%;
  transition: 0.3s;
  border-radius: 25px;
}
#enterbutton:hover{
  background-color: transparent;
  border: 2px solid rgb(255, 92, 92);
  color: rgb(255, 138, 138);
  height: 77px;
  width: 220px;
  margin: 30px 0;
  font-size: 187%;
}
#buttontext{
  font-size: 700%;
  font-family: STXingkai;
  letter-spacing: 50px;
  text-shadow: 2px 2px #409eff;
}
#xfyx{
  color: #ff2525;
}
</style>