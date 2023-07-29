<template>
    <div  class="container">
        <NavBarVue></NavBarVue>
        <router-view/>
    </div>
</template>
<script>

export default {

}
</script>
<style>
*{
    font-family: 'Roboto',sans-serif;
}
.container{
    padding: 10px;
    margin: 10px;
}
a{
    font-weight: 600;
    color:#41B883;
    text-decoration: none;
    padding: 1px;
}

.headers{
    padding-left: 5px ;
    font-size: 19px;
    font-weight: 700;
    color: #34495E;
    border-left: 3px solid #41B883;
}

.impInfo{
    display: inline;
    white-space: nowrap;
    color: #41B883;
}

.data {
    padding: 5px;
    font-size: 18px;
    font-weight: 600;
    color: #34495E;
}
.btn{
    padding: 5px 10px;
    font-weight: 700;
    font-size: 20px;
    border: 2px solid #34495E;
    border-radius: 6px;
    background-color: white;
    color: #41B883;
}
</style>
