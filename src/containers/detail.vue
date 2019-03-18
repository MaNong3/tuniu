<template>
	<div>
		<Header text='产品详情'></Header>
		<Banner :productDetail='productDetail' ></Banner>
		<textBox :productDetail='productDetail'></textBox>
		<BottomBar :productDetail='productDetail'></BottomBar>
	</div>
</template>
<script>
	import Header from 'comp/center/header.vue'
	import BottomBar from 'comp/detail/bottom-bar.vue'
	import Banner from 'comp/detail/banner.vue'
	import textBox from 'comp/detail/textBox.vue'

	export default{
		name:'detail',
		created(){
			this.getData()
		},
		data(){
			return{
				productDetail:{},
			}
		},
		methods:{
			getData(){
				this.$axios.get('../../static/mock/index.json')
						   .then((res)=>{
						   	console.log(this.$route.params.id);
						   		if(res.data.ret===true){
						   			var data=res.data.data
						   			var id=this.$route.params.id
						   			this.initData(data.recommendList,id)
						   		}
						   })
			},
			initData(arr,id){
				for(var i=0;i<arr.length;i++){
					if(arr[i].id==id){
						this.productDetail=arr[i]
						break
					}
				}
			},
		},
		components:{
			Header,
			BottomBar,
			Banner,
			textBox
		}
	}
</script>
<style lang="less" scoped>
	
</style>