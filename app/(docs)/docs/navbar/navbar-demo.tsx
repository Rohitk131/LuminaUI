import NavbarComponent from "@/components/luminaui/navbar"

export default function Navbar() {
  const info = [
    { label: 'Products', items: ['New Arrivals', 'Best Sellers', 'Discounts'] },
    { label: 'Analytics', items: ['Overview', 'Sales Report', 'User Insights'] },
    { label: 'Settings', items: ['Profile', 'Account', 'Privacy'] },
  ]
  return (
    <NavbarComponent info={info} />
  )
}