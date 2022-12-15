import '@rainbow-me/rainbowkit/styles.css';

import { darkTheme, getDefaultWallets, RainbowKitProvider } from '@rainbow-me/rainbowkit';
import { configureChains, createClient, WagmiConfig } from 'wagmi';
import { mainnet, polygon, optimism, arbitrum } from 'wagmi/chains';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';

import '../styles/globals.css';

const { chains, provider } = configureChains([mainnet, polygon, optimism, arbitrum], [publicProvider()]);

const { connectors } = getDefaultWallets({
    appName: 'My RainbowKit App',
    chains,
});

const wagmiClient = createClient({
    autoConnect: true,
    connectors,
    provider,
});

export default function App({ Component, pageProps }) {
    return (
        <WagmiConfig client={wagmiClient}>
            <RainbowKitProvider
                theme={darkTheme({
                    accentColor: '#ea580c',
                })}
                chains={chains}
            >
                <Component {...pageProps} />
            </RainbowKitProvider>
        </WagmiConfig>
    );
}
