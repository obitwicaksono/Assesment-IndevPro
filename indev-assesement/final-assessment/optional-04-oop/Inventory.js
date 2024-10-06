/**
 * TODO
 * Selesaikan kode pembuatan class Inventory dengan ketentuan:
 * - Memiliki properti `items` untuk menampung daftar item dalam bentuk array.
 * - Memiliki method `addItem` untuk menambahkan item ke properti `items`.
 * - Memiliki method `removeItem` untuk menghapus item berdasarkan `id`.
 * - Memiliki method `listItems` untuk mengembalikan string yang merupakan informasi detail barang (dipanggil dari fungs `item.displayDetails()`).
 */

class Inventory {
  constructor() {
    this.items = []; // Properti untuk menampung daftar item
  }

  // Method untuk menambahkan item ke dalam inventory
  addItem(item) {
    this.items.push(item);
  }

  // Method untuk menghapus item berdasarkan id
  removeItem(id) {
    this.items = this.items.filter((item) => item.id !== id);
  }

  // Method untuk menampilkan daftar item dalam bentuk string
  listItems() {
    return this.items.map((item) => item.displayDetails()).join("\n");
  }
}

// Contoh class Item untuk melengkapi contoh penggunaan class Inventory
class Item {
  constructor(id, name, quantity) {
    this.id = id;
    this.name = name;
    this.quantity = quantity;
  }

  // Method untuk menampilkan detail item
  displayDetails() {
    return `ID: ${this.id}, Name: ${this.name}, Quantity: ${this.quantity}`;
  }
}

// Jangan hapus kode di bawah ini!
export default Inventory;
