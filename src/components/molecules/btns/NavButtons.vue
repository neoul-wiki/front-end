<template>
  <div class="navButtons navButtons_all">
      <div class="navButton_out navButtons_all" style="background: white;
    color: #209cff;">
        <div class="navButton_in">
          <div class="navButton_icon navButtons_all">
            <i class="fas fa-atlas"></i>
          </div>
          <div class="navButton_text navButtons_all">
            <label>문 서</label>
          </div>
        </div>
      </div>
      <div class="navButton_out navButtons_all">
        <div class="navButton_in">
          <div class="navButton_icon navButtons_all">
            <i class="fas fa-clipboard-list"></i>
          </div>
          <div class="navButton_text navButtons_all">
            <label>게시판</label>
          </div>
        </div>
      </div>
      <div class="navButton_out navButtons_all">
        <div class="navButton_in">
          <div class="navButton_icon navButtons_all">
            <i class="fas fa-archway"></i>
          </div>
          <div class="navButton_text navButtons_all">
            <label>토 론</label>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
    export default {
        name: "NavButtons"
    }
</script>

<style scoped>

  .navButtons{
    margin-top: 5px;
    margin-right: 20px;
  }
  .navButton_out{
    width: 80px;
    height: 40px;
    margin-left: 5px;
    border-radius: 5px 5px 0px 0px;
    color: white;
    /*text-shadow: 0px 0px 2px black;*/
  }
  .navButton_icon{

  }
  .navButton_text{
    font-size: 15px;
    margin-left: 5px;
    font-weight: bold;
  }
  .navButton_in{
    line-height: 35px;
    width: 100%;
    height: 100%;
    margin-left: 10px;
  }
  .navButtons_all{
    float: left;
  }
  .fa-atlas{
    font-size: 20px;
  }
  .fa-clipboard-list{
    font-size: 21px;
  }
  .fa-archway{
    font-size: 18px;
  }
</style>
