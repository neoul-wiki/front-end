<template>
  <div id="mainContent_o">
    <div class="contentBox">
      <div class="cb_content">
        <content-title
          v-bind:contentTitle="contentTitle"
          v-bind:contentDate="contentDate"
        ></content-title>
        <div>{{contentText}}</div>
      </div>
      <div class="cb_sideBar">
        <side-bar v-bind:sideBarData="sideBarData"></side-bar>
      </div>
    </div>
  </div>
</template>

<script>
    import ContentTitle from "../../molecules/module/ContentTitle";
    import SideBar from "../SideBar";
    export default {
      name: "main",
      components: {SideBar, ContentTitle},
      data(){
        return {
          name: 'main',
          contentTitle: '애플에서 2010년 4월 20일(북미 기준)에 첫 출시한 태블릿 컴퓨터.애플에서 2010년 4월 20일(북미 기준)에 첫 출시한',
          contentDate:'2019-06-18',
          contentText:'애플에서 2010년 4월 20일(북미 기준)에 첫 출시한 태블릿 컴퓨터. 2019년 기준 최신작은 iPad(6세대), iPad Pro(3세대), iPad Air(3세대)와 iPad mini(5세대).\n' +
            '\n' +
            '맥북과 아이폰의 중간 단계에 있는 제품으로서 태블릿 컴퓨터의 가이드 라인을 성공적으로 제시한 최초의 제품으로 볼 수 있다. 아이폰과 같은 iOS를 장착을 하고 있기 때문에, 아이폰에서 구동하는 모든 프로그램을 사용할 수 있다.\n' +
            '\n' +
            '기술적으로는 크게 새로울 것이 없는 물건이다. 화면 크고 배터리 빵빵하고 빠른 프로세서를 탑재한 아이팟 터치라고 보아도 큰 무리는 없다. 다만 화면이 커진 덕에 아이폰과는 사뭇 다른 UX를 느낄 수 있으며[2], 큰 화면을 이용해 사진, 동영상, 문서등을 살펴보기 편해졌으며 아이폰이나 아이팟에서 하기 힘들었던 세세한 작업을 컨트롤 할 수 있다는 점이 아이패드의 핵심요소이다. 사용자 입장이 아닌, 기업 입장에서 본다면 기술적으로 전혀 새로울 것 없는 기기로 완전히 새로운 대박시장을 창조한 것은 어찌 보면 대단한 경영수완이라 볼 수도 있겠다.\n' +
            '\n' +
            '개발 자체는 아이폰보다 먼저 시작했다. 멀티 터치 기술을 확보 및 보완한 후 개발하는 과정에서 "이것을 휴대전화에 적용하면 어떨까?"라고 생각해서 개발한 것이 아이폰. 아이패드는 아이폰을 개발하는 동안 개발이 중단되었다가 아이폰이 정상궤도에 오르자 다시 개발을 재개해 2010년에 출시했다. # D8 컨퍼런스에서 스티브 잡스 본인이 직접 밝힌 내용.\n' +
            '\n' +
            '참고로 아이패드의 가격은 새 기종이 나올 때 마다 매번 동결이다. 아이패드 첫 출시 때부터 지금까지 계속 같은 가격을 유지하고 있다.[3][4] 오히려 2014년에 출시된 아이패드 에어 2와 아이패드 미니 3의 경우 32GB 모델의 단종과 함께 64GB와 128GB 모델은 가격이 하락했다. 다만 하락의 이유로 플래시 메모리를 TLC로 교체한 것도 있으며 이로 인한 성능 하락 문제도 있었다. 또한 사실상 아이패드 에어 3로 나와도 문제가 없었다고 까이는 아이패드 프로 9.7인치가 프로 딱지를 달고 $100, 최대 $200나 가격이 인상되었다. 자세한 내용은 문서 참조. 다행히 아이패드/5세대와 아이패드/6세대는 기존 아이패드 보다도 낮은 가격을 형성하고 있으며, 심지어 6세대는 아이패드 프로 라인업이 아님에도 애플 펜슬을 지원한다.\n' +
            '\n' +
            '2018년 기준으로 약 3억 6000만 대의 판매고를 올렸다.',
          sideBarData:[
            {title:'노래듣기 너무좋고', date:'12:42', url:'test'},
            {title:'스피커 하나 산거같아', date:'12:42', url:'test'},
            {title:'아이패드 소리 끝내줘', date:'12:41', url:'test'},
            {title:'밑에다가 하면 될거같어양', date:'12:41', url:'test'},
            {title:'게시판은 어떻게하지', date:'12:41', url:'test'},
            {title:'게시판도 보이고싶어양', date:'12:41', url:'test'},
            {title:'문서들이 보여양', date:'12:41', url:'test'},
            {title:'최근문서에양', date:'12:41', url:'test'},
            {title:'아이패드', date:'12:40', url:'test'},
            {title:'디자인은 너무 어려워', date:'12:40', url:'test'}
          ]
        }
      }
    }
</script>

<style scoped>
  #mainContent_o{
    margin-top: 45px;
    width: 100%;
    /*z-index: 1;*/
    display: inline-block;
  }
  .contentBox{
    width: 1200px;
    margin: 10px auto 0px auto;
    display: flex;
  }
  .cb_content{
    width: 900px;
    min-height: 200px;
    /*background: #cccccc;*/
  }
  .cb_sideBar{
    width: 290px;
    min-height: 200px;
    /*background: #999999;*/
    margin-left: 10px;
  }
  @media (max-width: 1200px) {
    .contentBox{
      width: 100%;
    }
    .cb_content{
      width:100%;
    }
  }
  @media (max-width: 950px) {
    .cb_sideBar{
      display: none;
    }
  }
</style>
