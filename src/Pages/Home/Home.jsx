import React from "react";
import Jumbo from "../../components/Jumbo/Jumbo";
import GlassCard from "../../components/GlassCard/GlassCard";

/* STYLES */
import "./Styles/Home.css";
import { Container, Divider, Grid } from "@mui/material";

const Home = () => {

    return (
        <Container>
            <h1 className="home-title">Home</h1>
            <p className="home-desc">Learn more about us.</p>
            <Divider />

            <div className="grid-container">
                <Grid container spacing={3}>
                    <Grid sm={6} xs={12} item>
                        <GlassCard />
                    </Grid>
                    <Grid sm={6} xs={12} item>
                        <GlassCard />
                    </Grid>

                    <Grid item sm={4} md={3} lg={4} xl={4} xs={12}>
                        <GlassCard card_title="Blog nr1" desc="nothing special" button="read more" />
                    </Grid>
                    <Grid item sm={4} md={3} lg={4} xl={4} xs={12}>
                        <GlassCard card_title="Blog nr2" desc="special things" button="read More" />
                    </Grid>
                    <Grid item sm={4} md={3} lg={4} xl={4} xs={12}>
                        <GlassCard />
                    </Grid>

                    <Grid item sm={6} md={3} lg={3} xl={4} xs={12}>
                        <GlassCard card_title="Blog nr1" desc="nothing special" button="read more" />
                    </Grid>
                    <Grid item sm={6} md={3} lg={3} xl={4} xs={12}>
                        <GlassCard card_title="Blog nr2" desc="special things" button="read More" />
                    </Grid>
                    <Grid item sm={6} md={3} lg={3} xl={4} xs={12}>
                        <GlassCard />
                    </Grid>
                    <Grid item sm={6} md={3} lg={3} xl={4} xs={12}>
                        <GlassCard />
                    </Grid>
                </Grid>
            </div>
            
        </Container>
    );
}

export default Home;