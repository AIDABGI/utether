import Component, { PageEl } from '@/components/Libs/Component';
import Copy from '@/components/Libs/Copy';
import Router from 'next/router'
import Window from '@/components/Libs/Window';
import TextBox from '@/components/Libs/TextBox';
import Icon2Titles from '@/components/Libs/Icon2Titles';
import Icon3Titles from '@/components/Libs/Icon3Titles';


export default p => Component(p, Page);
const Page: PageEl = (props, state, refresh, getProps) => {

  let styles = global.styles


  return (
    <div style={{ direction: "ltr", minHeight: "11vh", }}>
      <br-x />
      <Window style={{ minHeight: 460, margin: 10, width: "calc(100% - 50px)", backgroundImage: 'url("https://cdn.ituring.ir/research/43/Tether.jpg"', backgroundRepeat: "no-repeat" }}>
        <br-x />
        <center style={{ fontSize: 20, color: "white" }}>TETHER</center>
        <br-x />
        <br-x />
        <br-x />
        <div style={{ width: "100%", height: 50, backgroundColor: "#000000CD", borderRadius: 10, textAlign: "center", color: "white" }}>
          <br-x />
          <br-x />
          price:{(props.p.price as number).toLocaleString("en")}</div>
        <br-x />
        <br-x />
        <br-x />
        <br-x />
        <br-x />
        <br-x />
        <div style={{ width: "100%", height: 50, backgroundColor: "#000000CD", borderRadius: 10, textAlign: "center", color: "white" }}>
          <br-x />
          <br-xx />
          24h changes:{" ٪" + (Number(props.p.diff24d as number).toLocaleString("en"))}</div>
        <br-x />
        <br-x />
        <br-x />
        <br-x />
        <br-x />
        <br-x />
        <div style={{ width: "100%", height: 50, backgroundColor: "#000000CD", borderRadius: 10, textAlign: "center", color: "white" }}>
          <br-x />
          <br-xx />
          week changes:{" ٪" + (Number(props.p.diff7d as number).toLocaleString("en"))}</div>
        <br-x />
        <br-x />
        <br-x />
        <br-x />
        <br-x />
        <br-x />
        <div style={{ width: "100%", height: 50, backgroundColor: "#000000CD", borderRadius: 10, textAlign: "center", color: "white" }}>
          <br-x />
          <br-xx />
          Monthly changes :{" ٪" + (Number(props.p.diff30d as number).toLocaleString("en"))}</div>
        <br-x />
        <br-x />
        <br-x />
        <center style={{ fontSize: 20, color: "white" }}>TOURING</center>
        <br-x />

        {/* <div style={{width:"100%", height:50, backgroundColor:"rebeccapurple", borderRadius:10, textAlign:"center", }}> */}
        {/* <br-x/>   */}
        {/* <br-xx/>  */}
        {/* price:{props.p} */}
        {/* </div> */}

        {/* <pre style={{ direction: "ltr" }}>{JSON.stringify(props, null, 2)}</pre> */}
        {/* <Icon2Titles title1={"hiii"} title2={"byyy"}/> */}


      </Window>
    </div>
  )
}


export async function getServerSideProps(context) {


  var session = await global.SSRVerify(context)
  var { uid, name, image, imageprop, lang, cchar,
    unit, workspace, servid, servsecret,
    usedquota, quota, quotaunit, status, regdate, expid,
    role, path, devmod, userip, } = session;

  let res = await fetch("https://api.tetherland.com/currencies")
  let data = await res.json()
  let p = data.data.currencies.USDT

  console.log("PRICE", p)

  return {
    props: {
      data: global.QSON.stringify({
        p,
        session,
        // nlangs,
      })
    },
  }
}