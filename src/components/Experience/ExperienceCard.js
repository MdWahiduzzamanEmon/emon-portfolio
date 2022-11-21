import { makeStyles } from '@material-ui/core/styles';
import React, { useContext } from 'react';
import Fade from 'react-reveal/Fade';

import { ThemeContext } from '../../contexts/ThemeContext';

import expImgBlack from '../../assets/svg/experience/expImgBlack.svg';
import expImgWhite from '../../assets/svg/experience/expImgWhite.svg';

import './Experience.css';

function ExperienceCard({ id, company, jobtitle, startYear, endYear, type }) {

    const { theme } = useContext(ThemeContext);

    const useStyles = makeStyles((t) => ({
        experienceCard: {
            backgroundColor: theme.quaternary,
            // "&:hover": {
            //     backgroundColor:theme.primary50,
            // },
        },
    }));

    const classes = useStyles();


    return (
        <Fade bottom>
            <div key={id} className={`experience-card ${classes.experienceCard}`}>
                <div className="expcard-img" style={{ backgroundColor: theme.primary }}>
                    <img src={theme.type === 'light' ? expImgBlack : expImgWhite} alt="" />
                </div>
                <div className="experience-details">
                    <small style={{ color: theme.primary, fontWeight: "bold" }}>{startYear}-{endYear}</small>
                    <h6 style={{ color: theme.tertiary }}>{jobtitle}</h6>
                    <h5 style={{ color: theme.tertiary }}>{company}</h5>
                    <h6 style={{ color: theme.tertiary }}>{type}</h6>
                </div>
            </div>
        </Fade>
    )
}

export default ExperienceCard
