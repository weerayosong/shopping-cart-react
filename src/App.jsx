import { useState } from 'react'
import Header from './components/layout/Header'
import ShoppingCartPage from './pages/ShoppingCartPage'

const products = [
    {
        id: 1,
        name: 'White T-Shirt',
        price: 390,
        category: 'Basics',
        image: 'https://images.unsplash.com/photo-1693443687750-611ad77f3aba?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTM2fHx0LXNoaXJ0fGVufDB8fDB8fHww',
    },
    {
        id: 2,
        name: 'Leather Bag',
        price: 4200,
        category: 'Accessories',
        image: 'https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fGJhZ3xlbnwwfHwwfHx8MA%3D%3D',
    },
    {
        id: 3,
        name: 'Cool Sneakers',
        price: 3200,
        category: 'Footwear',
        image: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c2hvc2V8ZW58MHx8MHx8fDA%3D',
    },
    {
        id: 4,
        name: 'Black Cap',
        price: 650,
        category: 'Accessories',
        image: 'https://images.unsplash.com/photo-1589831377283-33cb1cc6bd5d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fGNhcHxlbnwwfHwwfHx8MA%3D%3D',
    },
]

function App() {
    // เก็บรายการสินค้าที่อยู่ในตะกร้า
    const [cartItems, setCartItems] = useState([])

    const addToCart = (product) => {
        setCartItems((currentItems) => {
            // เช็กก่อนว่าสินค้านี้มีอยู่ในตะกร้าแล้วหรือยัง
            const existingItem = currentItems.find(
                (item) => item.id === product.id,
            )

            if (existingItem) {
                // ถ้ามีแล้ว ให้เพิ่มจำนวนแทนการเพิ่มรายการใหม่
                return currentItems.map((item) =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item,
                )
            }

            // ถ้ายังไม่มี ให้เพิ่มสินค้าเข้าไปพร้อม quantity เริ่มต้นเป็น 1
            return [...currentItems, { ...product, quantity: 1 }]
        })
    }

    const removeFromCart = (productId) => {
        // ลบสินค้าที่มี id ตรงกับตัวที่ผู้ใช้ต้องการเอาออก
        setCartItems((currentItems) =>
            currentItems.filter((item) => item.id !== productId),
        )
    }

    const increaseQty = (productId) => {
        // เพิ่มจำนวนสินค้าเฉพาะชิ้นที่ถูกกดเพิ่ม
        setCartItems((currentItems) =>
            currentItems.map((item) =>
                item.id === productId
                    ? { ...item, quantity: item.quantity + 1 }
                    : item,
            ),
        )
    }

    const decreaseQty = (productId) => {
        // ลดจำนวนสินค้า ถ้าเหลือ 1 แล้วกดลดอีก จะลบออกจากตะกร้าเลย
        setCartItems((currentItems) =>
            currentItems.reduce((nextItems, item) => {
                if (item.id !== productId) {
                    nextItems.push(item)
                    return nextItems
                }

                if (item.quantity > 1) {
                    nextItems.push({ ...item, quantity: item.quantity - 1 })
                }

                return nextItems
            }, []),
        )
    }

    return (
        // ส่งข้อมูลสินค้า ข้อมูลตะกร้า และฟังก์ชันจัดการตะกร้าไปให้ส่วนต่าง ๆ ของหน้าเว็บ
        <div className="min-h-screen bg-stone-950 text-stone-50">
            <Header
                cartCount={cartItems.reduce(
                    (total, item) => total + item.quantity,
                    0,
                )}
            />
            <ShoppingCartPage
                products={products}
                cartItems={cartItems}
                addToCart={addToCart}
                removeFromCart={removeFromCart}
                increaseQty={increaseQty}
                decreaseQty={decreaseQty}
            />
        </div>
    )
}

export default App
