import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
    {
        title: 'Mimir',
        img: require('@site/static/img/mimirDarkLogo.png').default,
        url: '/documents/docs/Mimir/intro',
        description: (
            <>
                Mimir can use the types from tyle to draw and explore IMF-models. This currently does not have a
                production environment.
            </>
        ),
    },
    {
        title: 'Tyle',
        img: "./img/tyleLogo.svg",
        url: '/documents/docs/Tyle/intro',
        description: (
            <>
                Tyle is the type creating system of Mimir-org. Create types to use with Mimir.
            </>
        ),
    },
    {
        title: 'Component Library',
        img: require('@site/static/img/community.png').default,
        url: 'https://mimir-org.github.io/component-library/?path=/docs/welcome--docs',
        description: (
            <>
                This is the component library of both Mimir and Tyle, you can view the current components <a
                href={"https://mimir-org.github.io/component-library/"}> here</a>.
            </>
        ),
    },
];

function Feature({img, title, description, url}) {
    return (
        <div className={clsx('col col--4')}>
            <div className="text--center">
                <a href={url}>
                    <img className={styles.featureImage} src={img} alt={"logo"}/>
                </a>
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
