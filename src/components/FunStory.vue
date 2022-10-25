<template>
  <div>
    <div class="myCard3 card">
      <h2>直播趣事</h2>
      <el-collapse>
        <div @mouseover="showImg('a')" @mouseleave="hideImg('a')">
          <el-collapse-item class="collapseItem">
            <template slot="title">
              <span class="collapseTitle"><i class="el-icon-arrow-down"></i>    泛哲</span>
              <img src="../assets/emoji.png" alt="none" class="emoji" v-show="showa">
            </template>
            <ul>
              <li class="collapseContext">泛式常常在直播时说出很有哲理的话，瓶子君152认为他应该出一本名为《泛哲》的哲学书。</li>
            </ul>
          </el-collapse-item>
        </div>
        <div @mouseover="showImg('b')" @mouseleave="hideImg('b')">
          <el-collapse-item>
            <template slot="title">
              <span class="collapseTitle"><i class="el-icon-arrow-down"></i>    欢迎新朋友</span>
              <img src="../assets/emoji.png" alt="none" class="emoji" v-show="showb">
            </template>
            <ul>
            <li class="collapseContext">泛式的直播间常常出现引战弹幕，而部分观众会用弹幕与引战者争执。为了防止弹幕对骂影响直播间环境，泛式让观众用“ttk”把引战弹幕刷上去。“ttk”后来被改为“太开心啦”“欢迎新朋友”以及其变种：“欢迎新oo”。泛式参加B站官方活动直播观看原神二创时，组织活动的员工看到直播间满屏的“太开心啦”，以为直播间气氛出人意料得好，殊不知这是观众在一次次地把引战弹幕刷上去。</li></ul>
          </el-collapse-item>
        </div>
        <div @mouseover="showImg('c')" @mouseleave="hideImg('c')">
          <el-collapse-item>
            <template slot="title">
              <span class="collapseTitle"><i class="el-icon-arrow-down"></i>    半夜的磨损</span>
              <img src="../assets/emoji.png" alt="none" class="emoji" v-show="showc">
            </template>
            <ul>
            <li class="collapseContext">由于泛式已经是奔三十的大叔，他常常在深夜丧失思考能力，这种现象被观众称作“磨损”。泛式也常常自称“猪脑过载”：从11点起，他就会丧失部分思考能力，到12点时，将无法进行耗费脑力的活动。</li></ul>
          </el-collapse-item>
        </div>
        <div @mouseover="showImg('d')" @mouseleave="hideImg('d')">
          <el-collapse-item>
            <template slot="title">
              <span class="collapseTitle"><i class="el-icon-arrow-down"></i>    泛式阴阳术和高高在上</span>
              <img src="../assets/emoji.png" alt="none" class="emoji" v-show="showd">
            </template>
            <ul>
            <li class="collapseContext">在2021年1月30日的直播中，泛式与竹鱼对动漫进行了友善的讨论，因某泛表现出阴阳怪气（婊里婊气）的态度，弹幕纷纷表示“拳头硬了”，并将其称为“泛式阴阳术”。加上人工智能般合适的bgm插入，营造出了莫名的节目效果，但观众们还是强烈建议竹鱼锤爆泛式。</li>
            <li class="collapseContext">本次争执的起因是泛式声称竹鱼觉得他对动画“高高在上”。这个梗在泛式的直播间有着强大的生命力：每当泛式以自己看番的经验预测动画的走向时，观众们则会刷弹幕“高高在上”。</li></ul>
          </el-collapse-item>
        </div>
      </el-collapse>
      <table>
        <tr>
          <td><img src="../assets/fungif/back.gif" alt="none"></td>
          <td><img src="../assets/fungif/rabbit.gif" alt="none"></td>
        </tr>
      </table>
      <!-- **************************************************************************** -->
      <h2>早年经历</h2>
      <el-collapse>
        <div @mouseover="showImg('e')" @mouseleave="hideImg('e')">
          <el-collapse-item>
            <template slot="title">
              <span class="collapseTitle"><i class="el-icon-arrow-down"></i>    角色扮演</span>
              <img src="../assets/emoji.png" alt="none" class="emoji" v-show="showe">
            </template>
            <ul>
            <li class="collapseContext">曾经在小学时期和同学玩魔王把公主抢走，而王子前来解救公主，但此时早已黑化的公主却在王子面前和魔王搞了起来的神奇角色扮演游戏，而泛式就担任公主这个神圣的职责——这时候就已经和ntr产生了奇妙的联系了吗？。</li></ul>
          </el-collapse-item>
        </div>
        <div @mouseover="showImg('f')" @mouseleave="hideImg('f')">
          <el-collapse-item>
            <template slot="title">
              <span class="collapseTitle"><i class="el-icon-arrow-down"></i>    少年梦想</span>
              <img src="../assets/emoji.png" alt="none" class="emoji" v-show="showf">
            </template>
            <ul>
            <li class="collapseContext">幼年时的梦想是成为21世纪著名<strong>政治家</strong>，<strong>军事家</strong>，<strong>思想家</strong>和自人类学会生火和农业革命之后，给人类社会带来最大革新的<strong>人类革命家</strong>（？），并登上百度百科。</li>
            </ul>
          </el-collapse-item>
        </div>
        <div @mouseover="showImg('g')" @mouseleave="hideImg('g')">
          <el-collapse-item>
            <template slot="title">
              <span class="collapseTitle"><i class="el-icon-arrow-down"></i>    旋风游侠</span>
              <img src="../assets/emoji.png" alt="none" class="emoji" v-show="showg">
            </template>
            <ul>
            <li class="collapseContext">泛式曾自曝自己的中二时期给自己的设定为：在这个世界里，只能用武技的人叫剑士，只会有魔法的人叫术士，还有一种天之骄子，能同时使用武技和魔法的人就称为游侠，而自己又是稀有的风属性的天赋，故被人称为“旋风游侠”！（泛式本人称此条目信息并不完全正确：“虽然的确有这个名字，但不是这么来的啊！”）</li>
            <li class="collapseContext">除了旋风游侠以外，泛式当年还在自己的小本本上<del>YY</del>记录了班上每一个同学的隐藏身份和隐藏战斗力，分析出最有可能拥有隐藏身份的同学后跑去和他核实身份，“高中同桌 中二 暗号 结婚”（你们肯定都有过（我没有我没有））。</li></ul>
          </el-collapse-item>
        </div>
        <div @mouseover="showImg('h')" @mouseleave="hideImg('h')">
          <el-collapse-item>
            <template slot="title">
              <span class="collapseTitle"><i class="el-icon-arrow-down"></i>    善良的泛式</span>
              <img src="../assets/emoji.png" alt="none" class="emoji" v-show="showh">
            </template>
            <ul>
            <li class="collapseContext">小时候问母亲自己有什么优点，母亲思考了一会后挤出的一句：你...你很善良啊！泛式为此自卑了很久并评价道：你给我找出一个邪恶的中学生看看？<del>可见泛式曾有成为亚撒西男主的潜质</del></li></ul>
          </el-collapse-item>
        </div>
        <table>
        <tr>
          <td><img src="../assets/fungif/ice.gif" alt="none"></td>
          <td><img src="../assets/fungif/dance.gif" alt="none"></td>
        </tr>
      </table>
      </el-collapse>
      <!-- **************************************************************************** -->
      <h2>其他趣事（请务必看第一条!!!）</h2>
      <el-collapse>
        <div @mouseover="showImg('i')" @mouseleave="hideImg('i')">
          <el-collapse-item>
            <template slot="title">
              <span class="collapseTitle"><i class="el-icon-arrow-down"></i>    NTR</span>
              <img src="../assets/emoji.png" alt="none" class="emoji" v-show="showi">
            </template>
            <p class="collapseContext">泛式乃 NTR 作品狂热爱好者：在直播中泛式就曾多次给观众安利 NTR 相关的游戏、动画<del>以及本子</del>，并常常对观众表露自己对 NTR 作品即泛氏哲学的热爱。</p>
            <ul>
            <li class="collapseContext">因此，当直播或者动画涉及NTR话题时往往会飘过“泛式狂喜”的弹幕或者评论。<del>泛式累了，泛式不想狂喜</del></li>
            <li class="collapseContext">泛式曾在自己的科普视频中透露自己之所以能达到对 NTR 作品这么深层次理解的原因是因为自己有着多年的 NTR 鉴赏经验。即用分镜讲自己的故事。</li>
            <li class="collapseContext">在视频的评论区中，拜年祭导演平安夜的噩梦发问：“所以说..你平时都在研究些什么啊。”泛式回复称ntr作品是多年的爱好，研究这行比做视频还早。<del>牛头人带师泛式名不虚传</del></li>
            <li class="collapseContext">泛式特别喜欢动画里面扭曲的名场面尤其是NTR场面，例如在街角魔族第九话中<del>虾米口</del>吉田优子抛弃了千代田桃陪着阳夏木蜜柑看电影，出影院时三人撞见的名场面，泛式表示这是抑制不住的快乐。而其室友则痛斥“你今晚biss”。</li>
            <li class="collapseContext">除了视频科普，泛式也非常喜欢在直播中给观众科普 NTR 知识：第一次直播人数到达2000的时候讲的就是 NTR 相关知识；而第一次直播上B站首页、第一次观看人数到达10000时都是在讲 NTR 相关的东西。所以第一次从MAD区转战杂谈区时泛式所选择的题材就是他最爱、接触时间最多的 NTR。</li></ul>
            <p class="collapseContext" id="truth">“ 在优秀的 NTR 作品中，比起“睡”这一类肤浅的<del>嘿嘿</del>场景，创作者会将更多的精力放在对“夺取”这一环节的细节刻画上。能够名留青史的NTR作品都无一不在对角色的心理活动上，有着极其精彩的描写。NTR 提供了一个进入幻想世界的入口：一些人选择代入黄毛，体验作为加害者，人性中原始的罪恶；一些人选择代入被苦主，感受珍视之物被毁灭的悲剧与苦痛；另一些人选择代入女主，体验身为高等智慧生物却无法抵抗原始兽性的欲望，耻辱，却又不屈的堕落史诗。在马斯洛的需求层级中，性是与食物和水并列的最底层需求，而爱是和社交等价的高级需求，NTR的本质就是一种对人类需求层次的颠覆，底层的肉体快感是否能逾越高层的精神需求，NTR的求道者们，得以在虚拟的世界中寻求人性的真谛，并追逐着对性与爱的思考。 ”    ——泛式</p>
          </el-collapse-item>
        </div>
        <div @mouseover="showImg('j')" @mouseleave="hideImg('j')">
          <el-collapse-item>
            <template slot="title">
              <span class="collapseTitle"><i class="el-icon-arrow-down"></i>    一色股</span>
              <img src="../assets/emoji.png" alt="none" class="emoji" v-show="showj">
            </template>
            <p class="collapseContext">全仓购入一色彩羽股<del>赔得血本无归</del></p>
            <ul>
            <li class="collapseContext">2015年6月十八号日记：我擦，好萌啊，一色。</li>
            <li class="collapseContext">喜欢一色，想给团子做MAD的雪乃党比企谷八泛（瓶子原话）</li>
            <li class="collapseContext">在2020年四月3日的奶番视频中公然表明要以《让我剪剪》的栏目方式做春物的IF线以守护输掉的自己各大党派。<del>“没有人会受伤的世界，就由我来守护！！！”</del></li>
            <li class="collapseContext">现在还代表泛式在日麻当中追混一色或清一色的行为,在春物完结后那个男人终于认清了自己</li></ul>
          </el-collapse-item>
        </div>
        <div @mouseover="showImg('k')" @mouseleave="hideImg('k')">
          <el-collapse-item>
            <template slot="title">
              <span class="collapseTitle"><i class="el-icon-arrow-down"></i>    抖M属性</span>
              <img src="../assets/emoji.png" alt="none" class="emoji" v-show="showk">
            </template>
            <ul>
            <li class="collapseContext">经常自爆黑历史，并自己一条一条读出来，能在羞耻中获取异样的快感。</li>
            <li class="collapseContext">2020年3月28日发布了一部视频，<del>故意找理由来</del>决定阅读自己的百科。</li>
            </ul>
          </el-collapse-item>
        </div>
        <div @mouseover="showImg('l')" @mouseleave="hideImg('l')">
          <el-collapse-item>
            <template slot="title">
              <span class="collapseTitle"><i class="el-icon-arrow-down"></i>    泛冰冰</span>
              <img src="../assets/emoji.png" alt="none" class="emoji" v-show="showl">
            </template>
            <ul>
              <li class="collapseContext">面对资本主义的诱惑泛式果断地选择了妥协，不再用爱发电，在女朋友竹鱼的帮助下开始了自己淘宝卖家的生涯。</li>
              <li class="collapseContext">第一件用自己形象做的周边则是冰垫，在那几周的直播里大概有一半时间在宣传冰垫。功夫不负有心人，第一批冰垫顺利卖光，随后膨胀的泛式没有考虑到夏天的离去大量定制了第二批冰垫，导致货物大量囤积。</li>
              <li class="collapseContext">于是每到周末的夜晚，在B站33989号直播间里总能听到一个gaygay的声音在寒冬中低语呢喃着：“买一个冰垫吧，各位大佬买一个冰垫吧，他能为你在冬天的暖气房中添抹一丝凉意……求求你们买一个啊……”</li>
              <li class="collapseContext">后来各位观众老爷因为听到泛式gaygay的声音过于哀怨而产生了恻隐之心，几位大佬把库存清空后作为粉丝福利以抽奖的形式全部送出。由于这场卖冰垫清库存之战持续时间过久，期间每一次直播都会被泛式的冰垫广告洗脑，所以人们将他称为冬天里的泛冰冰。</li>
            </ul>
          </el-collapse-item>
        </div>
        <table>
        <tr>
          <td><img src="../assets/fungif/crazy.gif" alt="none"></td>
          <td><img src="../assets/fungif/ola.gif" alt="none"></td>
        </tr>
      </table>
      </el-collapse>
    </div>
  </div>
</template>

<script>
export default {
  name:"FunStory",
  data() {
    return {
      showa:false,
      showb:false,
      showc:false,
      showd:false,
      showe:false,
      showf:false,
      showg:false,
      showh:false,
      showi:false,
      showj:false,
      showk:false,
      showl:false,
    }
  },
  methods: {
    showImg(data) {
      this["show"+data] = true;
    },
    hideImg(data) {
      this["show"+data] = false;
    }
  },
}
</script>

<style scoped>
.myCard3 {
  width: 800px;
  /* background-color: rgba(255, 255, 255, 0.8) ; */
  opacity: 0.85;
  margin: 0 auto;
  border-radius: 5px;
  border: 2px solid #333333;
  padding: 0 20px;
  box-shadow: 2px 2px 5px rgb(134, 134, 134);
  position: relative;
}
.collapseTitle{
  font-size: 20px;
}
.collapseContext{
  font-size: 16px;
}
.el-icon-arrow-down{
  margin-left: 10px;
}
.emoji{
  height: 60px;
  right: 50px;
  position: absolute;
  /* display: none; */
}
table{
  /* height: 100px; */
  width: 90%;
}
table img{
  height: 150px;
  margin: 10px 0;
}
td{
  text-align: center;
  width: 50%;
}
#truth{
  background-color: rgba(255, 238, 238, 0.8);
  padding: 5px;
  border-radius: 15px;
}
p{
  margin: 0 15px;
}


</style>