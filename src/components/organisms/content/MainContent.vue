<template>
  <div id="mainContent_o">
    <div class="layout_out">
      <div class="layout_center">
        <div class="layout_center_outline">
          <div class="layout_topContent">
            <div>
              <span>문서</span>
            </div>
            <div class="layout_top_right">
              <div>
                <span>내용</span>
              </div>
              <div>
                <span>권한</span>
              </div>
              <div>
                <span>히스토리</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="layout_right">
        <div class="layout_right_outline">

        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
      name: "main",
      data(){
        return {
          name: 'main'
        }
      }
    }
</script>

<style scoped>
  #mainContent_o{
    margin-top: 45px;
    width: 100%;
    height: 2000px;
    box-sizing: border-box;
  }
  .layout_out{
    width: 1200px;
    margin: 0px auto;
    text-align: left;
  }
  .layout_center{
    width: 900px;
    min-height: 300px;
    float: left;
  }
  .layout_right{
    width: 288px;
    min-height: 300px;
    float: left;
    margin-left: 12px;
  }
  .layout_center_outline{
    margin-top: 10px;
    width: 100%;
    min-height: 290px;
    border: 1px solid lightsteelblue;
    border-radius: 3px;
  }
  .layout_right_outline{
    border-radius: 3px;
    border: 1px solid lightsteelblue;
    margin-top: 10px;
    width: 100%;
    min-height: 290px;
  }
  .layout_topContent{
    margin: 5px;
    border-bottom: 1px solid lightsteelblue;
    height: 50px;
  }
  .layout_top_right{
    right: 0px;
    position: relative;
  }
</style>
