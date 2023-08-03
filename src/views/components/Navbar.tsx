//@ts-nocheck
import React, { useState } from 'react'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import IconButton from '@mui/material/IconButton'
import useMediaQuery from '@mui/material/useMediaQuery'

import { useTheme } from '@mui/material/styles'
// import { Menu, Close } from '@mui/icons-material'

import { Button } from '@mui/material'

export default function Navbar() {
  const [visibleMenu, setVisibleMenu] = useState<boolean>(false)
  const { breakpoints } = useTheme()
  const matchMobileView = useMediaQuery(breakpoints.down('md'))
  return (
    <Box sx={{ backgroundColor: 'background.paper' }}>
      <Container sx={{ py: { xs: 2, md: 1 } }}>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Box sx={{ ml: 'auto', display: { xs: 'inline-flex', md: 'none' } }}>
            <IconButton onClick={() => setVisibleMenu(!visibleMenu)}>a</IconButton>
          </Box>

          <Box
            sx={{
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexDirection: { xs: 'column', md: 'row' },
              transition: theme => theme.transitions.create(['top']),
              ...(matchMobileView && {
                py: 6,
                backgroundColor: 'background.paper',
                zIndex: 'appBar',
                position: 'fixed',
                height: { xs: '100vh', md: 'auto' },
                top: visibleMenu ? 0 : '-120vh',
                left: 0
              })
            }}
          >
            {/* <Box /> */}
            <img className='logo-img' src='/images/logo/logo1234.png' alt='logo' />
            {/* Magic space */}
            <div className='main-menu'>
              <ul className='sub-menu'>
                <li className='menu-item'>Home</li>
                <li className='menu-item'>About Us</li>
                <li className='menu-item'>Contact Us</li>
                <li className='menu-item'>Blog</li>
              </ul>
            </div>
            <Button className='login-btn'>Login</Button>
            {visibleMenu && matchMobileView && (
              <IconButton
                sx={{
                  position: 'fixed',
                  top: 10,
                  right: 10
                }}
                onClick={() => setVisibleMenu(!visibleMenu)}
              >
                X
              </IconButton>
            )}
          </Box>
        </Box>
      </Container>
    </Box>
  )
}
