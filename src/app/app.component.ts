import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import {NavbarComponent} from "./components/navbar/navbar.component";
import {ProductCardComponent} from "./components/product-card/product-card.component";
import {ProductModel} from "./models/product.model";
import {StoreService} from "./services/store.service";
import {CartComponent} from "./components/cart/cart.component";
import {TotalCostComponent} from "./components/total-cost/total-cost.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, NgFor, NgIf, NavbarComponent, ProductCardComponent, CartComponent, TotalCostComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'first_project';
  constructor(public storeService : StoreService) {
    console.log(this.storeService.products);
  }

  }



  //   let findIndex = this.cart.findIndex((element) => {
  //     return element.id == this.products[index].id;
  //   }); // Đi tìm trong giỏ hàng có tồn tại sp mà mình muốn thêm hay không
  //   if (findIndex != -1) {
  //     // Nếu tồn tại (index != -1)
  //     this.cart[findIndex].quantity += 1;
  //     if (this.products[index].inStock <= 0) {
  //       return;
  //     } else {
  //       this.products[index].inStock--;
  //     } // Tăng số lượng lên 1
  //   } else {
  //     // Nếu không tồn tại
  //     this.cart.push({
  //       // Thêm sp mới đó vào
  //       id: this.products[index].id,
  //       name: this.products[index].name,
  //       price: this.products[index].price,
  //       quantity: 1,
  //     });
  //     this.products[index].inStock--;
  //   }
  //   console.log(this.cart);
  // }

  // removeFromCart(index: number) {
  //   //Xóa thẻ đã chọn
  //   const productInCart = this.cart[index];
  //   this.products.find((p) => p.id === productInCart.id)!.inStock +=
  //     productInCart.quantity;
  //   this.cart.splice(index, 1);
  // }
  //
  // calculateTotal(): number {
  //   //tính tổng tiền của những sp đã chọn
  //   return this.cart.reduce(
  //     (total, item) => total + item.price * item.quantity,
  //     0
  //   );
  // }
