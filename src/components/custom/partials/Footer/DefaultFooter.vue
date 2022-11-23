<template>
<footer class="iq-footer bg-white">
   <div class="container-fluid">
      <div class="row">
         <div class="col-lg-6">
         </div>
         <div class="col-lg-6 d-flex justify-content-end">
           <p> &copy; {{currentDate}} <a href="#">OSBOHA180</a> </p>
         </div>
      </div>
   </div>
</footer>
</template>
<script>
export default {
  name: 'DefaultFooter',
  data(){
   return {
      currentDate:new Date().getFullYear(),
   }
  }
}

</script>
