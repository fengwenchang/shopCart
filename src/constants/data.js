/**
 * 模仿数据
 */

export default {
  products: [
    {
      type: 'it',
      name: 'ipad',
      price: '2399.00'
    },
    {
      type: 'it',
      name: 'iphone',
      price: '5288.00'
    },
    {
      type: 'it',
      name: '显示器',
      price: '899.00'
    },
    {
      type: 'it',
      name: '笔记本电脑',
      price: '4599.00'
    },
    {
      type: 'it',
      name: '键盘',
      price: '68.00'
    },
    {
      type: 'food',
      name: '面包',
      price: '3.00'
    },
    {
      type: 'food',
      name: '饼干',
      price: '5.00'
    },
    {
      type: 'food',
      name: '蛋糕',
      price: '20.00'
    },
    {
      type: 'life',
      name: '餐巾纸',
      price: '10.00'
    },
    {
      type: 'life',
      name: '收纳箱',
      price: '20.00'
    },
    {
      type: 'life',
      name: '咖啡杯',
      price: '5.00'
    },
    {
      type: 'life',
      name: '雨伞',
      price: '45.00'
    },
    {
      type: 'wine',
      name: '啤酒',
      price: '2.00'
    },
    {
      type: 'wine',
      name: '白酒',
      price: '150.00'
    },
    {
      type: 'wine',
      name: '伏加特',
      price: '230.00'
    }
  ],
  discount: [
    {
      type: 'it',
      endTime: '2016/1/30',
      rate: 7
    },
    {
      type: 'it',
      endTime: '2020/1/30',
      rate: 9
    },
    {
      type: 'life',
      endTime: '2020/1/30',
      rate: 6
    }
  ],
  ticket: [
    {
      total: 500,
      discount: 100,
      endTime: '2020/1/30'
    },
    {
      total: 1000,
      discount: 200,
      endTime: '2020/1/30'
    },
    {
      total: 2000,
      discount: 400,
      endTime: '2020/1/30'
    }
  ],
  nav: {
    products: {
      label: '商城',
      head: [
        {
          label: '电子',
          type: 'it',
          father: 'products'
        },
        {
          label: '食品',
          type: 'food',
          father: 'products'
        },
        {
          label: '日用品',
          type: 'life',
          father: 'products'
        },
        {
          label: '酒类',
          type: 'wine',
          father: 'products'
        }
      ]
    },
    me: {
      label: '我',
      head: [
        {
          label: '折扣',
          type: 'discount',
          father: 'me'
        },
        {
          label: '优惠卷',
          type: 'ticket',
          father: 'me'
        }
      ]
    },
    cart: {
      label: '购物车',
      head: [
        {
          label: '购物车',
          type: 'cart'
        }
      ]
    },
    addDiscount: {
      label: '添加折扣',
      father: 'me',
      head: [
        {
          label: '<',
          type: 'back'
        },
        {
          label: '添加折扣',
          type: 'addDiscount'
        }
      ]
    },
    addTicket: {
      father: 'me',
      head: [
        {
          label: '<',
          type: 'back'
        },
        {
          label: '添加优惠卷',
          type: 'addTicket'
        }
      ]
    }
  },
  map: {
    it: '电子',
    food: '食品',
    life: '日用品',
    wine: '酒类'
  }
}
