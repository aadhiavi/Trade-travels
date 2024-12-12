import EPHESUS7 from '../../../Assets/7/EPHESUS7.jpg'
import LAODICEA2 from '../../../Assets/7/LAODICEA2.jpg'
import PERGAMON6 from '../../../Assets/7/PERGAMON6.jpg'
import PHILADELPHIA5 from '../../../Assets/7/PHILADELPHIA5.jpg'
import SARDIS from '../../../Assets/7/SARDIS - SART9.jpg'
import SMYRNA from '../../../Assets/7/SMYRNA - IZMIR6.jpg'
import THYATIRA from '../../../Assets/7/THYATIRA-AKHISAR8.jpg'
import patmosImage from '../../../Assets/7/patmos.jpg'
import Ephesus from './Places/Ephesus'
import Laodicea from './Places/Laodicea'
import Patmos from './Places/Patmos'
import Pergamon from './Places/Pergamon'
import Philadelphia from './Places/Philadelphia'
import Sardis from './Places/Sardis'
import Smyrna from './Places/Smyrna'
import Thyatira from './Places/Thyatira'

export const turkeyarray = [
    {
        element: <Pergamon />,
        image: PERGAMON6,
        title: "Pergamon (Pergamum)",
        discription: "Pergamon was a prominent city with a significant library and temples. It was known for its pagan practices and challenges to early Christians.",
        link: 'pergamon',
        path: 'pergamon',
    },
    {
        element: <Smyrna />,
        image: SMYRNA,
        title: "Smyrna (Izmir)",
        discription: "Smyrna was a thriving trade center and faced persecution for its Christian community.",
        link: 'smyrna',
        path: 'smyrna',
    },
    {
        element: <Sardis />,
        image: SARDIS,
        title: "Sardis",
        discription: "Sardis was known for its wealth and was a major commercial center. The church there was spiritually complacent.",
        link: 'sardis',
        path: 'sardis',
    },
    {
        element: <Ephesus />,
        image: EPHESUS7,
        title: "Ephesus",
        discription: "Ephesus was an important city known for its commerce and the Temple of Artemis. The church was early and influential but faced issues with losing its first love.",
        link: 'ephesus',
        path: 'ephesus',
    },
    {
        element: <Thyatira />,
        image: THYATIRA,
        title: "Thyatira (Akhisar)",
        discription: "Thyatira was known for its trade guilds and textile industry, particularly dyeing. The church faced challenges from false prophets.",
        link: 'thyatira',
        path: 'thyatira',
    },
    {
        element: <Laodicea />,
        image: LAODICEA2,
        title: "Laodicea",
        discription: " Laodicea was a wealthy city known for its banking, textile industry, and medical school. The church was lukewarm and complacent.",
        link: 'laodicea',
        path: 'laodicea',
    },
    {
        element: <Philadelphia />,
        image: PHILADELPHIA5,
        title: "Philadelphia",
        discription: " Philadelphia was a city known for its missionary zeal and was a stronghold of Christianity amidst challenges.",
        link: 'philadelphia',
        path: 'philadelphia',
    },
    {
        element: <Patmos />,
        image: patmosImage,
        title: "Patmos Islands",
        discription: "The island of Patmos is inhabited since 3,000 BC, but the identity of its first inhabitants is still unknown. Some believe that the Kares, the Leleges and the Pelasgous were the first settlers while some think that the Dorians were the first inhabitants, followed by the Ionians. ",
        link: 'patmos',
        path: 'patmos',
    },
]