<template>
  <router-view/>
</template>

<style>
#app {
  font-family: "Poppins", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #000;
  font-size: 16px;
}
#sideNav a.router-link-active {
  color: rgb(9, 168, 197);
  border-bottom: 4px solid rgb(9, 168, 197);
}
.main-content {
  padding-top: 105px;
  overflow-x: auto;
  font-size: 16px;
}
a {
  text-decoration: none;
}
.whiteButton {
  background-color: #fff;
  color: rgb(9, 168, 197);
  border: 1px solid rgb(9, 168, 197);
  font-weight: 700;
}
.whiteButton:hover {
  background-color: rgb(9, 168, 197);
  color: #fff;
}
.rgbButton {
  background-color: rgb(9, 168, 197);
  color: #fff;
  font-weight: 700;
}
.rgbButton:hover {
  background-color: #fff;
  color: rgb(9, 168, 197);
  border: 1px solid rgb(9, 168, 197);
}
::placeholder {
  font-size: 12px;
}
thead {
  font-size: 14px;
}
tbody {
  font-size: 12px;
}
label {
  font-size: 14px;
  font-weight: 700;
}
</style>
