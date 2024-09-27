// If you don't want to host your server code and client code together, you can
// pay AWS to host your server with HTTPS then config the api url endpoints like below
// const SERVER_ORIGIN = '<Your server's url>';
const SERVER_ORIGIN = "";

const loginUrl = `${SERVER_ORIGIN}/login`;

export const login = (credential) => {
  return fetch(loginUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify(credential),
  }).then((response) => {
    if (response.status !== 200) {
      throw Error("Fail to log in");
    }

    return response.json();
  });
};

const registerUrl = `${SERVER_ORIGIN}/register`;

export const register = (data) => {
  return fetch(registerUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  }).then((response) => {
    if (response.status !== 200) {
      throw Error("Fail to register");
    }
  });
};

const logoutUrl = `${SERVER_ORIGIN}/logout`;

export const logout = () => {
  return fetch(logoutUrl, {
    method: "POST",
    credentials: "include",
  }).then((response) => {
    if (response.status !== 200) {
      throw Error("Fail to log out");
    }
  });
};

const topGamesUrl = `${SERVER_ORIGIN}/game`;

export const getTopGames = () => {
  return Promise.resolve([
    {
      id: "509658",
      name: "Just Chatting",
      box_art_url:
        "https://static-cdn.jtvnw.net/ttv-boxart/509658-{width}x{height}.jpg",
      igdb_id: "",
    },
    {
      id: "32982",
      name: "Grand Theft Auto V",
      box_art_url:
        "https://static-cdn.jtvnw.net/ttv-boxart/32982_IGDB-{width}x{height}.jpg",
      igdb_id: "1020",
    },
    {
      id: "21779",
      name: "League of Legends",
      box_art_url:
        "https://static-cdn.jtvnw.net/ttv-boxart/21779-{width}x{height}.jpg",
      igdb_id: "115",
    },
    {
      id: "32399",
      name: "Counter-Strike",
      box_art_url:
        "https://static-cdn.jtvnw.net/ttv-boxart/32399-{width}x{height}.jpg",
      igdb_id: "",
    },
    {
      id: "516575",
      name: "VALORANT",
      box_art_url:
        "https://static-cdn.jtvnw.net/ttv-boxart/516575-{width}x{height}.jpg",
      igdb_id: "126459",
    },
    {
      id: "511224",
      name: "Apex Legends",
      box_art_url:
        "https://static-cdn.jtvnw.net/ttv-boxart/511224-{width}x{height}.jpg",
      igdb_id: "114795",
    },
    {
      id: "512953",
      name: "ELDEN RING",
      box_art_url:
        "https://static-cdn.jtvnw.net/ttv-boxart/512953_IGDB-{width}x{height}.jpg",
      igdb_id: "119133",
    },
    {
      id: "29595",
      name: "Dota 2",
      box_art_url:
        "https://static-cdn.jtvnw.net/ttv-boxart/29595-{width}x{height}.jpg",
      igdb_id: "",
    },
    {
      id: "497057",
      name: "Destiny 2",
      box_art_url:
        "https://static-cdn.jtvnw.net/ttv-boxart/497057-{width}x{height}.jpg",
      igdb_id: "25657",
    },
    {
      id: "512710",
      name: "Call of Duty: Warzone",
      box_art_url:
        "https://static-cdn.jtvnw.net/ttv-boxart/512710-{width}x{height}.jpg",
      igdb_id: "131800",
    },
    {
      id: "33214",
      name: "Fortnite",
      box_art_url:
        "https://static-cdn.jtvnw.net/ttv-boxart/33214-{width}x{height}.jpg",
      igdb_id: "1905",
    },
    {
      id: "209738946",
      name: "Wuthering Waves",
      box_art_url:
        "https://static-cdn.jtvnw.net/ttv-boxart/209738946_IGDB-{width}x{height}.jpg",
      igdb_id: "202956",
    },
    {
      id: "18122",
      name: "World of Warcraft",
      box_art_url:
        "https://static-cdn.jtvnw.net/ttv-boxart/18122-{width}x{height}.jpg",
      igdb_id: "123",
    },
    {
      id: "55453844",
      name: "Street Fighter 6",
      box_art_url:
        "https://static-cdn.jtvnw.net/ttv-boxart/55453844_IGDB-{width}x{height}.jpg",
      igdb_id: "191692",
    },
    {
      id: "65632",
      name: "DayZ",
      box_art_url:
        "https://static-cdn.jtvnw.net/ttv-boxart/65632_IGDB-{width}x{height}.jpg",
      igdb_id: "2117",
    },
    {
      id: "518203",
      name: "Sports",
      box_art_url:
        "https://static-cdn.jtvnw.net/ttv-boxart/518203-{width}x{height}.jpg",
      igdb_id: "",
    },
    {
      id: "509672",
      name: "IRL",
      box_art_url:
        "https://static-cdn.jtvnw.net/ttv-boxart/509672-{width}x{height}.jpg",
      igdb_id: "",
    },
    {
      id: "24241",
      name: "FINAL FANTASY XIV ONLINE",
      box_art_url:
        "https://static-cdn.jtvnw.net/ttv-boxart/24241_IGDB-{width}x{height}.jpg",
      igdb_id: "386",
    },
    {
      id: "29452",
      name: "Virtual Casino",
      box_art_url:
        "https://static-cdn.jtvnw.net/ttv-boxart/29452_IGDB-{width}x{height}.jpg",
      igdb_id: "45517",
    },
    {
      id: "491487",
      name: "Dead by Daylight",
      box_art_url:
        "https://static-cdn.jtvnw.net/ttv-boxart/491487-{width}x{height}.jpg",
      igdb_id: "18866",
    },
  ]);
};

const getGameDetailsUrl = `${SERVER_ORIGIN}/game?game_name=`;

const getGameDetails = (gameName) => {
  // return Promise.resolve([
  //   {
  //     id: "33214",
  //     name: "Fortnite",
  //     box_art_url:
  //       "https://static-cdn.jtvnw.net/ttv-boxart/33214-{width}x{height}.jpg",
  //     igdb_id: "1905",
  //   },
  // ]);
};

const searchGameByIdUrl = `${SERVER_ORIGIN}/search?game_id=`;

export const searchGameById = (gameId) => {
  return fetch(`${searchGameByIdUrl}${gameId}`).then((response) => {
    if (response.status !== 200) {
      throw Error("Fail to find the game");
    }
    return response.json();
  });
};

export const searchGameByName = (gameName) => {
  console.log("asdfas");
  return Promise.resolve({
    STREAM: [
      {
        id: "40722791333",
        user_id: "92038375",
        user_login: "caedrel",
        user_name: "Caedrel",
        game_id: "21779",
        game_name: "League of Legends",
        type: "live",
        title:
          "🔴OMG VS RA // BLG VS RNG LATER - FEW GAMES - LIVE FROM FNC OFFICE🔴 !discord !youtube !vods !fnatic !displate",
        viewer_count: 19159,
        started_at: "2024-06-06T08:52:02Z",
        language: "en",
        thumbnail_url:
          "https://static-cdn.jtvnw.net/previews-ttv/live_user_caedrel-{width}x{height}.jpg",
        tag_ids: [],
        tags: [
          "xdd",
          "Washed",
          "degen",
          "English",
          "adhd",
          "vtuber",
          "Ratking",
          "LPL",
          "LCK",
          "LEC",
        ],
        is_mature: false,
      },
      {
        id: "40722702501",
        user_id: "124425627",
        user_login: "lpl",
        user_name: "LPL",
        game_id: "21779",
        game_name: "League of Legends",
        type: "live",
        title: "RA vs TES | LPL SUMMER SPLIT (2024)",
        viewer_count: 10314,
        started_at: "2024-06-06T08:06:12Z",
        language: "en",
        thumbnail_url:
          "https://static-cdn.jtvnw.net/previews-ttv/live_user_lpl-{width}x{height}.jpg",
        tag_ids: [],
        tags: ["Esports", "English"],
        is_mature: false,
      },
      {
        id: "42684100729",
        user_id: "140772558",
        user_login: "baiano",
        user_name: "Baiano",
        game_id: "21779",
        game_name: "League of Legends",
        type: "live",
        title:
          "🟢 ILHA DAS LENDAS LPL: OMG 1 x 1 RA 🟢 🌴 A SEGUIR: RNG x BLG !lendas !status #LPLCOSTREAM",
        viewer_count: 5666,
        started_at: "2024-06-06T08:27:42Z",
        language: "pt",
        thumbnail_url:
          "https://static-cdn.jtvnw.net/previews-ttv/live_user_baiano-{width}x{height}.jpg",
        tag_ids: [],
        tags: [
          "CBLOL",
          "LCK",
          "LCS",
          "COSTREAM",
          "T1",
          "Baiano",
          "LPL",
          "Português",
          "LOUD",
          "cbolao",
        ],
        is_mature: true,
      },
      {
        id: "42427059448",
        user_id: "43539324",
        user_login: "broxah",
        user_name: "Broxah",
        game_id: "21779",
        game_name: "League of Legends",
        type: "live",
        title:
          "🟢 Fill to Challenger challenge: Day 11 🟢 Fueled by defeats and more improved than ever. Let's game. 🟢 !porofessor #sponsored",
        viewer_count: 5120,
        started_at: "2024-06-06T08:24:26Z",
        language: "en",
        thumbnail_url:
          "https://static-cdn.jtvnw.net/previews-ttv/live_user_broxah-{width}x{height}.jpg",
        tag_ids: [],
        tags: ["ASMR", "English"],
        is_mature: false,
      },
      {
        id: "42427048376",
        user_id: "31545223",
        user_login: "agurin",
        user_name: "agurin",
        game_id: "21779",
        game_name: "League of Legends",
        type: "live",
        title: "Soloq | !mifcom !nnocup",
        viewer_count: 3687,
        started_at: "2024-06-06T08:16:31Z",
        language: "en",
        thumbnail_url:
          "https://static-cdn.jtvnw.net/previews-ttv/live_user_agurin-{width}x{height}.jpg",
        tag_ids: [],
        tags: ["Deutsch", "English"],
        is_mature: false,
      },
      {
        id: "40722593605",
        user_id: "38009333",
        user_login: "sixentv",
        user_name: "SixenTv",
        game_id: "21779",
        game_name: "League of Legends",
        type: "live",
        title:
          "🔴 508 LP - AUX PORTES DU CHALLENGER (645LP) 🟡 TDS VS BDSA A 22H !RAZER !HOLY !PROKIT",
        viewer_count: 3286,
        started_at: "2024-06-06T07:01:25Z",
        language: "fr",
        thumbnail_url:
          "https://static-cdn.jtvnw.net/previews-ttv/live_user_sixentv-{width}x{height}.jpg",
        tag_ids: [],
        tags: [
          "jungler",
          "leagueoflegends",
          "marseillais",
          "pizzaiolo",
          "pédagogie",
          "fun",
          "intéractif",
          "Français",
        ],
        is_mature: false,
      },
      {
        id: "40723005397",
        user_id: "81446331",
        user_login: "traytonlol",
        user_name: "TraYtoNlol",
        game_id: "21779",
        game_name: "League of Legends",
        type: "live",
        title: "SOLOQ CHALLENGER FT CALISTE ET EXA EN VOC !EMEA",
        viewer_count: 2606,
        started_at: "2024-06-06T10:24:02Z",
        language: "fr",
        thumbnail_url:
          "https://static-cdn.jtvnw.net/previews-ttv/live_user_traytonlol-{width}x{height}.jpg",
        tag_ids: [],
        tags: ["Français", "support", "Challenger"],
        is_mature: false,
      },
      {
        id: "40722580933",
        user_id: "113511896",
        user_login: "chap_gg",
        user_name: "Chap_GG",
        game_id: "21779",
        game_name: "League of Legends",
        type: "live",
        title: "🚨CHALLENGER 907LP TOP 55 EUW🚨 !Hellofresh !Holy",
        viewer_count: 2450,
        started_at: "2024-06-06T06:53:24Z",
        language: "fr",
        thumbnail_url:
          "https://static-cdn.jtvnw.net/previews-ttv/live_user_chap_gg-{width}x{height}.jpg",
        tag_ids: [],
        tags: ["Français"],
        is_mature: false,
      },
      {
        id: "40722601605",
        user_id: "166279350",
        user_login: "loeya",
        user_name: "Loeya",
        game_id: "33214",
        game_name: "Fortnite",
        type: "live",
        title: "BEST SEASON EVER!! - Code: LOEYA #epicpartner",
        viewer_count: 2266,
        started_at: "2024-06-06T07:06:07Z",
        language: "en",
        thumbnail_url:
          "https://static-cdn.jtvnw.net/previews-ttv/live_user_loeya-{width}x{height}.jpg",
        tag_ids: [],
        tags: ["Cats", "BattleRoyale", "English", "Dictatorship"],
        is_mature: false,
      },
      {
        id: "40722698965",
        user_id: "123180725",
        user_login: "rybsonlol_",
        user_name: "RybsonLoL_",
        game_id: "21779",
        game_name: "League of Legends",
        type: "live",
        title:
          "🍓Dalej wyciągamy truskawkowego króla z mastera🍓 | Dziś 18:00 dota2 na !kick | !wybory !logitech !csgoskins !eneba #reklama",
        viewer_count: 2249,
        started_at: "2024-06-06T08:04:21Z",
        language: "pl",
        thumbnail_url:
          "https://static-cdn.jtvnw.net/previews-ttv/live_user_rybsonlol_-{width}x{height}.jpg",
        tag_ids: [],
        tags: [
          "Niedowaga",
          "Nerdzik",
          "GayestManAlive",
          "Polski",
          "grzybiarz",
          "Autism",
          "LGTB",
          "talerz5kg",
        ],
        is_mature: false,
      },
    ],
    VIDEO: [
      {
        id: "2165000526",
        stream_id: "51260789181",
        user_id: "757655625",
        user_login: "taaxed",
        user_name: "taaxed",
        title:
          "come hang out! new to league - playing until I unlock ranked currently level 24",
        description: "",
        created_at: "2024-06-06T11:48:33Z",
        published_at: "2024-06-06T11:48:33Z",
        url: "https://www.twitch.tv/videos/2165000526",
        thumbnail_url: "http://localhost:1421/image1.png",
        viewable: "public",
        view_count: 0,
        language: "en",
        type: "archive",
        duration: "16s",
        muted_segments: null,
      },
      {
        id: "2165000525",
        stream_id: "40723250949",
        user_id: "774629174",
        user_login: "chatsoull",
        user_name: "chatsoull",
        title: "on cook de la haute qualité sur graves",
        description: "",
        created_at: "2024-06-06T11:48:33Z",
        published_at: "2024-06-06T11:48:33Z",
        url: "https://www.twitch.tv/videos/2165000525",
        thumbnail_url: "http://localhost:1421/image2.png",
        viewable: "public",
        view_count: 0,
        language: "fr",
        type: "archive",
        duration: "16s",
        muted_segments: null,
      },
    ],
    CLIP: [
      {
        id: "BeautifulTentativeRhinocerosANELE",
        url: "https://clips.twitch.tv/BeautifulTentativeRhinocerosANELE",
        embed_url:
          "https://clips.twitch.tv/embed?clip=BeautifulTentativeRhinocerosANELE",
        broadcaster_id: "25978600",
        broadcaster_name: "nacestarleague3",
        creator_id: "25139393",
        creator_name: "CookiesOP",
        video_id: "",
        game_id: "21779",
        language: "en",
        title: "Legends",
        view_count: 1788568,
        created_at: "2019-04-28T19:39:58Z",
        thumbnail_url:
          "https://clips-media-assets2.twitch.tv/AT-cm%7C446951511-preview-480x272.jpg",
        duration: 59.9,
        vod_offset: null,
        is_featured: false,
      },
      {
        id: "AntediluvianAmorphousEchidnaKappaPride",
        url: "https://clips.twitch.tv/AntediluvianAmorphousEchidnaKappaPride",
        embed_url:
          "https://clips.twitch.tv/embed?clip=AntediluvianAmorphousEchidnaKappaPride",
        broadcaster_id: "45545070",
        broadcaster_name: "Kashin",
        creator_id: "156255094",
        creator_name: "automationuser",
        video_id: "61840731",
        game_id: "21779",
        language: "en",
        title: "SICKWOMBO",
        view_count: 1160608,
        created_at: "2017-07-31T17:01:06Z",
        thumbnail_url:
          "https://clips-media-assets2.twitch.tv/vod-61840731-offset-30-preview-480x272.jpg",
        duration: 28,
        vod_offset: 4,
        is_featured: false,
      },
    ],
  });
};

const favoriteItemUrl = `${SERVER_ORIGIN}/favorite`;

export const addFavoriteItem = (favItem) => {
  return fetch(favoriteItemUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify({ favorite: favItem }),
  }).then((response) => {
    if (response.status !== 200) {
      throw Error("Fail to add favorite item");
    }
  });
};

export const deleteFavoriteItem = (favItem) => {
  return fetch(favoriteItemUrl, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify({ favorite: favItem }),
  }).then((response) => {
    if (response.status !== 200) {
      throw Error("Fail to delete favorite item");
    }
  });
};

export const getFavoriteItem = () => {
  return fetch(favoriteItemUrl, {
    credentials: "include",
  }).then((response) => {
    if (response.status !== 200) {
      throw Error("Fail to get favorite item");
    }

    return response.json();
  });
};

const getRecommendedItemsUrl = `${SERVER_ORIGIN}/recommendation`;

export const getRecommendations = () => {
  return fetch(getRecommendedItemsUrl, {
    credentials: "include",
  }).then((response) => {
    if (response.status !== 200) {
      throw Error("Fail to get recommended item");
    }

    return response.json();
  });
};
