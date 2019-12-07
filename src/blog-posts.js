export const getPosts = () => {
    return [{
            title: "Pika Sendromu",
            slug: "pika_sendromu",
            details: require("./posts/pika_sendromu.md").default,
            date: "8 Aralık 2019"
        },
        {
            title: "Alturizm",
            slug: "alturizm",
            details: require("./posts/alturizm.md").default,
            date: "8 Aralık 2019"
        },
        {
            title: "Kabus Bozukluğu",
            slug: "kabus_bozuklugu",
            details: require("./posts/kabus_bozuklugu.md").default,
            date: "8 Aralık 2019"
        },
        {
            title: "Apotemnofili",
            slug: "apotemnofili",
            details: require("./posts/apotemnofili.md").default,
            date: "8 Aralık 2019"
        }
    ];
};