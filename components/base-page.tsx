import BottomNavBar from './bottom-nav-bar'

export default function BasePage(props: { children: React.ReactNode }) {
  return (
    <div>
      {props.children}
      <BottomNavBar />
    </div>
  )
}
