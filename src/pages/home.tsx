import { useList } from '@pankod/refine-core';

import {
  Typography,Box,Stack
} from '@pankod/refine-mui';

import {
  PieChart,
  PropertyReferrals,
  TotalRevenue,
  PropertyCard,
  TopAgent
} from 'components';

const Home = () => {
  return (
    <Box>
      <Typography fontSize={25} fontWeight={700} color='#11142d' >
        Dashboard
      </Typography>
      <Box mt='20px' display='flex' flexWrap='wrap' gap={4}>
        <PieChart
          title="Properties for Sale"
          value={684}
          series={[75, 25]}
          colors={['#475be8','#e4e8ef']}
        />
        <PieChart
          title="Properties for Rent"
          value={550}
          series={[60, 40]}
          colors={['#472de8','#e4f9ef']}
        />
        <PieChart
          title="Total customers"
          value={15000}
          series={[70, 30]}
          colors={['#476ce8','#e4d4ef']}
        />
        <PieChart
          title="Total Cities"
          value={350}
          series={[75, 25]}
          colors={['#475be8','#e4e8ef']}
        />
      </Box>
      <Stack mt='25px' width='100%' direction={{ xs:'column', lg:'row'}}>
        <TotalRevenue />
        <PropertyReferrals />
      </Stack>
    </Box>
  )
}

export default Home;