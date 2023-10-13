"use client"
import { useState } from "react"
import Link from "next/link"
export default function Item({ name, quantity, image }) {
  const [showModal, setShowModal] = useState(false)

  const handleAddToCart = () => {
    setShowModal(true)
    setTimeout(() => setShowModal(false), 2000) // Hide the modal after 2 seconds
  }

  return (
    <main>
        {/*back button */}
        <div className="flex min-h-screen flex-col items-center justify-between p-24">
            <button 
            className="bg-gradient-to-r m-2 w-32 rounded from-purple-500 via-blue-500 to-blue-700 text-center text-white py-1"><Link href="/">Back to Home</Link></button>
        </div>
    </main>
  )
}