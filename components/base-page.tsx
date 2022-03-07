import BottomNavBar from './bottom-nav-bar'

export default function BasePage(props: { children: React.ReactNode }) {
  return (
    <div className="w-full">
      {props.children}
      <BottomNavBar />
    </div>
  )
}
