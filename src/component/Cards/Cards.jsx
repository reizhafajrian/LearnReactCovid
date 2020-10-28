import React from 'react';
import {Card,CardContent,Typography,Grid} from '@material-ui/core';
import CountUp from'react-countup';
import styles from './Cards.module.css';
import cx from 'classnames'; 
 const Cards=({data:{perawatan,sembuh,meninggal,jumlahKasus,lastUpdate}})=>{
    return(
        <div className={styles.container}>
            <Grid container spacing={3} justify="center" className={styles.gridcontainer}>
                 <Grid item component={Card} xs={12} md={3} className={cx(styles.card,styles.infected)}>
                     <CardContent>
                         <Typography color="textSecondary" gutterBottom>
                            Jumlah Kasus
                         </Typography>
                         <Typography variant="h5">
                           <CountUp 
                           start={0}
                           end={Number(jumlahKasus)}
                           separator={"."}
                           duration={2.5}  />
                         </Typography>
                         <Typography color="textSecondary">
                            {
                               new Date(lastUpdate).toDateString()
                            }
                         </Typography>
                         <Typography variant="body2">
                            Number of active cases of Covid-19  
                         </Typography>
                     </CardContent>
                 </Grid>
                 <Grid item component={Card} xs={12} md={3} className={cx(styles.card,styles.recovered)}>
                     <CardContent>
                         <Typography color="textSecondary" gutterBottom>
                            Sembuh
                         </Typography>
                         <Typography variant="h5">
                         <CountUp 
                           start={0}
                           end={Number(sembuh)}
                           separator={"."}
                           duration={2.5}  />
                         </Typography>
                         <Typography color="textSecondary">
                         {
                                  new Date(lastUpdate).toDateString()
                            }
                         </Typography>
                         <Typography variant="body2">
                            Number of recoveries from Covid-19  
                         </Typography>
                     </CardContent>
                 </Grid>
                 <Grid item component={Card} xs={12} md={3} className={cx(styles.card,styles.deaths)}>
                     <CardContent>
                         <Typography color="textSecondary" gutterBottom>
                            Meninggal Dunia  
                         </Typography>
                         <Typography variant="h5">
                         <CountUp 
                           start={0}
                           end={Number(meninggal)}
                           separator={"."}
                           duration={2.5}  />
                         </Typography>
                         <Typography color="textSecondary">
                         {
                                   new Date(lastUpdate).toDateString()
                            }
                         </Typography>
                         <Typography variant="body2">
                            Number of recoveries from Covid-19  
                         </Typography>
                     </CardContent>
                 </Grid>
                 <Grid item component={Card} xs={12} md={3} className={cx(styles.card,styles.perawatan)}>
                     <CardContent>
                         <Typography color="textSecondary" gutterBottom>
                            Dalam Perawatan
                         </Typography>
                         <Typography variant="h5">
                         <CountUp 
                           start={0}
                           end={Number(perawatan)}
                           separator={"."}
                           duration={2.5}  />
                         </Typography>
                         <Typography color="textSecondary">
                         {
                                  new Date(lastUpdate).toDateString()
                            }
                         </Typography>
                         <Typography variant="body2">
                            Number of recoveries from Covid-19  
                         </Typography>
                     </CardContent>
                 </Grid>
              
            </Grid>
        </div>

    )
}
export default Cards;