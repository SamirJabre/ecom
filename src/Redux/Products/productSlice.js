import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: [
        {
            id: 1,
            name: 'Product 1',
            price: 100,
            image: "https://fastly.picsum.photos/id/275/600/600.jpg?hmac=3HEb8gkrgrQlOli0G65Q0Cai9wRtAQTjbPwuEXI2TvM",
            description: 'This high-quality product features a sleek and modern design, crafted to meet your everyday needs while offering outstanding performance and durability. Ideal for both casual and professional use.'
          },
          {
            id: 2,
            name: 'Product 2',
            price: 200,
            image: 'https://fastly.picsum.photos/id/33/600/600.jpg?hmac=bbUV6WE0F1SL2_riCb-BCklVxOh_TX884aOPM-ePFO0',
            description: 'Built with longevity in mind, this reliable product is perfect for daily use. Its minimalist look and solid structure make it a valuable addition to your collection of essentials.'
          },
          {
            id: 3,
            name: 'Product 3',
            price: 300,
            image: 'https://fastly.picsum.photos/id/546/600/600.jpg?hmac=HGJd_W2zfu_jimxwqsbzLzHII3gdDUwdCzFVOnRYJCU',
            description: "Compact yet powerful, this item offers impressive features in a small form factor. Whether you're on the go or at home, it delivers consistent results with minimal effort."
          },
          {
            id: 4,
            name: 'Product 4',
            price: 400,
            image: 'https://fastly.picsum.photos/id/937/600/600.jpg?hmac=2FnsDUVJKpS_Q2vrUQzXT4y2JJ34EZTmNXPJcpeMuaw',
            description: 'Elegantly styled and built to last, this product combines sophistication with durability. It’s the perfect solution for anyone who values aesthetics and long-term performance.'
          },
          {
            id: 5,
            name: 'Product 5',
            price: 500,
            image: 'https://fastly.picsum.photos/id/923/600/600.jpg?hmac=-Z9u__nla6z2tlApM048LeVj04Bf2U4q4I8dbynZPCc',
            description: 'Designed for modern lifestyles, this product brings convenience, quality, and performance together in one package. A great option for users who want more from everyday tools.'
          },
          {
            id: 6,
            name: 'Product 6',
            price: 600,
            image: 'https://fastly.picsum.photos/id/535/600/600.jpg?hmac=N-BmwAnkdn8AupmTxjXrwM_bW58Tj13GgBqtszBr7GI',
            description: 'With premium materials and precise engineering, this product offers top-tier performance and a premium feel. It’s the choice of those who demand the very best from their gear.'
          },
          {
            id: 7,
            name: 'Product 7',
            price: 700,
            image: 'https://fastly.picsum.photos/id/41/600/600.jpg?hmac=jpAuvdaze4LF6AOTOwXzvJXZLVwwa-W05tFRXNDCb2M',
            description: 'Simple, clean, and incredibly efficient — this product does exactly what you need, with zero distractions. Its subtle design hides powerful functionality under the surface.'
          },
          {
            id: 8,
            name: 'Product 8',
            price: 800,
            image: 'https://fastly.picsum.photos/id/68/600/600.jpg?hmac=60uSpmt3bTgoSRxJW78ugK1uwcL-4gaVKm8JtiGZ9_A',
            description: 'Built for users who expect more, this product delivers excellent value through its efficient design, reliable build, and enhanced features tailored to your routine.'
          },
          {
            id: 9,
            name: 'Product 9',
            price: 900,
            image: 'https://fastly.picsum.photos/id/79/600/600.jpg?hmac=_uT_boSmi0QxZjsyPsvayEDau2XA8XGt5L6l1jMh4VQ',
            description: 'Sleek, smart, and made for performance, this product is a top pick for users who want both beauty and brains. It fits seamlessly into any lifestyle or environment.'
          }
    ],
};

const productSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        addProduct: (state, action) => {
            state.items.push(action.payload);
        },
        removeProduct: (state, action) => {
            state.items = state.items.filter(item => item.id !== action.payload.id);
        },
        clearProducts: (state) => {
            state.items = [];
        },
    },
});

export const { addProduct, removeProduct, clearProducts } = productSlice.actions;
export default productSlice.reducer;