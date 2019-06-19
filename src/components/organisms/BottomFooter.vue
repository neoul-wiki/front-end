<template>
  <div id="bottomFooter">
    <div class="footerLeft_out no-drag">
      <ul>
        <li>소개</li>
        <li>정보</li>
        <li>문의</li>
        <li>맨위로</li>
      </ul>
      <neoul-wiki-logo_a class="footerLogo"></neoul-wiki-logo_a>
    </div>
  </div>
</template>

<script>
    import NeoulWikiLogo_a from "../atoms/logo/NeoulWikiLogo_a";
    export default {
        name: "BottomFooter",
      components: {NeoulWikiLogo_a}
    }
</script>

<style scoped>
  #bottomFooter{
    width: 100%;
    height: max-content;
    margin-top: 100px;
  }
  .footerLeft_out{
    width:1200px;
    margin: 0px auto;
    position:relative;
    border-top: 1px solid lightblue;
    padding-top: 15px;
  }
  .footerLeft_out > ul{
    list-style: none;
  }
  .footerLeft_out > ul > li {
    float: left;
    padding: 5px 20px;
    margin: 5px 10px;
    color: #333333;
    cursor: pointer;
  }
  .footerLeft_out > ul > li:hover{
    color: #209cff;
    font-weight: bold;

  }
  .footerLogo{
    position: absolute;
    right: 0px;
    border-radius: 10px;
    color: #333333;
  }
  .no-drag {
    -ms-user-select: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    user-select:none;
  }
</style>
