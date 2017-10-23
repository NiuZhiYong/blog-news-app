<template>
	<div id="home">
		<div class="content">
			<Slider></Slider>
		    <div class="newsList">
		    	<ul>
		            <li v-for="(item,index) in arrList.list">
		                <!-- <a href="">
		                	<h2>{{index}}{{item.title}}</h2>
	                    	<p>{{item.time}}{{item.src}}</p>
		                </a> -->
		                <router-link to="/article">
		                	<a href="javascript:;">
		                		<h2>{{item.title}}</h2>
		                		<p>{{item.time}}{{item.src}}</p>
		                	</a>
		                </router-link>
		            </li>
		        </ul>
		    </div>
		</div>
	</div>
</template>
<script>
	import Slider from './Slider.vue'

	export default{
		data(){
			return {
				arrList:[]
			}
		},
		components:{
			Slider
		},
		mounted(){
			this.fetchDate();
		},
		methods:{
			fetchDate(){
				var _this=this;
				this.$http.get('https://way.jd.com/jisuapi/get?channel=头条&num=10&start=0&appkey=91ab6d77051f78585e07966eec10f45e').then(function(res){					
					_this.arrList=res.data.result.result;
					console.log(_this.arrList.result.list)
				}).catch(function(err){
					console.log('Home',err);
				});
			}
		}
	}
</script>
<style scoped>
	@import '../assets/css/index.css';
</style>