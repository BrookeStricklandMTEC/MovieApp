import type * as Movie from "./movie"

export interface MovieMetadata {
}


export interface PlotResult {
    entries: number;
    results: Result[];
}

export interface Result {
    id:   string;
    plot: Plot;
}

export interface Plot {
    plotText:   Movie.Caption;
    language:   Language;
    __typename: "Plot";
}

export interface Language {
    id:         string; //"en-US"
    __typename: "DisplayableLanguage";
}







export interface TitleMainImagesResult {
    id:              string;
    titleMainImages: TitleMainImages;
}

export interface TitleMainImages {
    total:      number;
    edges:     ImageEdge[];
    __typename: string;
}

export interface ImageEdge {
    node:       Movie.Image;
    __typename: "ImageEdge";
}



/*

{ "id": "tt6718170", "creators": [], "directors": [ { "totalCredits": 4, "category": { "text": "Directors", "__typename": "CreditCategory" }, "credits": [ { "name": { "id": "nm1739338", "nameText": { "text": "Aaron Horvath", "__typename": "NameText" }, "__typename": "Name" }, "attributes": null, "__typename": "Crew" }, { "name": { "id": "nm2398585", "nameText": { "text": "Michael Jelenic", "__typename": "NameText" }, "__typename": "Name" }, "attributes": null, "__typename": "Crew" }, { "name": { "id": "nm2966857", "nameText": { "text": "Pierre Leduc", "__typename": "NameText" }, "__typename": "Name" }, "attributes": [ { "text": "co-director", "__typename": "JobCreditAttribute" } ], "__typename": "Crew" } ], "__typename": "PrincipalCreditsForCategory" } ], "writers": [ { "totalCredits": 1, "category": { "text": "Writer", "__typename": "CreditCategory" }, "credits": [ { "name": { "id": "nm3821363", "nameText": { "text": "Matthew Fogel", "__typename": "NameText" }, "__typename": "Name" }, "attributes": null, "__typename": "Crew" } ], "__typename": "PrincipalCreditsForCategory" } ] }


*/