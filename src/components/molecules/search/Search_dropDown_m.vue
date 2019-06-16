<template>
  <div class="search_drop_down_m">
    <div class="sdd_list" v-if="search_data.length > 0">
      <ul v-for="(search, index) in search_data" :key="search" class="sdd_list_data">
        <li class="sdd_list_data_ sdd_list_data_date">{{search.date}}</li>
        <li class="sdd_list_data_ sdd_list_data_type">{{search.type}}</li>
        <li class="sdd_list_data_ sdd_list_data_name">{{search.name}}</li>
      </ul>
    </div>
    <div v-if="search_data.length===0"
         v-else-if="search_data===undefined"
         class="sdd_result_not_found">
      <span>검색 결과가 존재하지 않습니다.</span>
    </div>
  </div>
</template>

<script>
    export default {
      props:['search_data'],
      name: "Search_dropDown",
      data(){
        return {

        }
      }
    }
</script>

<style scoped>
  .search_drop_down_m{
    width: 380px;
    background: white;
    border-radius: 0px 0px 5px 5px;
    border: 1px solid #cccccc;
    box-shadow: 0px 0px 1px 0px black;
    position: fixed;
    top: 45px;
    max-height: 400px;
    overflow-x: auto;
  }
  .sdd_list{
    overflow: paged-y;
  }
  .sdd_list_data{
    list-style: none;
    text-align: left;
    width: 100%;
    height: 25px;
    margin: 5px;
    font-size: 14px;
    border-bottom: #d3eeff solid 1px;
  }
  .sdd_list_data_{
    float: left;
    height: 20px;
  }
  .sdd_list_data_date{
    width: 18%;
  }
  .sdd_list_data_type{
    width: 15%;
  }
  .sdd_list_data_name{
    width: 67%;
    overflow: hidden;
  }
  .sdd_result_not_found{
    top: 45px;
    position: fixed;
  }
  @media (max-height: 500px){
    .search_drop_down_m{
      max-height: 300px;
    }
  }
</style>
