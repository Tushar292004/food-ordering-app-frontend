import landingImage from "../assets/landing.png"
import appDownload from "../assets/appDownload.png"

const HomePage = () => {
  return(
    <div className="flex flex-col gap-12 px-4">
        <div className="rounded-lg shadow-md py-8 flrx flex-col gap-5 text-center text-background bg-foreground m-2">
            <h1 className="text-5xl font-bold tracking-tight p-2">Tuck into a takeaway today</h1>
            <span className="text-xl">Food is just a click away</span>
        </div>
        <div className="grid md:grid-cols-2 gap-5">
            <img src={landingImage} className="" alt="" />
            <div className="flex flex-col items-center justify-center gap-4 text-center">
                <span className="font-bold text-4xl tracking-tighter">
                    Order takeaway even faster!
                </span>
                <span className="font-thin text-xl">
                    Download the EatersBay app for faster ordering and personalised recommendations
                </span>
                <img src={appDownload} alt="" />
            </div>
        </div>
    </div>
  )
}

export default HomePage;