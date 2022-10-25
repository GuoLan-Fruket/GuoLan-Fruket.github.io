<template>
  <div>
    <div id="carousel">
      <Carousel />
    </div>
    <div class="myCard card">
      <el-container>
        <el-aside width="25%">
          <img src="../assets/peoplePic.png" alt="none" id="peoplePic" />
        </el-aside>
        <el-main>
          <div id="intro">
            <h2 class="title">泛の简介</h2>
            <ul>
              <li>
                泛式作品起初以动画的误解向剪辑为主，后来开始做MAD并制作了大量高质量作品，其中《漫画家桐人》登上了哔哩哔哩2017拜年祭。在2017年起由MAD转型为动画杂谈UP主，目前视频以杂谈为主，并有少量剪辑类作品和vlog。
              </li>
              <li>
                泛式每周都会直播动画杂谈和联动玩游戏。如果时间充裕，也会直播看影视作品或玩游戏。
              </li>
              <li>于2017年透露自己有女友竹鱼。两人在2020年结婚。</li>
            </ul>
          </div>
        </el-main>
      </el-container>
    </div>
    <Message />
    <div class="myCard card">
      <h2 class="title">大事记</h2>
      <div class="block" >
        <el-timeline :reverse="reverse">
          <el-timeline-item
            v-for="(activity, index) in activities"
            :key="index"
            :icon="activity.icon"
            :type="activity.type"
            :color="activity.color"
            :size="activity.size"
            :timestamp="activity.timestamp"
            style="font-size:16px"
          >
            {{ activity.content }}
          </el-timeline-item>
        </el-timeline>
      </div>
    </div>
  </div>
</template>

<script>
import Carousel from "./Carousel";
import Message from "./Message";

export default {
  name: "Home",
  components: { Carousel, Message },
  data() {
    return {
      reverse: false,
      activities: [
        {
          content: "发表了自己的第一个视频。",
          timestamp: "2011年11月10日",
          color: '#666666',
          // icon: 'el-icon-caret-bottom'
        },
        {
          content: "发表了自己的第一个MAD作品。",
          timestamp: "2014年12月13日",
          color: '#666666',
          // icon: 'el-icon-caret-bottom'
        },
        {
          content: "视频《漫画家桐人》登上哔哩哔哩2017拜年祭。",
          timestamp: "2017年1月17日",
          color: '#666666',
          // icon: 'el-icon-caret-bottom'
        },
        {
          content: "投稿首个杂谈视频《【史诗级科普】NTR到底是个啥？现身说法带你走进NTR的世界！》，并在此后转型为杂谈UP主。",
          timestamp: "2017年7月1日",
          color: '#666666',
          // icon: 'el-icon-caret-bottom'
        },
        {
          content: "直播公布与竹鱼结婚。",
          timestamp: "2020年10月1日",
          color: '#666666',
          // icon: 'el-icon-caret-bottom'
        },
      ],
    };
  },
};
</script>

<style scoped>
#carousel {
  margin: 10px 0;
}
.myCard {
  width: 800px;
  /* background-color: rgba(255, 255, 255, 0.6); */
  /* opacity: 0.85; */
  margin: 5px auto;
  border-radius: 5px;
  border: 2px solid #333333;
  box-shadow: 2px 2px 5px rgb(134, 134, 134);
}
#peoplePic {
  width: 85%;
  margin-top: 25px;
  margin-left: 30px;
  /* margin: 10px auto; */
}
.title {
  margin: 20px;
  /* text-shadow: 1px 1px 3px rgb(255, 83, 83); */
}
.timeLineCard {
  width: 95%;
}
li{
  line-height: 1.5;
}
</style>