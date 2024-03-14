<template>
  <div class="not-found">
    <span>NotFound</span>
  </div>
</template>

<style lang='scss' scoped>
  .not-found {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
    span {
      display: inline-block;
      font-size: 50px;
      font-weight: 900;
      color: rgb(255, 99, 99);
      border: 5px solid rgb(255, 99, 99);
      border-radius: 20px;
      padding: 10px 20px;
    }
  }
</style>