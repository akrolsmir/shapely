import DailyIframe from '@daily-co/daily-js'
import BasePage from '../components/base-page'

export default function VideoCall() {
  if (typeof window === 'undefined') {
    return <BasePage>Server-only, move along</BasePage>
  }

  const dailyCall = DailyIframe.createFrame({
    url: 'https://shapely.daily.co/test-room',
    userName: 'Anonymous',

    showLeaveButton: true,
    iframeStyle: {
      position: 'fixed',
      width: '100%',
      height: '100%',
    },
  })
  dailyCall.join()

  return <BasePage>{/* <div>Call goes here!</div> */}</BasePage>
}
