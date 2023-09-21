import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
    {
        title: 'Mimir',
        img: require('@site/static/img/mimirDarkLogo.png').default,
        description: (
            <>
                Mimir description here...
            </>
        ),
    },
    {
        title: 'Tyle',
        img: "./img/tyleLogo.svg",
        description: (
            <>
                Tyle description here...
            </>
        ),
    },
    {
        title: 'Component Library',
        img: require('@site/static/img/mimirDarkLogo.png').default,
        description: (
            <>
                Component Lbrary Description...
            </>
        ),
    },
];

function Feature({img, title, description}) {
    return (
        <div className={clsx('col col--4')}>
            <div className="text--center">
                <img className={styles.featureImage} src={img} alt={"logo"}/>
            </div>
            <div className="text--center padding-horiz--md">
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </div>
    );
}

export default function HomepageFeatures() {
    return (
        <section className={styles.features}>
            <div className="container">
                <div className="row">
                    {FeatureList.map((props, idx) => (
                        <Feature key={idx} {...props} />
                    ))}
                </div>
            </div>
        </section>
    );
}
