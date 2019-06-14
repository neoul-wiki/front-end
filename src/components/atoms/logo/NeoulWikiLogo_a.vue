<template>
  <div class="neoul_logo">
    <label class="neoul_logo_in">Neoul </label>
    <label class="neoul_logo_in text_wiki">Wiki</label>
  </div>
</template>

<script>
    export default {
        name: "NeoulWikiLogo_a"
    }
</script>

<style scoped>
  .neoul_logo{
    font-family: 'Leckerli One', cursive;
    position: relative;
    margin-left: 10px;
    transition: all 0.2s ease;
  }
  .neoul_logo_in{
    font-size: 22px;
    margin: 0px auto;
    line-height: 44px;
    color: white;
    text-shadow: 1px 0px black;
    transition: all 0.2s ease;
  }
  .text_wiki{
    transition: all 0.2s linear;
  }
  @media (max-width: 650px){
    .text_wiki{
      display: none;
      transition: all 0.2s ease;
    }
    .neoul_logo_in{
      font-size: 16px;
    }
  }
</style>
