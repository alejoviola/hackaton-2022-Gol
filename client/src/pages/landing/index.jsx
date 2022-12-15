import style from './landing.module.css';
import football from '../../assets/img/football.png';
import basketball from '../../assets/img/basketball.png';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import Link from 'next/Link';
import { useAccount } from 'wagmi';
import Head from 'next/head';

function Landing() {
    const { address } = useAccount();

    return (
        <>
            <Head>
                <title>SPORTSBOOK</title>
            </Head>
            <div className="bg-fondoImg min-h-screen bg-no-repeat bg-cover ">
                <div className={style.container}>
                    <div className={style.title1}>
                        <h1 className={style.title}>SPORTSBOOK</h1>
                        <div className={style.green}></div>
                    </div>
                    {!!address ? (
                        <Link href="/history" className="bg-orange-600 p-3 text-xl rounded-xl">
                            Ir a la app
                        </Link>
                    ) : (
                        <ConnectButton />
                    )}
                </div>
                <div className={style.sub}>
                    <h1>SOCIAL, MATCHMAKING AND BETTING DAPP</h1>
                </div>

                <div className={style.container2}>
                    <div className={style.img1}>
                        <img src={football.src} alt="football" />
                        <div className={style.center}>
                            <h1>Chat , Share, Collect NFTs</h1>
                            <h2>
                                Find players and teams for the sport you like, share your stats, and showcase your past matches as
                                NFT s!
                            </h2>
                        </div>
                    </div>
                    <div className={style.img1}>
                        <img src={basketball.src} alt="football" />
                        <div className={style.center}>
                            <h1>Challenge another team</h1>
                            <h2>
                                Find and challenge other teams on your area, pay and reserve for location , and bet on the outcome
                                of the match
                            </h2>
                        </div>
                    </div>
                </div>
                <footer className={style.footer}>
                    <img
                        src="https://wows-wowsp-global.gcdn.co/media/ceph-image/30efdfbc-7037-11ea-9a7e-38eaa735f4cc.png"
                        className={style.redes}
                    />
                    <img
                        src="https://www.fgc.cat/wp-content/uploads/2017/07/preview-full-youtube-logo-300x242.png"
                        className={style.redes}
                    />
                    <img src="https://pngimg.com/uploads/twitter/twitter_PNG15.png" className={style.redes} />
                </footer>
            </div>
        </>
    );
}

export default Landing;
