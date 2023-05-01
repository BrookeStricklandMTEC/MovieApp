export interface Result {
    page:    number;
    next:    string;
    entries: number;
    results: Movie[];
}

export interface Movie {
    id:           string;
    primaryImage: Image | null;
    titleType:    TitleType;
    titleText:    TitleText;
    releaseYear:  ReleaseYear;
    releaseDate:  ReleaseDate;
}

export interface Image {
    id:         string;
    width:      number;
    height:     number;
    url:        string;
    caption:    Caption;
    __typename: "Image";
}

export interface Caption {
    plainText:  string;
    __typename: "Markdown";
}

export interface ReleaseDate {
    day:        number | null;
    month:      number | null;
    year:       number;
    __typename: "ReleaseDate";
}

export interface ReleaseYear {
    year:       number;
    endYear:    number | null;
    __typename: "YearRange";
}


export interface TitleText {
    text:       string;
    __typename: "TitleText";
}


export interface TitleType {
    text:       MediaTypeHuman;
    id:         MediaTypeId;
    isSeries:   boolean;
    isEpisode:  boolean;
    __typename: "TitleType";
}

export enum MediaTypeId {
    Short = "short",
    TvEpisode = "tvEpisode",
    TvSeries = "tvSeries",
}

export enum MediaTypeHuman {
    Short = "Short",
    TVEpisode = "TV Episode",
    TVSeries = "TV Series",
}

export type genre = null | string;