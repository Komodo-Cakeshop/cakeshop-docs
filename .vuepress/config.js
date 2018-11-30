module.exports = {
  host: '176.9.138.124',
  title: 'Cakeshop Docs',
  description: 'Just playing around',
  themeConfig: {
    nav: [
      { text: 'Introduction', link: '/' },
      { text: 'Guide', link: '/guide/' },
      { text: 'KomodoPlatform.com', link: 'https://komodoplatform.com' },
    ],
    sidebar: [
      {
        title: 'dApp Toolkit',
        collapsable: true,
        children: [
          [ '/dapp-toolkit/introduction.html', 'dApp Introduction'],
	  [ '/dapp-toolkit/blockchain.html', 'Blockchain' ],
	  [ '/dapp-toolkit/wallet.html', 'Wallet']
        ]
      },
      {
        title: 'Smart Contract Crypto Conditions',
	collapsable: true,
        children: [ 
          [ '/dapp-toolkit/smart-contract/introduction.html', 'CC Smart Contract Introduction'],
          [ '/dapp-toolkit/smart-contract/faucet.html', 'Faucet' ],
          [ '/dapp-toolkit/smart-contract/dice.html', 'Dice'],
          [ '/dapp-toolkit/smart-contract/oracle.html', 'Oracle'],
          [ '/dapp-toolkit/smart-contract/oracle-location.html', 'Location Oracle'],
          [ '/dapp-toolkit/smart-contract/oracle-price-feed.html', 'Price Feed Oracle'],
          [ '/dapp-toolkit/smart-contract/oracle-custom-dapp.html', 'Custom dApp Oracle']
	]
      },
      {
	title: 'Blockchain Starter Kit',
	collapsable: true,
	children: [
	  [ '/blockchain-starter-kit/introduction.html', 'Blockchain Starter Kit Introduction' ],
	  [ '/blockchain-starter-kit/checklist-new-coins.rst.txt.html', 'Existing New Coins Checklist' ],
	  [ '/blockchain-starter-kit/checklist-new-coins.html', 'Converted New Coins Checklist' ],
	  [ '/blockchain-starter-kit/setup-electrumX-server.rst.txt.html', 'Existing ElectrumX Setup' ],
	  [ '/blockchain-starter-kit/ac-parameters.html', 'Blockchain Parameters' ],
	  [ '/blockchain-starter-kit/configuration.html', 'Blockchain Configuration' ],
	  [ '/blockchain-starter-kit/deployment.html', 'Blockchain Deployment' ],
	  [ '/blockchain-starter-kit/explorers.html', 'Blockchain Explorers' ],
	  [ '/blockchain-starter-kit/electrum-servers.html', 'Electrum Servers' ],
	  [ '/blockchain-starter-kit/wallet-customization.html', 'Agama Wallet Integration' ],
	  [ '/blockchain-starter-kit/dpow-security.html', 'dPoW Blockchain Security' ],
	  [ '/blockchain-starter-kit/dex-integration.html', 'DEX integration' ]
	]
      },
      {
	title: 'Custom Consensus Crypto Conditions',
	collapsable: true,
	children: [
	  [ '/custom-consensus/introduction.html', 'CC Consensus Introduction'],
	  [ '/custom-consensus/hello-world.html', 'Crypto Condition Hello World'],
	  [ '/custom-consensus/cloud9.html', 'Crypto Condition Cloud 9 IDE']
	]
      },
      {
        title: 'Existing BarterDEX',
        collapsable: true,
        children: [
         ['/existing/barterdex/home-barterDEX.rst.txt.html', 'BarterDEX Introduction'],
         ['/existing/barterdex/get-listed-barterDEX.rst.txt.html', 'Get Listed on BarterDEX'],
         ['/existing/barterdex/setup-electrumX-server.rst.txt.html', 'Setup ElectrumX Server']
        ]
      },{
        title: 'Existing Building Software',
        collapsable: true,
        children: [
         ['/existing/building-software/compile-marketmaker-binary-with-static-nanomsg-in-Linux.rst.txt.html', 'Compile Marketmaker Linux'],
         ['/existing/building-software/compile-marketmaker-binary-with-static-nanomsg-in-MacOS.rst.txt.html', 'Compile Marketmaker OSX'],
         ['/existing/building-software/debug-Komodo.rst.txt.html', 'Debug Komodo'],
         ['/existing/building-software/install-barterDEX-CLI.rst.txt.html', 'Install BarterDEX CLI'],
         ['/existing/building-software/install-Komodo-manually.rst.txt.html', 'Compile Komodo']
        ]
      },{
        title: 'Existing Best Practices',
        collapsable: true,
        children: [
         ['/existing/best-practices/note-exchanges.rst.txt.html', 'Crypto Exchange Note'],
         ['/existing/best-practices/security-setup-Komodo-Node.rst.txt.html', 'Securely Setup Komodo Node'],
         ['/existing/best-practices/setup-FR-full-relay-node-barterDEX.rst.txt.html', 'Setup Full Relay (FR) Node']
        ]
      },{
        title: 'Existing CLI Operations',
        collapsable: true,
        children: [
         ['/existing/cli-operations/activate-cc-independent-chain.rst.txt.html', 'Activatation Height Crypto Conditions'],
         ['/existing/cli-operations/assetchains-guide-Komodo-Notary-Node.rst.txt.html', 'Assetchains For Notary Nodes'],
         ['/existing/cli-operations/test-komodo-source-jl777-branch.rst.txt.html', 'Test Forking'],
         ['/existing/cli-operations/test-use-write-integrate-cc.rst.txt.html', 'Create Crypto Conditions'],
         ['/existing/cli-operations/useful-KMD-BTC-commands.rst.txt.html', 'KMD/BTC Commands'],
         ['/existing/cli-operations/using-Key-Value.rst.txt.html', 'Using KV Store']
        ]
      },{
        title: 'Existing Crypto Conditions',
        collapsable: true,
        children: [
         ['/existing/cryptoconditions/introduction.rst.txt.html', 'CC Intro'],
         ['/existing/cryptoconditions/test-use-write-integrate-cc.rst.txt.html', 'Overview'],
         ['/existing/cryptoconditions/tutorial.rst.txt.html', 'Tutorial']
        ]
      },{
        title: 'Existing Dev-HOWTO',
        collapsable: true,
        children: [
         ['/existing/dev-howtos/activate-cc-independent-chain.rst.txt.html', 'Update name1'],
         ['/existing/dev-howtos/add-Komodo-Assetchains-Agama-Desktop.rst.txt.html', 'Update name2'],
         ['/existing/dev-howtos/assetchain-params.rst.txt.html', 'Update name3'],
         ['/existing/dev-howtos/create-Komodo-Assetchain.rst.txt.html', 'Update name4'],
         ['/existing/dev-howtos/debug-Komodo.rst.txt.html', 'Update name5'],
         ['/existing/dev-howtos/example-asset-chains.rst.txt.html', 'Update name6'],
         ['/existing/dev-howtos/generate-privkeys-third-party-coins-from-passphrase.rst.txt.html', 'Update name7'],
         ['/existing/dev-howtos/test-use-write-integrate-cc.rst.txt.html', 'Update name8'],
         ['/existing/dev-howtos/using-Key-Value.rst.txt.html', 'Update name9']
        ]
      },{
        title: 'Existing Glossary',
        collapsable: true,
        children: [
         ['/existing/glossary/assetchain-params.rst.txt.html', 'Assetchain Params'],
         ['/existing/glossary/activate-cc-independent-chain.rst.txt.html', 'Activation Height CC'],
         ['/existing/glossary/Smartaddress-FAQ.rst.txt.html', 'Smart Address FAQ'],
         ['/existing/glossary/faq.rst.txt.html', 'FAQ']
        ]
      },{
        title: 'Existing Guides',
        collapsable: true,
        children: [
         ['/existing/guides/beginner-vps-linux-assetchain.rst.txt.html', 'VPS Getting Started'],
         ['/existing/guides/create-Komodo-Assetchain.rst.txt.html', 'Create Blockchain'],
         ['/existing/guides/dPOW-conf.rst.txt.html', 'dPoW Confirmations'],
         ['/existing/guides/setup-Komodo-Notary-Node.rst.txt.html', 'Setup Notary Node'],
         ['/existing/guides/Smartaddress-FAQ.rst.txt.html', 'Smartaddress FAQ'],
         ['/existing/guides/using-JUMBLR.rst.txt.html', 'Using JUMBLR'],
        ]
      },{
        title: 'Existing Index',
        collapsable: true,
        children: [
         ['/existing/index/list-all-KomodoPlatform-Project-links.rst.txt.html', 'Project Resources & Repositories'],
         ['/existing/index/info.rst.txt.html', 'Coin Index']
        ]
      },
    ]
  },
  plugins: [ 'vue-material' ]
}

