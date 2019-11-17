import Vue from 'vue'
import VueRouter from 'vue-router'
import Products from '../views/products.vue'
import Cart from '../views/cart.vue'
import Discount from '../views/discount.vue'
import AddDiscount from '../views/addDiscount.vue'
import AddTicket from '../views/addTicket.vue'
import Ticket from '../views/ticket.vue'
import Me from '../views/me.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'root',
    redirect: '/products/it'
  },
  {
    path: '/products/:type',
    name: 'products',
    component: Products
  },
  {
    path: '/cart',
    name: 'cart',
    component: Cart
  },
  {
    path: '/me',
    name: 'me',
    redirect: '/me/discount',
    component: Me,
    children: [
      {
        path: 'discount',
        name: 'discount',
        component: Discount
      },
      {
        path: 'ticket',
        name: 'ticket',
        component: Ticket
      },
      {
        path: 'addDiscount',
        name: 'addDiscount',
        component: AddDiscount
      },
      {
        path: 'addTicket',
        name: 'addTicket',
        component: AddTicket
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
