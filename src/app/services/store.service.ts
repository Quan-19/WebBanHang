import { Injectable } from '@angular/core';
import {ProductModel} from "../models/product.model";

@Injectable({
  //một lớp có thể sử dụng ở nhiều nơi
  providedIn: 'root'
})
export class StoreService {


  constructor() { }

  products: ProductModel[] = [
    {
      id: 1,
      image:'../assets/iphone-12-pro-max-graphite-hero.png',
      name: 'iPhone 12 Pro Max',
      price: 32990000,
      quantity: 10,
      description: 'iPhone 12 Pro Max 128GB - Chính hãng VN/A',
    },
    {
      id: 2,
      image: '../assets/Samsung-Galaxy-S21-Ultra-5G-821.jpg',
      name: 'Samsung Galaxy S21 Ultra',
      price: 28990000,
      quantity: 10,
      description: 'Samsung Galaxy S21 Ultra 5G 128GB-Chính hãng',
    },
    {
      id: 3,
      image: '../assets/google_ga01316_us_pixel_5_128gb_5g_1595335.jpg',
      name: 'Google Pixel 5',
      price: 15990000,
      quantity: 10,
      description: 'Google Pixel 5 128GB - Chính hãng VN/A',
    },
    {
      id: 4,
      image: '../assets/oneplus_5011101666_9_pro_256gb_5g_1629055.jpg',
      name: 'OnePlus 9 Pro',
      price: 19990000,
      quantity: 10,
      description: 'OnePlus 9 Pro 5G 128GB - Chính hãng VN/A',
    },
    {
      id: 5,
      image: '../assets/Xiaomi-Mi-11-2.jpg',
      name: 'Xiaomi Mi 11',
      price: 13990000,
      quantity: 10,
      description: 'Xiaomi Mi 11 128GB - Chính hãng VN/A',
    },
    {
      id: 6,
      image: '../assets/iphone-12-pro-max-graphite-hero.png',
      name: 'iPhone 12 Pro Max',
      price: 32990000,
      quantity: 10,
      description: 'iPhone 12 Pro Max 128GB - Chính hãng VN/A',
    },

  ];

  cart: ProductModel[] = []
  total : number = this.totalcost();

  addtocart(item: any) {
    console.log(item)
    console.log(item.id)

    let findIndex = this.cart.findIndex((element) => {
      return element.id == item.id;
    }); // Đi tìm trong giỏ hàng có tồn tại sp mà mình muốn thêm hay không
    let findIndex1 = this.products.findIndex((element) => {
      return element.id == item.id;
    })

    if (this.products[findIndex1].quantity == 0) {
      return;
    }

    if (findIndex != -1) {// Nếu tồn tại (index != -1)
      this.cart[findIndex].quantity += 1;
      this.products[findIndex1].quantity -= 1;
    } else {
      this.cart.push({// Thêm sp mới đó vào
        id: item.id,
        image: item.image,
        name: item.name,
        price: item.price,
        quantity: 1,
        description: item.description
      })
      this.products[findIndex1].quantity -= 1;
    }
    console.log(this.products[findIndex1].quantity)
    this.totalcost();
  }
  deletecart(item: any) {
    console.log(item);
    let findIndex = this.cart.findIndex((element) => {
      return element.id == item.id;
    });
    let findIndex1 = this.products.findIndex((element) => {
      return element.id == item.id;
    })
    if (this.cart[findIndex].quantity == 1) {
      this.cart.splice(findIndex, 1);
      this.products[findIndex1].quantity += 1;
    } else {
      this.cart[findIndex].quantity -= 1;
      this.products[findIndex1].quantity += 1;
    }
    this.totalcost();
  }

  totalcost() {
    this.total = this.cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
    return this.total;
  }
  checkout() {
    if (this.cart.length === 0) {
      alert('Giỏ hàng của bạn đang trống. Vui lòng thêm một số sản phẩm vào giỏ hàng trước khi thanh toán');
      return;
    }

    const total = this.totalcost();
    const confirmed = confirm(`Tổng số tiền của bạn là ${total} VND. Bạn có muốn tiến hành thanh toán không?`);

    if (confirmed) {
      this.cart = [];
      alert('Cám ơn đã mua hàng!');
    }
  }
}
