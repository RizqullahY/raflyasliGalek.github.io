document.addEventListener("alpine:init", () => {
	Alpine.data("products", () => ({
		items: [
			{ id: 1, name: "Kopi Arabika", img: "1.kopi-arabika.jpg", price: 10000 },
			{ id: 2, name: "Kopi Robusta", img: "2.kopi-robusta.jpg", price: 20000 },
			{ id: 3, name: "Kopi Liberika", img: "3.kopi-liberika.jpeg", price: 30000 },
			{ id: 4, name: "Kopi Joss", img: "4.kopi-joss.jpg", price: 40000 },
			{
				id: 5,
				name: "Kopi Mandailing",
				img: "5.kopi-mandailing.jpg",
				price: 50000,
			},
		],
	}));

	Alpine.store("cart", {
		items: [],
		total: 0,
		quantity: 0,
		add(newItem) {
			// this.items.push(newItem)
			// this.quantity++;
			// this.total +=  newItem.price
			// console.log(this.total)

			const cartItem = this.items.find((item) => item.id === newItem.id);

			// Jika belum ada / cart masih kosong
			if (!cartItem) {
				this.items.push({ ...newItem, quantity: 1, total: newItem.price });
				this.quantity++;
				this.total += newItem.price;
			} else {
				// Jika barang sudah ada, cek apakah barang beda atau sama dengan yang ada di cart
				this.items = this.items.map((item) => {
					// Barangnya beda
					if (item.id !== newItem.id) {
						return item;
					} else {
						// jika barang sudah ada, tambah quantity dan totalnya
						item.quantity++;
						item.total = item.price * item.quantity;
						this.quantity++;
						this.total += newItem.price;
						return item;
					}
				});
			}
			// console.log(this.total)
		},
		remove(id) {
			//mengambil item yang mau diremove berdasarka id
			const cartItem = this.items.find((item) => item.id === id);

			if (cartItem > 1) {
				//  telusuri 1 1
				this.items = this.items.map((item) => {
					// jika bukan barang yang di klik
					if (item.id !== id) {
						return item;
					} else {
						item.quantity--;
						item.total = item.price * item.quantity;
						this.quantity--;
						this.total -= item.price;
						return item;
					}
				});
			}
			// kalai barangnya cuma 1 jadi ngebug
			else if (cartItem.quantity === 1) {
				this.items = this.items.filter((item) => item.id !== id);
				this.quantity--;
				this.total -= cartItem.price;
			}
		},
	});
});
// konversi ke rupiah
const rupiah = (number) => {
	return new Intl.NumberFormat("id-ID", {
		style: "currency",
		currency: "IDR",
		minimumFractionDigits: 0, // biar tidak ada koma
	}).format(number);
};

// form validation
//* yang diatas aslinya disini
document.addEventListener("DOMContentLoaded", function () {
	const checkoutButton = document.querySelector(".checkout-button");
	if (checkoutButton) {
		checkoutButton.disabled = true;
	}

	// const checkoutButton = document.querySelector(".checkout-button");
	// checkoutButton.disabled = true;

	const form = document.querySelector("#checkout-form");

	form.addEventListener("keyup", function () {
		for (let i = 0; i < form.elements.length; i++) {
			if (form.elements[i].value.length !== 0) {
				checkoutButton.classList.remove("disabled");
				checkoutButton.classList.add("disabled");
			} else {
				return false;
			}
		}
		checkoutButton.disabled = false;
		checkoutButton.classList.remove("disabled");
	});

	// Kirim data
	checkoutButton.addEventListener("click", async function (e) {
		e.preventDefault();
		const formData = new FormData(form);
		const data = new URLSearchParams(formData);
		const objData = Object.fromEntries(data);
		const message = formatMessage(objData);
		console.log(message)
		window.open('http://wa.me/6283135852840?text=' + encodeURIComponent(message))

		//* Payment Gateway
		// try {
		// 	const response = await fetch("php/placeOrder.php", {
		// 		method: "POST",
		// 		body: data,
		// 	});

		// 	const token = await response.text();
		// 	console.log(token);
		// 	snap.pay(token)
		// } catch (error) {
		// 	console.log(error);
		// }

	});

	const formatMessage = (obj) => {
		return `Data Customer
			Nama : ${obj.name}
			Email : ${obj.email}
			No Hp : ${obj.phone}
			Data Pesanan
			${JSON.parse(obj.items).map(
					(item) => `
				${item.name} (
				${item.quantity}x 
				${rupiah(item.total)}) \n
				`)}
			TOTAL : ${rupiah(obj.total)}\n
			Terima Kasih
		`;
	};
});
