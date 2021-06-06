<template>
  <img class="logo" src="https://bit.ly/fcc-relaxing-cat" alt="Logo PMB PMK ITB 2021" />
  <h1 class="title">PMB PMK ITB 2021</h1>
  <div class="circle-container">
    <div class="circle2"></div>
    <div class="circle1"></div>
  </div>
  <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet" type="text/css" />
</template>

<style>
.title {
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 2.5rem;
  line-height: 5rem;
  text-align: center;
  color: #4d76b7;
  display: flex;
  justify-content: center;
}

.logo {
  background: #c4c4c4;
  display: flex;
  margin-left: auto;
  margin-right: auto;
  margin-top: 1.5rem;
  height: 3.75rem;
  width: 3.75rem;
}

.circle-container {
  display: flex;
  height: 200px;
  justify-content: flex-end;
  padding: 6.25rem 3.125rem 0rem 0rem;
}

.circle1 {
  width: 21rem;
  height: 21rem;
  border-radius: 50%;
  background: linear-gradient(223.16deg, #ffdc95 24.25%, #afceff 85.77%, #ffe5af 85.77%);
}

.circle2 {
  width: 7.5rem;
  height: 7.5rem;
  border-radius: 50%;
  margin-top: 15.625rem;
  background: linear-gradient(61.74deg, #4d76b7 1.11%, #95beff 68.71%);
}
</style>
