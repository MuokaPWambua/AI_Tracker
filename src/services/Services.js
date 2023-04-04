import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container';



export function AnimalHealthService({handleClickOpen}) {
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
            We provide medical care and treatment to animals. This include routine checkups, vaccinations, 
            diagnostic testing, surgical procedures, and treatment of illnesses or injuries. We also help manage chronic conditions.
            </Typography>
        </CardContent>
        <CardActions>
            <Button size="small" onClick={handleClickOpen}>Request Service</Button>
            {/* <Button size="small">Learn More</Button> */}
        </CardActions>
        </Card>
    );
}

export function NutritionService({handleClickOpen}) {
    return (
        <Card >
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
            With expertise in animal nutrition we provide guidance on proper feeding and dietary requirements
            for animals, from type of food and portion sizes that are appropriate for different
            stages of an animal's life and for specific medical conditions. 
            </Typography>
        </CardContent>
        <CardActions>
            <Button size="small" onClick={handleClickOpen}>Request Service</Button>
            {/* <Button size="small">Learn More</Button> */}
        </CardActions>
        </Card>
    );
}

export function ArtificialInserminationService({handleClickOpen}) {
    return (
        <Card>
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
                We are well equipped and offer both local and imported genetics to our customers. If you are a cattle farmer,
                make a date with our best bull today for the best heifer calfs.
            </Typography>
        
        </CardContent>
        <CardActions>
            <Button size="small" onClick={handleClickOpen}>Request Service</Button>
            {/* <Button size="small">Learn More</Button> */}
        </CardActions>
        </Card>
    );
    }

export function ConsultanceService({handleClickOpen}) {
    return (
        <Card>
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
            We providing our clients with everything they need to know from animal behavior, animal welfare, animal management,
            feeding, breeding, and disease prevention strategies to ensure the health and productivity of the animals.
            </Typography>
        </CardContent>
        <CardActions>
            <Button size="small" onClick={handleClickOpen}>Request Service</Button>
            {/* <Button size="small">Learn More</Button> */}
        </CardActions>
        </Card>
    );
}

export default function Services({handleClickOpen}) {
    
    return (
        <Container>
            <Grid container spacing={{ xs: 2, md: 3 , lg:4}}>

                <Grid item xs={12} md={6} lg={3}>
                    <ArtificialInserminationService handleClickOpen={handleClickOpen}/>
                </Grid>
                <Grid item xs={12} md={6} lg={3}>
                    <ConsultanceService handleClickOpen={handleClickOpen}/>
                </Grid>
                <Grid item xs={12} md={6} lg={3}>
                    <AnimalHealthService handleClickOpen={handleClickOpen}/>
                </Grid>
                <Grid item xs={12} md={6} lg={3}>
                    <NutritionService handleClickOpen={handleClickOpen}/>
                </Grid>

            </Grid>
        </Container>
    );
}
