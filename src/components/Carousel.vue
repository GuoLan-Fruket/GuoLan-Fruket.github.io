<template>
  <div id="root" @mouseover="mouseover" @mouseout="startInterval">
    <!-- 大图轮播 -->
    <div class="view" ref="view">
      <img v-for="(img, index) in view" :name="index" :src="img" :key="index" />
    </div>
    <!-- 下方的阴影 -->
    <div class="shadow">
      <!-- 文字渐入渐出动画 -->
      <transition-group>
          <span v-for="(msgObj) in msg" ref="msg" v-show="msgObj.isShow" :key="msgObj.msg">{{msgObj.msg}}</span>
      </transition-group>
      <!-- 右下角缩略图以及红框 -->
      <div class="preview" ref="preview">
        <img v-for="(pre, index) in preview" :name="index" :src="pre"  :key="index"/>
        <div class="checkBorder" ref="checkBorder"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Carousel",
  data() {
    return {
      fan: [
        {
          view: require("../assets/carousel/view/1.png"),
          preview: require("../assets/carousel/preview/1.png"),
          msg: "我cos我自己"
        },
        {
          view: require("../assets/carousel/view/2.png"),
          preview: require("../assets/carousel/preview/2.png"),
          msg: "我是百大！"
        },
        {
          view: require("../assets/carousel/view/3.png"),
          preview: require("../assets/carousel/preview/3.png"),
          msg: "来啊！快活啊！"
        },
        {
          view: require("../assets/carousel/view/4.png"),
          preview: require("../assets/carousel/preview/4.png"),
          msg: "这是男皮"
        },
        {
          view: require("../assets/carousel/view/5.png"),
          preview: require("../assets/carousel/preview/5.png"),
          msg: "这是女皮"
        },
      ],
      view: [],
      preview: [],
      msg: [],
      index: 0,
      timer: undefined,
    }
  },
  methods: {
    // 开启定时器，开始轮播
    startInterval() {
      this.timer = setInterval(() => {
        this.$refs.view.style.transition = "0.3s";
        this.$refs.view.style.left = -800 * this.index + "px";
        this.$refs.checkBorder.style.right =
          5 + 78 * (this.preview.length - this.index - 1) + "px";
        if (this.preview.length === this.index) {
          this.$refs.checkBorder.style.right =
            5 + 78 * (this.preview.length - 1) + "px";
        }
        this.index++;
      }, 3000);
    },
    // 鼠标悬浮在图片上时停止轮播
    mouseover(event) {
      clearInterval(this.timer);
      if (event.target.name !== undefined) {
        let name = Number(event.target.name);
        this.$refs.view.style.left = -800 * name + "px";
        this.$refs.checkBorder.style.right =
          5 + 78 * (this.preview.length - name - 1) + "px";
        this.index = name + 1;
      }
    },
  },
  mounted() {
    this.fan.forEach((item) => {
      this.view.push(item.view);
      this.preview.push(item.preview);
      this.msg.push({ msg: item.msg, isShow: false });
    });
    this.view.push(this.view[0]);
    this.$refs.checkBorder.style.right = 5 + 78 * (this.fan.length - 1) + "px";

    this.$refs.view.addEventListener(
      "transitionend",
      () => {
        if (this.index == this.view.length) {
          this.index = 1;
          this.$refs.view.style.transition = "0s";
          this.$refs.view.style.left = "0px";
        }
      },
      false
    );

    this.startInterval();
  },
  watch: {
    index(newVal) {
      this.msg.forEach((item, index) => {
        if (
          index === newVal - 1 ||
          (index === 0 && newVal === this.fan.length + 1)
        ) {
          item.isShow = true;
        } else {
          item.isShow = false;
        }
      });
    },
  },
  beforeDestroy() {
    clearInterval(this.timer);
  }
};
</script>

<style scoped>
* {
  padding: 0%;
  margin: 0;
}

#root {
  width: 800px;
  height: 420px;
  margin: 0 auto;
  position: relative;
  overflow: hidden;
  border-radius: 5px;
}

.view {
  position: absolute;
  white-space: nowrap;
  transition: 0.3s;
}

.view img{
  width: 800px;
  height: 455px;
}

.shadow {
  position: absolute;
  bottom: 0;
  height: 60px;
  width: 800px;
  background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.7));
}

@keyframes msg {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

.v-leave-active {
  animation: msg 0.3s reverse;
}

.v-enter-active {
  animation: msg 0.3s;
}

span {
  color: white;
  margin: 5px 5px;
  bottom: 0;
  position: absolute;
  width: 800px;
}

.preview {
  right: 5px;
  bottom: 5px;
  white-space: nowrap;
  transition: 0.3s;
  position: absolute;
}

.preview img {
  width: 64px;
  height: 48px;
  margin: 0 5px;
  border: 2px solid white;
  border-radius: 5px;
}

.checkBorder {
  width: 64px;
  height: 48px;
  border: 2px solid red;
  position: absolute;
  bottom: 4px;
  transition: 0.3s;
  border-radius: 5px;
}
</style>