import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container';



export function AnimalHealthService() {
    return (
        <Card>
        <CardMedia
            component="img"
            alt="green iguana"
            height="140"
            image="/animal_health.webp"
        />
        <CardContent>
            <Typography gutterBottom variant="h5" component="div">
            Health Service
            </Typography>
            <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
            </Typography>
        </CardContent>
        <CardActions>
            <Button size="small">Request Service</Button>
            {/* <Button size="small">Learn More</Button> */}
        </CardActions>
        </Card>
    );
}

export function NutritionService() {
    return (
        <Card>
        <CardMedia
            component="img"
            alt="green iguana"
            height="140"
            image="/animal_nutrition.jpg"
        />
        <CardContent>
            <Typography gutterBottom variant="h5" component="div">
            Nutrition Service
            </Typography>
            <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
            </Typography>
        </CardContent>
        <CardActions>
            <Button size="small">Request Service</Button>
            {/* <Button size="small">Learn More</Button> */}
        </CardActions>
        </Card>
    );
}

export function ArtificialInserminationService() {
    return (
        <Card >
        <CardMedia
            component="img"
            alt="green iguana"
            height="140"
            image="/ai.jpg"
        />
        <CardContent>
            <Typography gutterBottom variant="h5" component="div">
            Artificial Insermination
            </Typography>
            <Typography variant="body2" color="text.secondary">
                We are well equipped and offer both local and imported genetics to our customers.
            </Typography>
        </CardContent>
        <CardActions>
            <Button size="small">Request Service</Button>
            {/* <Button size="small">Learn More</Button> */}
        </CardActions>
        </Card>
    );
    }

export function ConsultanceService() {
    return (
        <Card >
        <CardMedia
            component="img"
            alt="green iguana"
            height="140"
            image="/consulting.avif"
        />
        <CardContent>
            <Typography gutterBottom variant="h5" component="div">
            Consultancy Service
            </Typography>
            <Typography variant="body2" color="text.secondary">
            We providing our clients with everything they need to know from animal health to animal farming.
            </Typography>
            <br/>
        </CardContent>
        <CardActions>
            <Button size="small">Request Service</Button>
            {/* <Button size="small">Learn More</Button> */}
        </CardActions>
        </Card>
    );
}

export default function Services() {
    return (
        <Container>
            <Grid container spacing={{ xs: 2, md: 3 , lg:4}}>

                <Grid item xs={12} md={12} lg={3}>
                    <ArtificialInserminationService/>
                </Grid>
                <Grid item xs={12} md={12} lg={3}>
                    <ConsultanceService/>
                </Grid>
                <Grid item xs={12} md={12} lg={3}>
                    <AnimalHealthService/>
                </Grid>
                <Grid item xs={12} md={12} lg={3}>
                    <NutritionService/>
                </Grid>

            </Grid>
        </Container>
    );
}
