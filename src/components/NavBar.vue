<template>
    <div id="nav" class="nav">
      <router-link to="/" class="brand">Gallery List</router-link>
      <nav>
        <router-link :to="{ name: 'gallery-list' }">gallery-list</router-link>
      </nav>
    </div>
  </template>
  
  <script>
  /* eslint-disable */
  export default {
  
  }
  </script>
  
  <style>
  /* eslint-disable */
      .nav {
          display: flex;
          justify-content: space-between;
          align-items: center;
          height: 60px;
      }
      .nav > .brand {
          font-family: 'Montserrat', sans-serif;
          font-weight: 700;
          font-size: 1.5rem;
          color: #39b982;
          text-decoration: none;
      }
      .nav .nav-item {
          box-sizing: border-box;
          margin: 0 5px;
          color: rgba(0, 0, 0, 0.5);
          text-decoration: none;
      }
      .nav .nav-item.router-link-exact-active{
          color: #39b982;
          border-bottom: solid 2px #39b982;
      }
  </style>