import React, { useState, useEffect, Fragment } from 'react';
import axiosClient from '../config/axiosClient';
import { Card, CardMedia, CardContent, Typography, Grid } from '@material-ui/core';
import { withStyles } from '@material-ui/core';

const Pokemons = () => {
    const [pokemons, setPokemons] = useState([]);

    const getPokemons = async () => {
        const response = await axiosClient.get('pokemon/');
        console.log(response.data.results);
        //const pokedata = response.data.results;
        //setPokelists = response.data.results;
        setPokemons(response.data.results);

    };

    useEffect(() => {
        getPokemons();
    }, []);

    /*
    const renderPokemons = () => {

        return (

            <Fragment>
                <Grid container spacing={24} justify="center">
                    <Card className={classes.item}>
                        <CardMedia />
                        <CardContent>
                            {pokemons.map((pokemon, index) => {
                                <Typography component="p" variant="h6"> {pokemon.name}</Typography>
                            })}
                        </CardContent>
                    </Card>
                </Grid>
            </Fragment>

            /* <Fragment>
            {
                pokemons.map((pokemon, index) => (
                    <li key={index}>{pokemon.name}
                        <a href={pokemon.url}> {pokemon.name}</a>
                    </li>
                ))
            }
        </Fragment>






        );
    }; */

    return (
        <tbody>
            <h1>Lista de Pokemones </h1>

            <Fragment>

                <Grid container spacing={24} justify="center">
                    {pokemons.map((pokemon, index) => {
                        let url = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";
                        let pokeIndex = pokemon.url.split('/')[pokemon.url.split('/').length - 2];
                        return (

                            < Card style={{ minWidth: "350px", margin: "1em", boxSizing: "border-box" }}>
                                <CardMedia style={{ height: "200px" }} image={`${url}${pokeIndex}.png?raw=true`} />
                                <CardContent>

                                    <Typography component="p" variant="h6"> {pokemon.name}</Typography>

                                </CardContent>
                            </Card>
                        )
                    })}
                </Grid>

            </Fragment>
            {/* 
            <ul>
                {renderPokemons()}
            </ul>
 */}
        </tbody >
    );

};

export default withStyles({
    item: {
        minWidth: "350px",
        margin: "1em",
        boxSizing: "border-box"
    },

    media: {
        minWidth: "200px"
    },
})(Pokemons)
