import React from 'react'
import Logo from '../styles/ipfs-logo.png'

export default function Header ({
  started
}) {
  return (
    <header className='flex items-center pa2 bg-dark-blue'>
      <a href='https://ipfs.io/' title='home' className='w-50' target='_blank'>
        <img className={started ? 'libp2p-on' : 'libp2p-off' } src={Logo} style={{ height: 50 }} />
      </a>
      <h1 className='w-50 ma0 tr f3 fw2 nexa white'><span className='fw7'>p2p</span> chat</h1>
    </header>
  )
}
