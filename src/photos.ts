const breakpoints = [1080, 640, 384, 256, 128, 96, 64, 48];

const unsplashLink = (id: string, width: number, height: number) =>
    `https://source.unsplash.com/${id}/${width}x${height}`;

const hpxLink = (id: string, width: number, height: number) =>
    `https://holdenpx.com/photos/owls/original/${id}`

const hpxPhotos = [
    {id: "3NJeUzE9.jpg", width: 2048, height: 1200},
    {id: "3NJeUzE9.jpg", width: 2048, height:  1200},
    {id: "3NJeUzE9.jpg", width: 2048, height: 2000},
    {id: "3NJeUzE9.jpg", width: 2048, height: 1800},
    {id: "3NJeUzE9.jpg", width: 2048, height: 1365},
    {id: "3NJeUzE9.jpg", width: 2048, height: 5444},
    {id: "3NJeUzE9.jpg", width: 2048, height: 1365},
    {id: "3NJeUzE9.jpg", width: 2048, height: 715},
    {id: "3NJeUzE9.jpg", width: 2048, height: 1365},
    {id: "3NJeUzE9.jpg", width: 2048, height: 995},
    {id: "3NJeUzE9.jpg", width: 2048, height: 1365},
    {id: "3NJeUzE9.jpg", width: 2048, height: 1365},
]    


const unsplashPhotos = [
    { id: "Osq7UAVxIOI", width: 1080, height: 780 },
    { id: "Dhmn6ete6g8", width: 1080, height: 1620 },
    { id: "RkBTPqPEGDo", width: 1080, height: 720 },
    { id: "Yizrl9N_eDA", width: 1080, height: 721 },
    { id: "KG3TyFi0iTU", width: 1080, height: 1620 },
    { id: "Jztmx9yqjBw", width: 1080, height: 607 },
    { id: "-heLWtuAN3c", width: 1080, height: 608 },
    { id: "xOigCUcFdA8", width: 1080, height: 720 },
    { id: "1azAjl8FTnU", width: 1080, height: 1549 },
    { id: "ALrCdq-ui_Q", width: 1080, height: 720 },
    { id: "twukN12EN7c", width: 1080, height: 694 },
    { id: "9UjEyzA6pP4", width: 1080, height: 1620 },
    { id: "sEXGgun3ZiE", width: 1080, height: 720 },
    { id: "S-cdwrx-YuQ", width: 1080, height: 1440 },
    { id: "q-motCAvPBM", width: 1080, height: 1620 },
    { id: "Xn4L310ztMU", width: 1080, height: 810 },
    { id: "ls94iFAQerE", width: 1080, height: 1620 },
    { id: "X48pUOPKf7A", width: 1080, height: 160 },
    { id: "GbLS6YVXj0U", width: 1080, height: 810 },
    { id: "9CRd1J1rEOM", width: 1080, height: 720 },
    { id: "xKhtkhc9HbQ", width: 1080, height: 1440 },
];

// const photos = unsplashPhotos.map((photo) => ({
//     src: unsplashLink(photo.id, photo.width, photo.height),
//     width: photo.width,
//     height: photo.height,
//     images: breakpoints.map((breakpoint) => {
//         const height = Math.round((photo.height / photo.width) * breakpoint);
//         return {
//             src: unsplashLink(photo.id, breakpoint, height),
//             width: breakpoint,
//             height,
//         };
//     }),
// }));

const photos = hpxPhotos.map((photo) => ({
    src: hpxLink(photo.id, photo.width, photo.height),
    width: 2048,
    height: 1440,
    images: breakpoints.map((breakpoint) => {
        const height = Math.round((photo.height / photo.width) * breakpoint);
        return {
            src: hpxLink(photo.id, breakpoint, height),
            width: breakpoint,
            height,
        };
    }),
}));


export default photos;