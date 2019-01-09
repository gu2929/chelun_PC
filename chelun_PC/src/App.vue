<template>
  <div class='wrapper'>
    <div class='wrap'>
      <header>
        <p></p>
        <p @click='changeDom' :class="flag===true?'active':''"><span></span><span></span><span></span></p>
      </header>
      <ul :class="flag===true?'ul_Active':''">
        <li v-for='(val,ind) in showArr' :key='ind'
          :class="Index2===ind?'li_Active':''"
        ><span>{{val}}</span></li>
      </ul>
      <div class='banner'>
          <img :src="src" alt="">
      </div>
      <div id="echartsId" style="width: 600px;height:400px;"></div>
    </div>
    <div class='wraps'>
        <header>
             <p></p>
             <ul>
                <li v-for='(val,ind) in headerArr' :key='ind'
                  :class="Index1===ind?'li_Active':''"
                >
                  {{val}}
                </li>
             </ul>
        </header>
        <div class='banner' >
            <img :src="src" alt="">
        </div> 
    </div>
  </div>
</template>
<script>
var echarts = require('echarts');
import {mapState,mapMutations} from 'vuex'
export default {
    data () {
      return {
        headerArr:['产品','关于我们','大数据','新闻','招聘','商城','登录注册'],
        showArr:['首页','产品','关于我们','车轮大数据','最新动态','加入车轮'],
        flag:false,
        src:'http://picture.eclicks.cn/g1/l/2018/04/17/2e324eb8e740788b_2633_960.png',
        Index1:0,
        Index2:1
      }
    },
    computed: {
      ...mapState({
        CarArr:state=>state.getCarStore.CarArr
      })
    },
    mounted() {
      this.getCarListStore()
      this.init()
    },
    methods: {
      ...mapMutations({
        getCarListStore:'getCarStore/getCarListStore'
      }),
      changeDom () {
        this.flag=!this.flag;
      },
      init () {
        console.log(this.CarArr)
        var myChart = echarts.init(document.getElementById('echartsId'));
        myChart.setOption({
            title: {
                text: this.CarArr.map(v=>v.name)
            },
            tooltip: {},
            xAxis: {
                data: ['2018.1', '2018.2', '2018.3','2018.4', '2018.5', '2018.6','2018.7','2018.8','2018.9', '2018.10','2018.11','2018.12']
            },
            yAxis: {},
            series: this.CarArr
        });
      }
    },
}
</script>
<style lang="scss">
    *{
      box-sizing: border-box;
      list-style:none;
      margin:0;
      padding:0;
    }
    html,body,.wrapper{
      width:100%;
      height:100%;
      font-size:100px;
      font-size:.14rem;
    }
    .wrap{
      width:100%;
      height:100%;
      position:relative;
      header{
        width:100%;
        height:7rem;
        display:flex;
        justify-content: space-between;
        align-items: center;
        padding:0 2rem;
        p:nth-child(1){
          width:10rem;
          height:5rem;
          background:url('./assets/logo-black.png') no-repeat;
          background-size:contain;
          background-position:center;
          z-index:2;
        }
        p:nth-child(2){
          z-index:2;
          span{
            transition:all .6s;
            display:block;
            width:4rem;
            height:.2rem;
            background:#0099f8;
          }
          span:nth-child(2) {
              margin:1.5rem 0;
          }
        }
        .active{
            span:nth-child(1){
              width:4.6rem;
              background:#fff;
              transform:translate3D(-100%,0,0) rotate3D(0,0,1,-135deg) ;
              transform-origin: right bottom;
            }
            span:nth-child(2) {
              opacity:0;
            }
            span:nth-child(3) {
                width:4.6rem;
                background:#fff;
                transform:rotate3D(0,0,1,-45deg);
                transform-origin: left bottom;
            }
        }
      }
      ul{
        width:100%;
        height:0;
        position:absolute;
        top:0;
        left:0;
        z-index:1;
        background:#0099f8;
        transition:all .6s;
        padding:0 10rem 0rem 10rem;
        li{
          transition:all .7s;
          width:100%;
          height:0;
          border-bottom:1px solid #fff;
          font-size:8rem;
          text-align:left;
          color:#fff;
          display:block;
        }
      }
      .ul_Active{
          height:100%;
          padding:10rem 10rem 0rem 10rem;
          li{
            height:auto;
            padding:2rem 0rem;
          }
          .li_Active span{
            position:relative;
            &:after{
                position:absolute;
                right:-30px;
                top:46%;
                content:'';
                width:0;
                height:0;
                border-width:10px;
                border-style:solid;
                border-color:#fff transparent transparent  transparent ;/*透明 透明  灰*/
            }
          }
      }
      .banner{
        width:100%;
        height:auto;
        img{
            width:100%;
            height:auto;
        }
      }
    }
    .wraps{
        width:100%;
        height:100%;
        display:none;
        header{
            position:fixed;
            left:0;
            top:0;
            z-index:99;
            width:100%;
            height:7rem;
            display:flex;
            justify-content: space-between;
            align-items: center;
            padding:0 5rem;
            border-bottom:1px solid #ccc;
            p{
              width:10rem;
              height:5rem;
              background:url('./assets/logo-black.png') no-repeat;
              background-size:contain;
              background-position:center;
            }
            ul{
              display:flex;
              line-height:5rem;
              li{
                margin:0 2rem;
                font-size:8rem;
              }
              li:last-child{
                font-size:5rem;
              }
              .li_Active{
                position:relative;
                &:after{
                    position:absolute;
                    right:-20px;
                    top:46%;
                    content:'';
                    width:0;
                    height:0;
                    border-width:6px;
                    border-style:solid;
                    border-color:#000 transparent transparent  transparent ;/*透明 透明  灰*/
                }
              }
            }
        }
        .banner{
          width:100%;
          height:auto;
          img{
            width:100%;
            height:auto;
          }
        }
    }
    @media screen and (min-width:1000px){
      .wraps{
        display:block;
      }
      .wrap{
        display:none;
      }
    }
</style>