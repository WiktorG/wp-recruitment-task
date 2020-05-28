const screens = {
    mobileS: '320px',
    mobileM: '375px',
    mobileL: '425px',
    mobileXL: '540px',
    tablet: '768px',
    laptop: '1024px',
    laptopL: '1440px',
    desktop: '2560px',
};

export default {
    mobileS: `(min-width: ${screens.mobileS})`,
    mobileM: `(min-width: ${screens.mobileM})`,
    mobileL: `(min-width: ${screens.mobileL})`,
    mobileXL: `(min-width: ${screens.mobileXL})`,
    tablet: `(min-width: ${screens.tablet})`,
    laptop: `(min-width: ${screens.laptop})`,
    laptopL: `(min-width: ${screens.laptopL})`,
    desktop: `(min-width: ${screens.desktop})`,
    desktopL: `(min-width: ${screens.desktop})`,
};
