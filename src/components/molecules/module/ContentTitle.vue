<template>
  <div id="contentTitle">
    <div class="titleBox">

      <!--가운데 타이틀-->
      <div class="tb_center">
        <div class="tb_centerTitle">
          <span>{{contentTitle}}</span>
        </div>
      </div>
      <!---->

      <!--왼쪽 버튼들-->
      <div class="tb_left">
        <div class="tb_leftTop no-drag">
          <div class="tb_leftTopBtn">
            <i class="icon-star tb_leftTopBtn_star"></i>
          </div>
          <div class="tb_leftTopBtn">
            <i class="icon-heart tb_leftTopBtn_heart"></i>
          </div>
          <div class="tb_leftTopBtn">
            <i class="icon-edit-1 tb_leftTopBtn_edit"></i>
          </div>
        </div>
        <div class="tb_leftBottom">
          <span>{{contentDate}}</span>
        </div>
      </div>
      <!---->

      <!--오른쪽 버튼들-->
      <div class="tb_right no-drag">
        <div class="tb_rightBtn">
          <span>내용</span>
        </div>
        <div class="tb_rightBtn">
          <span>권한</span>
        </div>
        <div class="tb_rightBtn">
          <span>이력</span>
        </div>
      </div>
      <!---->
    </div>
    <div class="contentTitleBottomLine"></div>
  </div>
</template>

<script>
    export default {
      props:['contentTitle','contentDate'],
        name: "ContentTitle"
    }
</script>

<style scoped>
  #contentTitle{
    width: 100%;
    min-width: 500px;
  }
  .titleBox{
    width: 100%;
    height: 100%;
    position: relative;
  }
  .tb_left{
    position: absolute;
    left: 0px;
    bottom: 0px;
    color: #999999;
  }
  .tb_right{
    position: absolute;
    right: 0px;
    bottom: 0px;
    color: #999999;
  }
  .tb_rightBtn{
    float: left;
    margin: 0px 4px;
    padding: 2px 4px;
    border-bottom: 2px solid white;
    cursor: pointer;
  }
  .tb_rightBtn:hover{
    border-bottom: 2px solid #4bc5e1;
    color: #4bc5e1;
    font-weight: bold;
  }

  .tb_leftTopBtn{
    float: left;
    cursor: pointer;
    position: relative;
    width: 24px;
    height: 20px;
    margin: 5px;
  }
  .tb_leftTopBtn:hover{
    color: #209cff;

  }
  .tb_leftTopBtn_star{
    position: absolute;
    left: 0px;
    top:1px;
  }
  .tb_leftTopBtn_heart{
    position: absolute;
    left: 0px;
    top:2px;
  }
  .tb_leftTopBtn_edit{
    position: absolute;
    left: 0px;
  }
  .tb_center{
    width: 100%;
    min-width: 450px;
    max-width: 630px;
    margin: 0px auto 8px auto;
    min-height: 40px;
    height: auto;
    max-height: 200px;
    font-size: 24px;
  }
  .contentTitleBottomLine{
    background-image: linear-gradient(to right, #209cff 0%, #4fc9df 100%);
    width: 99%;
    height: 2px;
    margin: 0px auto;
  }
  .no-drag {
    -ms-user-select: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    user-select:none;
  }
  @media (max-width: 1200px){
    .tb_center{
      margin-bottom: 40px;
    }
  }
  @media (max-width: 950px){
    .tb_center{
      width: 630px;
      margin-bottom: 40px;
    }
    .contentTitleBottomLine{
      width:95%;
    }
  }
  @media (max-width: 650px) {
    .tb_center{
      width: 90%;
      margin-bottom: 40px;
    }
  }
</style>
