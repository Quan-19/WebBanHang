import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, NgFor, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'first_project';

  products = [
    {
      id: 1,
      name: 'Product 1',
      price: 10000,
      inStock: 10,
    },
    {
      id: 2,
      name: 'Product 2',
      price: 20000,
      inStock: 5,
    },
    {
      id: 3,
      name: 'Product 3',
      price: 15000,
      inStock: 7,
    },
    {
      id: 4,
      name: 'Product 4',
      price: 50000,
      inStock: 30,
    },
    {
      id: 5,
      name: 'Product 5',
      price: 500000,
      inStock: 10,
    },
    {
      id: 6,
      name: 'Product 6',
      price: 200000,
      inStock: 10,
    },
    {
      id: 7,
      name: 'Product 7',
      price: 4000,
      inStock: 30,
    },
    {
      id: 8,
      name: 'Product 8',
      price: 20000,
      inStock: 30,
    },
  ];

  cart: any[] = [];

  addToCart(index: number) {
    let findIndex = this.cart.findIndex((element) => {
      return element.id == this.products[index].id;
    }); // Đi tìm trong giỏ hàng có tồn tại sp mà mình muốn thêm hay không
    if (findIndex != -1) {
      // Nếu tồn tại (index != -1)
      this.cart[findIndex].quantity += 1;
      if (this.products[index].inStock <= 0) {
        return;
      } else {
        this.products[index].inStock--;
      } // Tăng số lượng lên 1
    } else {
      // Nếu không tồn tại
      this.cart.push({
        // Thêm sp mới đó vào
        id: this.products[index].id,
        name: this.products[index].name,
        price: this.products[index].price,
        quantity: 1,
      });
      this.products[index].inStock--;
    }
    console.log(this.cart);
  }
  removeFromCart(index: number) {
    //Xóa thẻ đã chọn
    const productInCart = this.cart[index];
    this.products.find((p) => p.id === productInCart.id)!.inStock +=
      productInCart.quantity;
    this.cart.splice(index, 1);
  }

  calculateTotal(): number {
    //tính tổng tiền của những sp đã chọn
    return this.cart.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  }

  checkout() {
    //báo lỗi khi không có hàng nào trong giỏ hàng
    if (this.cart.length === 0) {
      //nếu cast = 0 sẽ báo lỗi
      alert(
        'Giỏ hàng của bạn trống. Vui lòng thêm một số sản phẩm vào giỏ hàng của bạn trước khi thanh toán.'
      );
      return;
    }

    const total = this.calculateTotal(); //Thông báo số tiền phải trả
    const confirmed = confirm(
      `Tổng tiền phải thanh toán là ${total} VND. Bạn chắc chắn sẽ mua?`
    );

    if (confirmed) {
      this.cart = [];
      alert('Cảm ơn đã mua hàng!');
    }
  }
}
