import getters from './getters.js'

const state={
	show:true,
	loading:false
};

const mutations={
	showHeader(state){
		state.show=true;
	},
	hideHeader(state){
		state.show=false;
	},
	showLoading(state){
		state.loading=true;
	},
	hideLoading(state){
		state.loading=false;
	}
};

export default{
	state,
	mutations,
	getters
}