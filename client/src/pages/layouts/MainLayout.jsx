import { ConnectButton } from '@rainbow-me/rainbowkit';

export default function MainLayout({ children }) {
    return (
        <div className="flex flex-col bg-fondoImg bg-no-repeat bg-cover h-screen w-screen">
            <header className="flex justify-around items-center bg-green-800 bg-opacity-70 py-2">
                <div className="flex items-center gap-6">
                    <a href="#" target="_blank">
                        <img
                            src="https://cdn.logojoy.com/wp-content/uploads/20210422104926/Discord-Logo-White.png"
                            alt="Discord Icon"
                            className="h-14 w-14"
                        />
                    </a>
                    <a href="#" target="_blank">
                        <img
                            src="https://cdn-icons-png.flaticon.com/512/81/81725.png"
                            alt="Twitter Icon"
                            className="invert h-10 w-10"
                        />
                    </a>
                    <a href="#" target="_blank">
                        <img
                            src="https://cdn-icons-png.flaticon.com/512/49/49411.png"
                            alt="Youtube Icon"
                            className="w-11 invert"
                        />
                    </a>
                </div>
                <div className="text-center flex flex-col gap-1">
                    <p className="text-4xl font-bold tracking-wider">SPORTSBOOK</p>
                    <p className="bg-orange-600 px-3">SOCIAL, MATCHMAKING AND BETTING APP</p>
                </div>
                <ConnectButton />
            </header>
            <main className="flex flex-1 p-8 gap-8 backdrop-brightness-50">
                <aside className="w-1/3 flex flex-col gap-8">
                    <div className="flex justify-center gap-4">
                        <div className="w-11 h-11 p-2 bg-white rounded-full cursor-pointer">
                            <img
                                src="https://uxwing.com/wp-content/themes/uxwing/download/user-interface/search-icon.png"
                                alt="Search Icon"
                            />
                        </div>
                        <input type="text" className="px-4 text-black text-xl bg-white rounded-full" />
                    </div>
                    <button className="bg-lime-600 rounded-full text-2xl py-2">Social</button>
                    <button className="bg-orange-600 rounded-full text-2xl py-2">MATCHMAKING</button>
                    <div className="text-2xl flex gap-8">
                        <span className="block w-14 text-center">&#9658;</span>
                        <span>New Match</span>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="relative">
                            <img
                                src="http://cdn.onlinewebfonts.com/svg/img_500848.png"
                                alt="Question Img"
                                className="w-14 invert"
                            />
                            <div className="w-4 h-4 bg-red-500 rounded-full absolute -right-1 bottom-1"></div>
                        </div>
                        <p className="text-2xl">Accept/Decline</p>
                    </div>
                    <div className="flex items-center gap-4">
                        <img
                            src="https://cdn1.iconfinder.com/data/icons/material-core/21/history-512.png"
                            alt="History Icon"
                            className="invert w-14"
                        />
                        <p className="text-2xl">History</p>
                    </div>
                </aside>
                {children}
            </main>
        </div>
    );
}
