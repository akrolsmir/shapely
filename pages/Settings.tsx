import BasePage from '../components/base-page'

function getLocation() {
  if (navigator.geolocation) {
    window.console.log('try to get curr pos')
    navigator.geolocation.getCurrentPosition(showPosition);
  }
}

function showPosition(position: any) {
  let x = document.getElementById('x');
  if (!x) return;
  x.innerHTML = "Latitude: " + position.coords.latitude + "<br>Longitude: " + position.coords.longitude;

}

function SettingRow(props: { children: React.ReactNode }) {
  return (
    <div className="mb-6">{props.children}</div>
  )
}

export default function Settings(props: {}) {
  return <BasePage>
  <div className="flex p-16 flex-col text-center container content-center items-center justify-center">
    <h3 className="text-xl m-2 mb-12">Let's talk about your dealbreakers</h3>
    <SettingRow>Gender preferences <br/>
  <input name="women" type="checkbox" value="women"/>
  <label className="mr-1" htmlFor="women">Women</label>
  <input name="men" type="checkbox" value="men"/>
  <label className="mr-1" htmlFor="men">Men</label>
  <input name="nb" type="checkbox" value="nb"/>
  <label className="mr-1" htmlFor="nb">NB</label>
  <input name="other" type="checkbox" value="other"/>
  <label htmlFor="other">Everyone</label>
</SettingRow>
    <SettingRow >Your location <input className="border border-slate-600" type="text" defaultValue="zip code" />
    <div id="x" onClick={getLocation}>look up location</div>
    radius of acceptable matches
      <input type="range" name="range-1a" id="range-1a" min="0" max="100" value="30"/>
    </SettingRow>
    <SettingRow>Age range preferences  
      <input type="range" name="range-1a" id="range-1a" min="0" max="100" value="30"/>
    </SettingRow>


    {/*note, hinge has (we could model as "dealbreakers"): ethnicity, religion, height, has children, family plans, education level, politics, drinking, smoking, marajuana, drugs*/}


    <button className="bg-gray-200 p-2 mt-16 rounded-sm">Take a break from Shapely </button>
    </div>
  </BasePage>
}
