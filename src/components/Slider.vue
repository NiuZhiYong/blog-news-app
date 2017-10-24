<template>
	<div class="banner">
        <ul class="clearfix">
            <li><img src="../assets/images/img_1.jpg" alt=""/>
            	<div class="text-box">
                	<h2>还可以降低首付款健身房11111</h2>
                    <p>刘德华11 / 文</p>
                </div>
            </li>
            <li><img src="../assets/images/img_2.jpg" alt=""/>
            	<div class="text-box">
                	<h2>还可以降低首付款健身房2222</h2>
                    <p>刘德华22 / 文</p>
                </div>
            </li>
            <li><img src="../assets/images/img_3.jpg" alt=""/>
            	<div class="text-box">
                	<h2>还可以降低首付款健身房333</h2>
                    <p>刘德华33 / 文</p>
                </div>
            </li>
            <li><img src="../assets/images/img_1.jpg" alt=""/>
            	<div class="text-box">
                	<h2>还可以降低首付款健身房11111</h2>
                    <p>刘德华11 / 文</p>
                </div>
            </li>
        </ul>
        <ol>
            <li class="active"></li>
            <li></li>
            <li></li>
            <li></li>
        </ol>
    </div>
</template>
<script>
	export default{
		mounted(){
			this.slider();
            this.fetchDate();
		},
        data(){
            return{
                imgList:[]
            }
        },
		methods:{
			slider(){
				$(function (){
					var mySwipe=new Swipe($('.banner')[0],{
						auto:2000,
						continuous:true,
						stopPropation:true,
						callback:function (index,element){
							$('.banner ol li').removeClass('active');
							$('.banner ol li').eq(index).addClass('active');
						}
					});
				});
			},
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