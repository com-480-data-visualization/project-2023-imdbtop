/*
Hooks: data
After extracting this data, it passes the parameters and other sources.
*/

export const request = [
    {
      genre: "Drama",
      ID: "1",
      label: "Drama",
    },
    {
      genre: "Adventure",
      ID: "2",
      label: "Adventure",
    },
    {
      genre: "Crime",
      ID: "3",
      label: "Crime",
    },
    {
      genre: "Action",
      ID: "4",
      label: "Action",
    },
    {
      genre: "Comedy",
      ID: "5",
      label: "Comedy",
    },
    {
      genre: "Mystery",
      ID: "6",
      label: "Mystery",
    },
    {
      genre: "Thriller",
      ID: "7",
      label: "Thriller",
    },
    {
      genre: "Biography",
      ID: "8",
      label: "Biography",
    },
    {
      genre: "Animation",
      ID: "9",
      label: "Animation",
    },
    {
      genre: "War",
      ID: "10",
      label: "War",
    },
    {
      genre: "Romance",
      ID: "11",
      label: "Romance",
    },
    {
      genre: "Sci-Fi",
      ID: "12",
      label: "Sci-Fi",
    },
    {
      genre: "Fantasy",
      ID: "13",
      label: "Fantasy",
    },
    {
      genre: "Family",
      ID: "14",
      label: "Family",
    },
    {
      genre: "History",
      ID: "15",
      label: "History",
    },
    {
      genre: "Western",
      ID: "16",
      label: "Western",
    },
    {
      genre: "Sport",
      ID: "17",
      label: "Sport",
    },
    {
      genre: "ALL",
      ID: "0",
      label: "",
    },
  ];


export const sortBy = {
    popular: "/discover/movie?sort_by=popularity.desc&",
    recent: "/movie/upcoming?",
    voted: "/discover/movie?sort_by=vote_count.desc&",
    revenue: "/discover/movie?sort_by=revenue.desc&",
};

// When it gets a genre ID, it will translate into English.
export const genreId = (item) => {
    switch (item) {
        case 35:
            return "Comedy";
        case 28:
            return "Action";
        case 12:
            return "Adventure";
        case 16:
            return "Animation";
        case 10402:
            return "Music";
        case 10770:
            return "TV-Movie";
        case 18:
            return "Drama";
        case 10751:
            return "Family";
        case 10749:
            return "Romance";
        case 9648:
            return "Mystery";
        case 27:
            return "Horror";
        case 53:
            return "Thriller";
        case 14:
            return "Fantasy";
        case 878:
            return "SF";
        case 99:
            return "Documentary";
        case 80:
            return "Crime";
        case 10752:
            return "War";
        case 36:
            return "History";
        case 37:
            return "Western";
        default:
            return "??";
    }
};