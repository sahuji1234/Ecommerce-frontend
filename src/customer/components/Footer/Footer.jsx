import { Button, Grid, Link, Typography } from '@mui/material'
import React from 'react'

const Footer = () => {
    return (
        <div>
            <Grid className='bg-black text-white text-center mt-10' container sx={{ bgcolor: "black", color: "white", py: 3 }}>
                <Grid item xs={12} sm={6} md={3}>
                    <Typography className='pb-5' variant='h6'>Company</Typography>
                    <div>
                        <Button className='pb-5' variant='h6' gutterBottom>About</Button>
                    </div>
                    <div>
                        <Button className='pb-5' variant='h6' gutterBottom>Blogs</Button>
                    </div>
                    <div>
                        <Button className='pb-5' variant='h6' gutterBottom>Press</Button>
                    </div>
                    <div>
                        <Button className='pb-5' variant='h6' gutterBottom>jobs</Button>
                    </div>
                    <div>
                        <Button className='pb-5' variant='h6' gutterBottom>partners</Button>
                    </div>          
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Typography className='pb-5' variant='h6'>Solutons</Typography>
                    <div>
                        <Button className='pb-5' variant='h6' gutterBottom>About</Button>
                    </div>
                    <div>
                        <Button className='pb-5' variant='h6' gutterBottom>Blogs</Button>
                    </div>
                    <div>
                        <Button className='pb-5' variant='h6' gutterBottom>Press</Button>
                    </div>
                    <div>
                        <Button className='pb-5' variant='h6' gutterBottom>jobs</Button>
                    </div>
                    <div>
                        <Button className='pb-5' variant='h6' gutterBottom>partners</Button>
                    </div>          
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Typography className='pb-5' variant='h6'>Marketing</Typography>
                    <div>
                        <Button className='pb-5' variant='h6' gutterBottom>About</Button>
                    </div>
                    <div>
                        <Button className='pb-5' variant='h6' gutterBottom>Blogs</Button>
                    </div>
                    <div>
                        <Button className='pb-5' variant='h6' gutterBottom>Press</Button>
                    </div>
                    <div>
                        <Button className='pb-5' variant='h6' gutterBottom>jobs</Button>
                    </div>
                    <div>
                        <Button className='pb-5' variant='h6' gutterBottom>partners</Button>
                    </div>          
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Typography className='pb-5' variant='h6'>Commerce</Typography>
                    <div>
                        <Button className='pb-5' variant='h6' gutterBottom>About</Button>
                    </div>
                    <div>
                        <Button className='pb-5' variant='h6' gutterBottom>Blogs</Button>
                    </div>
                    <div>
                        <Button className='pb-5' variant='h6' gutterBottom>Press</Button>
                    </div>
                    <div>
                        <Button className='pb-5' variant='h6' gutterBottom>jobs</Button>
                    </div>
                    <div>
                        <Button className='pb-5' variant='h6' gutterBottom>partners</Button>
                    </div>          
                </Grid>


                <Grid className='pt-20' item xs={12}>
                    <Typography variant='body2' component="p" align='center'>
                        &copy; 2025 My Company. All rghts reserved.
                    </Typography>
                    <Typography variant='body2' component="p" align='center'>
                        Made withlove by me
                    </Typography>
                    <Typography variant='body2' component="p" align='center'>
                       Icons made by{' '}
                       <Link href="https://www.freepik.com" color='inherit' underline='always'>Freepik
                       </Link>{' '}
                       from{' '}
                       <Link href="https://www.freepik.com" color='inherit' underline='always'>www.flaticon.com
                       </Link>
                    </Typography>

                </Grid>
            </Grid>
        </div>
    )
}

export default Footer
