import React, { Component } from 'react'
import NewsItems from './NewsItems'

export default class News extends Component {
    articles = {
        "status": "ok",
        "totalResults": 33,
        "articles": [
            {
                "source": {
                    "id": "google-news",
                    "name": "Google News"
                },
                "author": "CNN",
                "title": "South Korea president declares emergency martial law - CNN",
                "description": null,
                "url": "https://news.google.com/rss/articles/CBMigAFBVV95cUxNNnpIeXJGak9sVVJESXdYa3dsUzhfOGlFcGFkTWF4SGtCYmlHVHNwV0ZvWWk1eXdvVE55WWVhcmcxOXY5enZ6aVF0Z0lWY0lQZEZOd2VsOFVGN3JuUVlyWHNfYXJ5T1pRTkVib1Q3OEFOQmNJQ0YwbFBnZ3FXRTk4dA?oc=5",
                "urlToImage": null,
                "publishedAt": "2024-12-03T14:17:00Z",
                "content": null
            },
            {
                "source": {
                    "id": "espn",
                    "name": "ESPN"
                },
                "author": null,
                "title": "Al-Shaair suspended 3 games for Lawrence hit - ESPN",
                "description": "The NFL has suspended Texans LB Azeez Al-Shaair three games for repeated violations of player safety rules after his hit to the head of Jaguars QB Trevor Lawrence.",
                "url": "https://www.espn.com/nfl/story/_/id/42754382/texans-azeez-al-shaair-suspended-3-games-trevor-lawrence-hit",
                "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fphoto%2F2024%2F1202%2Fr1422610_1296x729_16%2D9.jpg",
                "publishedAt": "2024-12-03T14:16:00Z",
                "content": "The NFL suspended Houston Texans linebacker Azeez Al-Shaair three games for repeated violations of player safety rules after his hit to the head of Jacksonville Jaguars quarterback Trevor Lawrence on… [+3645 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "Rolling Stone"
                },
                "author": "Rolling Stone",
                "title": "The 100 Best Songs of 2024 - Rolling Stone",
                "description": "The best songs of the year, from Chappell Roan to Beyonce to Kendrick, and more",
                "url": "http://www.rollingstone.com/music/music-lists/best-songs-of-2024-1235163675/",
                "urlToImage": "https://www.rollingstone.com/wp-content/uploads/2024/11/YEAR-IN-REVIEW_songs_final.jpg?w=1600&h=900&crop=1",
                "publishedAt": "2024-12-03T14:06:54Z",
                "content": "If you were hoping for the pop madness of 2024 to slow down and start making sense: good luck, babe! Because there has never, ever, been a pop year like the hot-not-pretty mess that was 2024. Week to… [+32468 chars]"
            },
            {
                "source": {
                    "id": "the-verge",
                    "name": "The Verge"
                },
                "author": "Sean Hollister",
                "title": "Intel announces $249 Arc B580 and $219 Arc B570 ‘Battlemage’ graphics cards - The Verge",
                "description": "Intel has announced the budget $249 Arc B580 and $219 Arc B570, shipping December 13th and January 16th, respectively, as the “best-in-class performance per dollar” options in the GPU market.",
                "url": "https://www.theverge.com/2024/12/3/24311887/intel-battlemage-b580-b570-price-release-date",
                "urlToImage": "https://cdn.vox-cdn.com/thumbor/Ed9k1hXkwB8ZT40Vrkb_FIiZcKk=/0x0:1298x998/1200x628/filters:focal(443x448:444x449)/cdn.vox-cdn.com/uploads/chorus_asset/file/25770990/chrome_eGCnflGRd7.jpg",
                "publishedAt": "2024-12-03T14:00:00Z",
                "content": "Intel announces $249 Arc B580 and $219 Arc B570 Battlemage graphics cards\r\nIntel announces $249 Arc B580 and $219 Arc B570 Battlemage graphics cards\r\n / Battlemage will make its desktop debut.\r\nBySea… [+4124 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "SciTechDaily"
                },
                "author": null,
                "title": "Don’t Miss December’s Night Sky Spectacle: Venus Shines, Jupiter Glows, Meteors Fly! - SciTechDaily",
                "description": "December offers a celestial treat with Venus shining as the \"Evening Star\" and Jupiter at its brightest during opposition. Highlights include Venus pairing with the crescent Moon, Jupiter flanked by the Moon and Aldebaran, and Mars nearing opposition, glowing…",
                "url": "https://scitechdaily.com/dont-miss-decembers-night-sky-spectacle-venus-shines-jupiter-glows-meteors-fly/",
                "urlToImage": "https://scitechdaily.com/images/Astronomy-Skywatching-Planets-Art-Concept.jpg",
                "publishedAt": "2024-12-03T13:45:30Z",
                "content": "This month, take in breathtaking views of Venus shining as the “Evening Star,” Jupiter glowing at its brightest during opposition, and Mars doubling in brightness. Don’t miss the Winter Triangle ligh… [+6170 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "[Removed]"
                },
                "author": null,
                "title": "[Removed]",
                "description": "[Removed]",
                "url": "https://removed.com",
                "urlToImage": null,
                "publishedAt": "2024-12-03T13:30:26Z",
                "content": "[Removed]"
            },
            {
                "source": {
                    "id": "espn",
                    "name": "ESPN"
                },
                "author": null,
                "title": "Vazquez, 3-time boxing world champ, dies at 46 - ESPN",
                "description": "Israel Vazquez, Mexico's three-time junior featherweight world champion, has died after a battle with cancer. He was 46.",
                "url": "https://www.espn.com/boxing/story/_/id/42753781/israel-vazquez-three-world-champion-boxer-dies-46",
                "urlToImage": "https://a1.espncdn.com/combiner/i?img=%2Fphoto%2F2024%2F1203%2Fr1422986_1296x729_16%2D9.jpg",
                "publishedAt": "2024-12-03T13:25:00Z",
                "content": "Israel Vazquez, Mexico's three-time junior featherweight world champion, has died after a battle with cancer, WBC president Mauricio Sulaiman said Tuesday. He was 46.\r\nKnown for his punching power an… [+728 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "WTOP"
                },
                "author": "Will Vitka",
                "title": "Husband of missing Manassas Park woman Mamta Kafle Bhatt charged with murder - WTOP",
                "description": "The husband of missing Manassas Park, Virginia, woman Mamta Kafle Bhatt has been indicted on a charge of murder.",
                "url": "https://wtop.com/prince-william-county/2024/12/husband-of-missing-manassas-park-woman-mamta-kafle-bhatt-charged-with-murder/",
                "urlToImage": "https://wtop.com/wp-content/uploads/2024/08/Mamta-Kafle-1.jpg",
                "publishedAt": "2024-12-03T12:55:03Z",
                "content": "This page contains a video which is being blocked by your ad blocker.In order to view the video you must disable your ad blocker.\r\nHusband of missing Manassas Park woman Mamta Kafle Bhatt charged wit… [+4736 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "BBC News"
                },
                "author": null,
                "title": "Israel strikes and Hezbollah mortar fire strain Lebanon ceasefire - BBC.com",
                "description": "Lebanon says 11 people were killed in Israeli strikes after Hezbollah fired mortars at an Israeli army post.",
                "url": "https://www.bbc.com/news/articles/c6273139ed4o",
                "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/28e5/live/46c06a80-b175-11ef-a0f2-fd81ae5962f4.jpg",
                "publishedAt": "2024-12-03T11:48:12Z",
                "content": "Israeli soldiers on patrol in northern Israel, near the border with Lebanon\r\nDeadly Israeli air strikes and a mortar attack by Hezbollah have raised fears that the ceasefire in Lebanon could collapse… [+6014 chars]"
            },
            {
                "source": {
                    "id": "politico",
                    "name": "Politico"
                },
                "author": "POLITICO",
                "title": "Biden just gave Trump a new pardon playbook - POLITICO",
                "description": null,
                "url": "https://www.politico.com/news/2024/12/03/biden-trump-pardon-playbook-00192289",
                "urlToImage": null,
                "publishedAt": "2024-12-03T10:00:00Z",
                "content": null
            },
            {
                "source": {
                    "id": "cnn",
                    "name": "CNN"
                },
                "author": "Homero De la Fuente",
                "title": "Denver Broncos’ two interception TDs spoil record-setting night for Cleveland Browns - CNN",
                "description": "The Denver Broncos defense scored two interception touchdowns to defeat the Browns 41-32 on Monday to spoil a record-setting night for Cleveland’s Jameis Winston and Jerry Jeudy.",
                "url": "https://www.cnn.com/2024/12/03/sport/denver-broncos-defeat-cleveland-browns-spt-intl/index.html",
                "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/01-gettyimages-2187466580.jpg?c=16x9&q=w_800,c_fill",
                "publishedAt": "2024-12-03T09:33:00Z",
                "content": "The Denver Broncos defense scored two interception touchdowns to defeat the Browns 41-32 on Monday to spoil a record-setting night for Clevelands Jameis Winston and Jerry Jeudy.\r\nWinston passed for a… [+2768 chars]"
            },
            {
                "source": {
                    "id": "the-washington-post",
                    "name": "The Washington Post"
                },
                "author": "Susannah George",
                "title": "Syrian forces regroup with help from Iran, Russia after shock rebel advance - The Washington Post",
                "description": "Russia and Iran have offered military and diplomatic support to the Syrian government as it tries to stanch a major rebel advance.",
                "url": "https://www.washingtonpost.com/world/2024/12/02/syria-rebels-russia-iran-assad/",
                "urlToImage": "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/Y5CXWN6J6JSV23QIQZZYSIBGKU_size-normalized.jpg&w=1440",
                "publishedAt": "2024-12-03T05:07:29Z",
                "content": "Russia launched airstrikes in support of the Syrian army Monday in an effort to stanch a major rebel advance that surprised and overwhelmed the forces of Syrian President Bashar al-Assad late last we… [+396 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "Hollywood Reporter"
                },
                "author": "Hilary Lewis, Kirsten Chuba",
                "title": "2024 Gotham Awards: ‘A Different Man’ Wins Best Feature as ‘Nickel Boys,’ ‘Sing Sing’ Each Take Two - Hollywood Reporter",
                "description": "Sean Baker's 'Anora' went into the night with the most nominations, four, but went home empty-handed.",
                "url": "http://www.hollywoodreporter.com/movies/movie-news/gotham-awards-2024-winners-list-1236074890/",
                "urlToImage": "https://www.hollywoodreporter.com/wp-content/uploads/2024/02/A-Different-Man-Sebastian-Stan-Renate-Reinsve-Adam-Pearson-Faces-Off-LLC.jpg?w=1440&h=810&crop=1",
                "publishedAt": "2024-12-03T04:39:31Z",
                "content": "A Different Manwon best feature at the 2024 Gotham Awards, while Nickel Boys and Sing Singeach won two awards at the star-studded ceremony at New York’s Cipriani Wall Street on Monday night.\r\nA Diffe… [+12115 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "SamMobile"
                },
                "author": "SamMobile, Asif Iqbal Shaik",
                "title": "Galaxy Z Flip 7, Fold 7 will finally get upgrades you always wanted - SamMobile - Samsung news",
                "description": "Samsung is still the biggest foldable smartphone brand globally, but it is losing its sheen. Chinese rivals are launching foldable ...",
                "url": "https://www.sammobile.com/news/galaxy-z-flip-7-fold-7-features-bigger-screens/",
                "urlToImage": "https://www.sammobile.com/wp-content/uploads/2024/11/Galaxy-Z-Fold-Special-Edition-SE-design-720x405.jpg",
                "publishedAt": "2024-12-03T04:04:00Z",
                "content": "Samsung is still the biggest foldable smartphone brand globally, but it is losing its sheen. Chinese rivals are launching foldable phones with better specifications, thinner form factors, and lower p… [+1578 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "BBC News"
                },
                "author": null,
                "title": "US woman admits drink-driving in crash that killed bride on wedding day - BBC.com",
                "description": "Samantha Miller was fatally hit while travelling in a golf cart and still wearing her wedding dress.",
                "url": "https://www.bbc.com/news/articles/c3wepqnypg5o",
                "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/7824/live/49b74f40-b168-11ef-a634-5dd77624ee4e.png",
                "publishedAt": "2024-12-03T03:28:06Z",
                "content": "A US woman has pleaded guilty to drink-driving charges over an incident in which she killed a newlywed bride who was travelling in a golf cart on her wedding night.\r\nJamie Lee Komoroski was sentenced… [+1979 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "[Removed]"
                },
                "author": null,
                "title": "[Removed]",
                "description": "[Removed]",
                "url": "https://removed.com",
                "urlToImage": null,
                "publishedAt": "2024-12-03T03:04:00Z",
                "content": "[Removed]"
            },
            {
                "source": {
                    "id": "associated-press",
                    "name": "Associated Press"
                },
                "author": "JILL COLVIN",
                "title": "Trump says he’ll attend Notre Dame Cathedral reopening celebration in Paris this weekend - The Associated Press",
                "description": "President-elect Donald Trump will attend the reopening celebration for Notre Dame Cathedral in Paris this weekend, his first foreign trip since the election. The cathedral will reopen after more than five years of reconstruction following a devastating 2019 f…",
                "url": "https://apnews.com/article/trump-paris-notre-dame-macron-32d9086e3d2f21ae871f5bb1120929be",
                "urlToImage": "https://dims.apnews.com/dims4/default/6598078/2147483647/strip/true/crop/6000x3375+0+312/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F1a%2F39%2F8f95c8afebc59dcd6305970c38f7%2F077fee9cc52541c9a1ae8ffe86ed3cbb",
                "publishedAt": "2024-12-03T02:27:00Z",
                "content": "NEW YORK (AP) President-elect Donald Trump will attend the reopening celebration for Notre Dame Cathedral in Paris this weekend, his first foreign trip since the election.\r\nThe cathedral is set to re… [+5551 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "San Francisco Chronicle"
                },
                "author": "Eric Branch",
                "title": "49ers’ Christian McCaffrey out rest of the season, Jordan Mason might be headed to IR - San Francisco Chronicle",
                "description": "The San Francisco 49ers lost Christian McCaffrey for the rest of the season with a knee injury, and lead backup RB Jordan Mason might be headed to IR.",
                "url": "https://www.sfchronicle.com/sports/49ers/article/49ers-christian-mccaffrey-season-mason-head-ir-19953621.php",
                "urlToImage": "https://s.hdnux.com/photos/01/46/22/12/26813119/3/rawImage.jpg",
                "publishedAt": "2024-12-03T02:08:50Z",
                "content": "Christian McCaffrey, who missed the first eight games of the season because of an injury, will miss the 49ers' final five contests after suffering knee injury Sunday night against the Bills. \r\nPatric… [+5216 chars]"
            },
            {
                "source": {
                    "id": "associated-press",
                    "name": "Associated Press"
                },
                "author": "RANDALL CHASE",
                "title": "Delaware judge reaffirms ruling that invalidated massive Tesla pay package for Elon Musk - The Associated Press",
                "description": "A Delaware judge has reaffirmed her ruling that Tesla must revoke Elon Musk’s multibillion-dollar pay package. The judge on Monday also rejected an equally unprecedented and massive fee request by plaintiff attorneys. The rulings came in a lawsuit filed by a …",
                "url": "https://apnews.com/article/tesla-elon-musk-executive-pay-compensation-shareholders-86c5811b738e3a9df2b6e4adbcd055bb",
                "urlToImage": "https://dims.apnews.com/dims4/default/e289b40/2147483647/strip/true/crop/3731x2099+0+197/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F0d%2Fbc%2Fa27eb1d7b6b15b76cc81f715be9e%2Fe1e9f5628f2e48e299b51c99ce7dae09",
                "publishedAt": "2024-12-03T01:28:00Z",
                "content": "DOVER, Del. (AP) A Delaware judge has reaffirmed her ruling that Tesla must revoke Elon Musks multibillion-dollar pay package\r\nChancellor Kathaleen St. Jude McCormick on Monday denied a request by at… [+3418 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "BBC News"
                },
                "author": null,
                "title": "Hawaii woman Hannah Kobayashi spotted entering Mexico - police - BBC.com",
                "description": "Police say Ms Kobayashi is now considered to be \"voluntarily missing\" and is not in danger.",
                "url": "https://www.bbc.com/news/articles/c5y7819j500o",
                "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/cc9e/live/b1b2f560-b120-11ef-84fd-d9a0b92c1a7f.jpg",
                "publishedAt": "2024-12-03T01:26:34Z",
                "content": "A woman from Hawaii who was reported missing in Los Angeles by her family last month was last seen by US authorities safely crossing the southern US border into Mexico, the Los Angeles Police Departm… [+2186 chars]"
            }
        ]
    }
    constructor() {
        super()
        this.state = {
            articles: this.articles.articles,
            loading: false
        }
    }

    async componentDidMount() {
        console.log("cdn")
        let url = "https://newsapi.org/v2/everything?q=bitcoin&apiKey=76e49860294e45e19e87a3bcf98ac3da"
        let data = await fetch(url)
        let parseData = await data.json()
        this.setState({ articles: parseData.articles })
    }

    render() {
        return (
            <div className='container my-3'>
                <h2>This is the news compoent Headings</h2>
                <div className='row'>
                    {this.state.articles.map((element) => {
                        return <div className='col-md-4 my-3' key={element.url}>
                            <NewsItems title={element.title} description={element.description} imageUrl={element.urlToImage} newsUrl={element.newsUrl} />
                        </div>
                    })}
                </div>


            </div>
        )
    }
}
