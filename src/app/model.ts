export interface List {
    count: number;
    previous: string;
    next: string;
    results: Object[];
}

export interface People {
    name: string;
    birth_year: string;
    eye_color: string;
    gender: string;
    hair_color: string;
    height: string;
    mass: string;
    skin_color: string;
    homeworld: string;  // Planet
    films: string[];    // Film
    species: string[];  // Species
    starships: string[];    // Starship
    vehicles: string[]; // Vehicle
    url: string;

    p_homeworld: Planet;
    p_species: Species[];
    p_films: Film[];
    p_starships: Starship[];
    p_vehicles: Vehicle[];
}

export interface Film {
    title: string;
    episode_id: number;
    opening_crawl: string;
    director: string;
    producer: string;
    release_date: Date;
    species: string[];  // Species
    starships: string[];    // Vehicle
    characters: string[];   // People
    planets: string[];  // Planet
    vehicles: string[]; // Vehicle
    url: string;

    f_characters: People[];
    f_planets: Planet[];
    f_species: Species[];
    f_starships: Starship[];
    f_vehicles: Vehicle[];
}

export interface Species {
    name: string;
    classification: string;
    designation: string;
    average_height: string;
    average_lifespan: string;
    eye_colors: string;
    hair_colors: string;
    skin_colors: string;
    language: string;
    homeworld: string; // Planet
    people: string[];
    films: string[];

    s_homeworld: Planet;
    s_people: People[];
    s_films: Film[];
}

export interface Starship {
    name: string;
    model: string;
    starship_class: string;
    manufacturer: string;
    cost_in_credits: string;
    length: string;
    crew: string;
    passengers: string;
    max_atmosphering_speed: string;
    hyperdrive_rating: string;
    MGLT: string;
    cargo_capacity: string;
    consumables: string;
    films: string[];    // Film
    pilots: string[];   // People

    s_films: Film[];
    s_pilots: People[];
}

export interface Vehicle {
    name: string;
    model: string;
    vehicle_class: string;
    manufacturer: string;
    length: string;
    cost_in_credits: string;
    crew: string;
    passengers: string;
    max_atmosphering_speed: string;
    cargo_capacity: string;
    consumables: string;
    films: string[];    // Film
    pilots: string[];   // People
    url: string;

    v_films: Film[];
    v_pilots: People[];
}

export interface Planet {
    name: string;
    diameter: string;
    rotation_period: string;
    orbital_period: string;
    gravity: string;
    population: string;
    climate: string;
    terrain: string;
    surface_water: string;
    residents: string[];    // People
    films: string[];    // Film
    url: string;

    p_films: Film[];
    p_residents: People[];
}
