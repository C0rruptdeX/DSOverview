<template>
  <div class="head">

    <p style="float:left;">&#124;&nbsp; DsOverview</p>
 
  </div>
</template>

<script>

export default {
  name: 'Head',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .head {
   
  width:100%;
  height:55px;
  background-color:#3D3E43;
  z-index:9;
  position:fixed;
  top:0px;
  left:0px;
  }

  .head p{

  font-family: 'Montserrat', sans-serif;
  color:white;
  margin:17px 0px 0px 80px;
  font-size:20px;
  }
</style>
