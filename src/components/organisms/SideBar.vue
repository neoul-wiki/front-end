<template>
  <div id="sideBar_o">
    <div class="sideBarTitle">
      <span class="sideBarTitle_text">최근 문서</span>
      <span class="title_subText">더보기</span>
    </div>
    <div class="sideBarTitle_border"></div>
    <div class="sideBarContent">
      <div v-for="(data, index) in sideBarData" :key="data" class="sideBarData sideBar_borderBottom">
        <router-link class="sideBarData_title" :to="'/'+data.url">{{data.title}}</router-link>
        <a class="sideBarData_date">{{data.date}}</a>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
      /*
      * 넘어오는 데이터
      * sideBarData : title(제목), date(시간), url(주소)
      * */
      props:['sideBarData'],
        name: "SideBar"
    }
</script>

<style scoped>
  #sideBar_o{
    width: 100%;
    height: 100%;
    border-radius: 10px;
  }
  .sideBarTitle_border{
    background-image: linear-gradient(to right, #43bde8 0%, #68e0cf 100%);
    width: 93%;
    height: 2px;
    margin: 0px auto;
  }
  .sideBarTitle{
    text-align: left;
    padding: 18px 13px 8px 13px;
    /*border-bottom: 1px solid #68e0cf;*/
  }
  .sideBarContent{
    width: 100%;
    min-height: 357px;
  }
  .sideBarTitle_text{
    font-size: 16px;
    font-weight: bold;
  }
  .title_subText{
    font-size: 12px;
    color: #aeaeae;
    margin-left: 10px;
  }
  .sideBarData{
    width: 95%;
    margin: 8px auto 0px auto;
    text-align: left;
    padding-bottom: 8px;
  }
  .sideBar_borderBottom{
    border-bottom: #68e0cf 1px solid;
  }
  .sideBarData_title{
    text-decoration:none;
    width: 82%;
    display: inline-flex;
    color: #999999;
    overflow:hidden;
    height: 20px;
  }
  .sideBarData_date{
    right: 0px;
  }
  @media (max-width: 1200px) {
    .sideBarData{
      display: flex;
    }
  }
</style>
