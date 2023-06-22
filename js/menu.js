function addtoCart(itemName) {
  let itemPrice = 0;
  switch (itemName) {
    case "latest-1":
      itemPrice = 50000;
      break;
    case "latest-2":
      itemPrice = 60000;
      break;
    case "latest-3":
      itemPrice = 70000;
      break;
    case "latest-4":
      itemPrice = 80000;
      break;
    case "latest-5":
      itemPrice = 90000;
      break;
    case "latest-6":
      itemPrice = 100000;
      break;
    case "latest-7":
      itemPrice = 110000;
      break;
    case "latest-8":
      itemPrice = 120000;
      break;
    case "latest-9":
      itemPrice = 130000;
      break;
    case "romance-1":
      itemPrice = 50000;
      break;
    case "romance-2":
      itemPrice = 55000;
      break;
    case "romance-3":
      itemPrice = 60000;
      break;
    case "romance-4":
      itemPrice = 65000;
      break;
    case "romance-5":
      itemPrice = 70000;
      break;
    case "romance-6":
      itemPrice = 75000;
    case "horror-1":
      itemPrice = 70000;
      break;
    case "horror-2":
      itemPrice = 75000;
      break;
    case "horror-3":
      itemPrice = 80000;
      break;
    case "horror-4":
      itemPrice = 85000;
      break;
    case "horror-5":
      itemPrice = 90000;
      break;
    case "horror-6":
      itemPrice = 95000;
      break;
    case "novel-1":
      itemPrice = 50000;
      break;
    case "novel-2":
      itemPrice = 55000;
      break;
    case "novel-3":
      itemPrice = 60000;
      break;
    case "novel-4":
      itemPrice = 65000;
      break;
    case "novel-5":
      itemPrice = 70000;
      break;
    case "novel-6":
      itemPrice = 75000;
      break;
    case "sejarah-1":
      itemPrice = 70000;
      break;
    case "sejarah-2":
      itemPrice = 75000;
      break;
    case "sejarah-3":
      itemPrice = 80000;
      break;
    case "sejarah-4":
      itemPrice = 85000;
      break;
    case "sejarah-5":
      itemPrice = 90000;
      break;
    case "sejarah-6":
      itemPrice = 95000;
      break;
    default:
      console.log("Item not found");
  }
  let cartItems = document.getElementById("cart-items");
  let cartTotal = document.getElementById("cart-total");
  let item = document.createElement("li");
  item.innerHTML = `${itemName} - Rp ${itemPrice}`;
  cartItems.appendChild(item);
  cartTotal.innerText = parseInt(cartTotal.innerText) + itemPrice;
}

function updateCart() {
  // Menghapus semua barang dari tampilan keranjang belanja
  let cartItems = document.getElementById("cart-items");
  let cartTotal = document.getElementById("cart-total");
  cartItems.innerHTML = "";
  cartTotal.innerText = "0";
}

function checkout() {
  let cartTotal = document.getElementById("cart-total").innerText;
  let cartItems = document.getElementById("cart-items").innerText;
  let name = prompt("Nama Anda:");
  let keterangan = prompt("Masukkan Keterangan (Optional):");

  // Menampilkan pesan terimakasih dengan informasi pemesanan
  let konfirmasi = confirm(`Terima kasih atas pembeliannya\n\nNama:  ${name} 
    \nAnda telah memesan: \n${cartItems} 
    \nKeterangan: ${keterangan} \nTotal Pembayaran: ${cartTotal}`);

  if (konfirmasi == true) {
    window.alert(
      "Pesanan Anda akan segera diproses. Terima kasih atas pesanan Anda."
    );
  } else {
    window.alert("Pesanan Anda dibatalkan.");
  }

  // Mengosongkan keranjang belanja
  cart = [];
  updateCart();
}
