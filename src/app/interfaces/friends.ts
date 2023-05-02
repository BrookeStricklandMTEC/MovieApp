import type * as Movie from "./movie"

// import { Movie } from 'src/app/interfaces/movie';



export interface Friends {
    entries: number;
    results: Result[];
}

export interface Result {
    id:                 string;
    moreLikeThisTitles: MoreLikeThisTitles;
}

export interface MoreLikeThisTitles {
    edges:      Edge[];
    __typename: string;
}

export interface Edge {
    node:       Node;
    __typename: "MoreLikeThisEdge";
}

export interface Node {
    id:                string;
    titleText:         OriginalTitleText;
    titleType:         TitleType;
    originalTitleText: OriginalTitleText;
    primaryImage:      PrimaryImage;
    releaseYear:       ReleaseYear;
    ratingsSummary:    RatingsSummary;
    runtime:           Runtime;
    certificate:       Certificate;
    canRate:           CanRate;
    titleGenres:       TitleGenres;
    canHaveEpisodes:   boolean;
    __typename:        "Title";
}


export interface CanRate {
    isRatable:  boolean;
    __typename: "CanRate";
}

export interface Certificate {
    rating:     string;
    __typename: "Certificate";
}

export interface OriginalTitleText {
    text:       string;
    __typename: OriginalTitleTextTypename;
}

export enum OriginalTitleTextTypename {
    GenreItem = "GenreItem",
    TitleText = "TitleText",
}

export interface PrimaryImage {
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

export interface RatingsSummary {
    aggregateRating: number;
    voteCount:       number;
    __typename:      "RatingsSummary";
}

export interface ReleaseYear {
    year:       number;
    endYear:    null;
    __typename: "YearRange";
}

export interface Runtime {
    seconds:    number;
    __typename: "Runtime";
}

export interface TitleGenres {
    genres:     Genre[];
    __typename: "TitleGenres";
}

export interface Genre {
    genre:      OriginalTitleText;
    __typename: "TitleGenre";
}

export interface TitleType {
    id:                  ID;
    text:                Text;
    canHaveEpisodes:     boolean;
    displayableProperty: DisplayableProperty;
    __typename:          "TitleType";
}

export interface DisplayableProperty {
    value:      Caption;
    __typename: "DisplayableTitleTypeProperty";
}


export enum ID {
    Movie = "movie",
}

export enum Text {
    Movie = "Movie",
}