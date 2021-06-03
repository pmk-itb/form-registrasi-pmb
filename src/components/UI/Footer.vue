<template>
  <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet" type="text/css" />
  <div class="logo">
    <p class="title">Contact Us</p>
    <a
      href="https://page.line.me/?accountId=uhw1394i&openerPlatform=native&openerKey=home%3Arecommend#mst_challenge=w_DkQe4cP_bb1glVIIIk73ae9ZjjhJYZxEfhLL985Mk"
      ><fa :icon="['fab', 'line']" style="color: #4d76b7" />
    </a>
    <a href="https://twitter.com/pmkitb"
      ><fa :icon="['fab', 'twitter']" style="color: #4d76b7; margin-left: 20px" />
    </a>
    <a href="https://www.fa cebook.com/rana.pmkitb"
      ><fa :icon="['fab', 'facebook-f']" style="color: #4d76b7; margin-left: 20px" />
    </a>
    <a href="https://www.instagram.com/pmkitb/"
      ><fa :icon="['fab', 'instagram']" style="color: #4d76b7; margin-left: 20px" />
    </a>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
.title {
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  color: #5b5b5b;
  justify-content: center;
  margin-bottom: 15px;
}

.logo {
  font-size: 20px;
  vertical-align: middle;
  position: fixed;
  top: 95%;
  left: 50%;
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}
</style>
