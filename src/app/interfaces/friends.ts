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

export interface Node extends Movie.Movie{

    originalTitleText: Movie.TitleText;
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


export interface GenreItem{
    text:       string;
    GenreItem:  "GenreItem",
}


export interface RatingsSummary {
    aggregateRating: number;
    voteCount:       number;
    __typename:      "RatingsSummary";
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
    genre:      GenreItem;
    __typename: "TitleGenre";
}
