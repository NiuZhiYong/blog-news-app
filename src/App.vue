<template>
	<div id="app">
		<Loading v-show="loading"></Loading>
		<NavHeader v-show="headerShow"></Navheader>
		<div id="view">
			<transition>
				<keep-alive>
					<router-view class="view"></router-view>
				</keep-alive>
			</transition>
		</div>
		<FooterView></FooterView>
	</div>
</template>
<script>
	import NavHeader from './components/Nav.vue'
	import FooterView from './components/Footer.vue'
	import Loading from './components/loading/Loading.vue'	
	
	import {mapActions,mapGetters} from 'vuex'
	
	export default{
		computed:mapGetters([
			'headerShow',
			'loading'
		]),
		watch:{
			$route(to,from){
				if(to.path=='/user-info'){
					this.$store.dispatch('hideHeader');
				}else{
					this.$store.dispatch('showHeader')
				}
			}
		},
		components:{
			NavHeader,
			FooterView,
			Loading
		}
	}
</script>
<style>
	@import './assets/css/index.css'
</style>