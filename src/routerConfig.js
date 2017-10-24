
import Home from './components/Home.vue'
import Follow from './components/Follow.vue'
import Column from './components/Column.vue'
import UserInfo from './components/Userinfo.vue'
import Search from './components/Search.vue'
import Article from './components/Article.vue'

export default [
  {
	path:'/home',
	component:Home
  },
  {
	path:'/follow',
	component:Follow
  },
  {
	path:'/column',
	component:Column
  },
  {
  path:'/article/:index',
  component:Article
  },
  {
	path:'/search',
	component:Search
  },
  {
	path:'/user-info',
	component:UserInfo
  },
  {
  	path:'/',
  	redirect:'/Home'
  },
  {
  	path:'*',
  	redirect:'/Home'
  }
];


