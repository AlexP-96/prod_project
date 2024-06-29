export interface genresMovie {
    id: number;
    name: string;
}

export interface productionCompanies {
    id: number;
    name: string;
}

export interface productionCountries {
    iso_3166_1: string;
    name: string;
}

export interface spokenLanguages {
    iso_639_1: string;
    name: string;
}

export interface dataMovie {
    id: number;
    adult: boolean;
    belongs_to_collection: string | null;
    budget: number;
    genres: genresMovie[];
    homepage: number | null;
    imdb_id: number;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    production_companies: productionCompanies[];
    production_countries: productionCountries[];
    release_date: string;
    revenue: string | null;
    runtime: number;
    spoken_languages: spokenLanguages[];
    status: string;
    tagline: string | null;
    title: string;
    vote_average: number;
    vote_count: number;
}

export interface responseMovie {
    ok: boolean;
    data_size: number;
    error: string;
    data: dataMovie[]
}

export type sortFiled =
    "imdb_id"
    | "budget"
    | "original_language"
    | "popularity"
    | "release_date"
    | "revenue"
    | "runtime"
    | "status"
    | "vote_average"
    | "vote_count";

export type sortOrder = "desc" | "asc";

export interface IReqMovie {
    page?: number;
    page_size?: number;
    sort_field?: sortFiled;
    sort_order?: sortOrder;
    imdb_id?: number;
    ids?: number[];
    search?: string;
    adult?: boolean;
    budget_min?: number;
    budget_max?: number;
    genres?: string[];
    original_language?: string;
    popularity_min?: number;
    popularity_max?: number;
    release_date_min?: string;
    release_date_max?: string;
    revenue_min?: number;
    revenue_max?: number;
    runtime_min?: number;
    runtime_max?: number;
    spoken_languages?: string[],
    status?: string;
    vote_average_min?: number;
    vote_average_max?: number;
    vote_count_min?: number;
    vote_count_max?: number;
}

export interface optionsReqMovie {
    data: IReqMovie;
    config?: any;
}

export type reqGenresMovie =
    'Action'
    | 'Adventure'
    | 'Animation'
    | 'Comedy'
    | 'Crime'
    | 'Documentary'
    | 'Drama'
    | 'Fantasy'
    | 'Film-Noir'
    | 'Horror'
    | 'Musical'
    | 'Mystery'
    | 'Romance'
    | 'Sci-Fi'