//Launch Model based on API response

export interface Launch {
    flight_number: number,
    mission_name: string,
    mission_id: string[],
    upcoming: boolean,
    launch_year: string,
    launch_date_unix: number,
    launch_date_utc: Date,
    launch_date_local: Date,
    is_tentative: boolean,
    tentative_max_precision: string,
    tbd: boolean,
    launch_window: number,
    rocket: Rocket,
    ships: string[],
    telemetry: Telemetry,
    launch_site: LaunchSite,
    launch_success: boolean,
    launch_failure_details: LaunchFailure,
    links: Links,
    details: string,
    static_fire_date_utc: Date,
    static_fire_date_unix: number,
    timeline: Timeline,
    crew: any
}

export interface Core {
    core_serial: string,
    flight: number,
    block: number,
    gridfins: boolean,
    legs: boolean,
    reused: boolean,
    land_success: boolean,
    landing_intent: boolean,
    landing_type: string,
    landing_vehicle: string
}

export interface OrbitParam {
    reference_system: string,
    regime: string,
    longitude: number,
    semi_major_axis_km: number,
    eccentricity: number,
    periapsis_km: number,
    apoapsis_km: number,
    inclination_deg: number,
    period_min: number,
    lifespan_years: number,
    epoch: Date,
    mean_motion: number,
    raan: number,
    arg_of_pericenter: number,
    mean_anomaly: number
}

export interface Payload {
    payload_id: string,
    norad_id: number[],
    reused: boolean,
    customers: string[],
    nationality: string,
    manufacturer: string,
    payload_type: string,
    payload_mass_kg: number,
    payload_mass_lbs: number,
    orbit: string,
    orbit_params: OrbitParam,
    mass_returned_kg?: number,
    mass_returned_lbs?: number,
    flight_time_sec?: number,
    cargo_manifest?: string
}

export interface Fairing {
    reused: boolean,
    recovery_attempt: boolean,
    recovered: boolean,
    ship: string
}

export interface Rocket {
    rocket_id: string,
    rocket_name: string,
    rocket_type: string,
    first_stage: {
        cores: Core[]
    },
    second_stage: {
        block: number,
        payloads: Payload[]
    },
    fairings: Fairing[]
}

export interface Telemetry {
    flight_club: string
}

export interface LaunchSite {
    site_id: string,
    site_name: string,
    site_name_long: string
}

export interface Links {
    mission_patch: string,
    mission_patch_small: string,
    reddit_campaign: string,
    reddit_launch: string,
    reddit_recovery: string,
    reddit_media: string,
    presskit: string,
    article_link: string,
    wikipedia: string,
    video_link: string,
    youtube_id: string,
    flickr_images: string[]
}

export interface LaunchFailure {
    time: number,
    altitude: number,
    reason: string
}

export interface Timeline {
    webcast_liftoff: number,
    go_for_prop_loading?: number,
    rp1_loading?: number,
    stage1_lox_loading?: number,
    stage2_lox_loading?: number,
    engine_chill?: number,
    prelaunch_checks?: number,
    propellant_pressurization?: number,
    go_for_launch?: number,
    ignition?: number,
    liftoff?: number,
    maxq?: number,
    meco?: number,
    stage_sep?: number,
    second_stage_ignition?: number,
    'seco-1'?: number
}