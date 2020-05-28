const app = new Vue({
	el: '#app',
	data: {
		books: [
			{
				id: 1,
				name: '《算法导论》',
				data: '2006-09',
				price: 65.00,
				count: 1
			},
			{
				id: 2,
				name: '《UNIX编程艺术》',
				data: '2006-02',
				price: 50.00,
				count: 1
			},
			{
				id: 3,
				name: '《编程珠玑》',
				data: '2008-10',
				price: 77.00,
				count: 1
			},
			{
				id: 4,
				name: '《代码大全》',
				data: '2006-03',
				price: 88.00,
				count: 1
			}
		]
	},
	methods: {
		// getFinalPrice(price) {
		// 	return '￥' + price.toFixed(2)
		// }
		
		increment(index) {
			this.books[index].count++
		},
		decrement(index) {
			this.books[index].count--
		},
		removeHandle(index) {
			this.books.splice(index,1)
		}
	},
	computed: {
		totalPrice() {
			let totalPrice = 0
			// for(let i = 0;i < this.books.length; i++) {
			// 	totalPrice += this.books[i].price * this.books[i].count
			// }
			
			//for in
			// for(let i in this.books) {
			// 	totalPrice += this.books[i].price * this.books[i].count
			// }
			
			//for of
			
			for(let i of this.books) {
				totalPrice += i.price * i.count
			}
			

			return totalPrice
		}
	},
	
	filters: {
		// 过滤器也是以函数形式,需要传递参数
		showPrice(price) {
			return '￥' + price.toFixed(2)
		}
	}
})