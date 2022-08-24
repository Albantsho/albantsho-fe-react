import { Box, Button } from '@mui/material'
import Logo from '@shared/Logo/Logo'
import Link from 'next/link'
import React from 'react'

const NavbarAuthenticationSignup = () => {
  return (
    <Box className="hidden lg:flex justify-between">
    <Logo color="primary" />
    <div className="space-x-4">
      <span>Don’t have an account yet?</span>
      <Link href="/signup" passHref>
        <Button variant="outlined" size="large">
          SIGN UP
        </Button>
      </Link>
    </div>
  </Box>
  )
}

export default NavbarAuthenticationSignup