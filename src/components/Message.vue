<template>
  <div>
    <div id="basic" class="card">
      <h2 class="title">个人信息</h2>
      <table border="1">
        <tbody>
          <tr>
            <td class="label">别名</td>
            <td colspan="3">泛树人、泛鸽鸽、泛八爷、动画区(新教)大主教、动漫高手(一代目)、<del>做卡通视频的大哥哥</del>、<del>混沌宅B</del></td>
            <td rowspan="4" style="width:200px;"><img src="../assets/peoplePic2.jpg" alt="none"></td>
          </tr>
          <tr>
            <td class="label">国籍</td>
            <td>中国</td>
            <td class="label">籍贯</td>
            <td>江苏南京</td>
          </tr>
          <tr>
            <td class="label">出生</td>
            <td>1994年2月10日</td>
            <td class="label">职业</td>
            <td>杂谈向up主、MAD作者、<del>旋风游侠</del></td>
          </tr>
          <tr>
            <td class="label">相关人士</td>
            <td colspan="3">
              <strong>友人</strong>：瓶子君152、赫萝老师、吃素的狮子；<strong>妻子</strong>：竹鱼；<br/>
              <del><strong>异时空同位体</strong>：爱宕（犬）、表田里道</del>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name:"Message",
}
</script>

<style scoped>
#basic{
  width: 800px;
  /* background-color: rgba(255,255,255,0.90); */
  /* opacity: 0.85; */
  margin: 10px auto;
  border-radius: 5px;
  padding: 2px 0px 25px;
  border: 2px solid #333333;
  box-shadow: 2px 2px 5px rgb(134, 134, 134);
}
.title{
  margin: 20px;
}
table{
  width: 95%;
  font-size: 16px;
  border-collapse: collapse;
  margin: 0 auto;
}
table .label{
  background-color: rgb(255, 203, 203);
  text-align: center;
}
tr td{
  padding: 7px;
}
table img{
  width: 100%;
}

</style>