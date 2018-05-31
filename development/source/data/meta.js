/**
 * @Author: Morgan Andree Ray
 * @Date:   27-04-2018
 * @Email:  info@andreeray.se
 * @Filename: meta.js
 * @Last modified by:   Morgan Andree Ray
 * @Last modified time: 30-05-2018
 * @License: MIT
 */


export default {
    validation_rules: {
        resource: {
            name: {
                type: 'String',
                required: true,
                unique: true
            }
        },
        location: {
            name: {
                type: 'String',
                required: true,
                unique: true
            },
            type: {
                type: 'String',
                required: true,
                unique: false
            },
            location_id: {
                type: 'String',
                required: false,
                unique: false
            },
            resources: {
                resource_id: {
                    type: 'String',
                    required: true,
                    unique: false
                },
                sell: {
                    type: 'Number',
                    required: false,
                    unique: false
                },
                buy: {
                    type: 'Number',
                    required: false,
                    unique: false
                }
            }
        },
        mission: {
            name: {
                type: 'String',
                required: true,
                unique: true
            },
            type: {
                type: 'String',
                required: true,
                unique: false
            },
            description: {
                type: 'String',
                required: true,
                unique: false
            },
            payment: {
                type: 'Number',
                required: true,
                unique: false
            },
            giver_id: {
                type: 'String',
                required: true,
                unique: false
            },
            objectives: {
                description: {
                    type: 'String',
                    required: true,
                    unique: false
                }
            }
        },
        character: {
            name: {
                type: 'String',
                required: true,
                unique: true
            },
            description: {
                type: 'String',
                required: false,
                unique: false
            },
            location_id: {
                type: 'String',
                required: false,
                unique: false
            }
        },
        organisation: {
            name: {
                type: 'String',
                required: true,
                unique: true
            },
            type: {
                type: 'String'
            },
            description: {
                type: 'String',
                required: false,
                unique: false
            },
            location_id: {
                type: 'String',
                required: false,
                unique: false
            }
        },
        user: {
            name: {
                type : 'String',
                required: false,
                unique: false
            },
            username: {
                type: 'String',
                required: true,
                unique: true
            },
            email: {
                type: 'String',
                required: false,
                unique: true
            },
            password: {
                type: 'String',
                required: true,
                unique: false
            },
            image_src: {
                type: 'String',
                required: false,
                unique: false
            },
            role: {
                type: 'String',
                required: true,
                unique: false
            },
            certs: {
                type: 'Array',
                required: false,
                unique: false
            }
        },
        login: {
            username: {
                type: 'String',
                required: true,
            },
            password: {
                type: 'String',
                required: true
            }
        },
        ship: {
            name: {
                type: 'String',
                required: true,
                unique: true,
            },
            organisation_id: {
                type: 'String',
                required: true
            },
            avionics: {
                type: 'Array'
            },
            systems: {
                type: 'Array'
            },
            propulsions: {
                type: 'Array'
            },
            thrusters: {
                type: 'Array'
            },
            weapons: {
                type: 'Array'
            }
        },
        avionic: {
            model: {
                type: 'String',
                required: true
            },
            organisation_id: {
                type: 'String',
                required: false
            },
            size: {
                type: 'String',
                required: true
            },
            category: {
                type: 'String',
                required: true
            }
        },
        propulsion: {
            model: {
                type: 'String',
                required: true
            },
            organisation_id: {
                type: 'String',
                required: false
            },
            size: {
                type: 'String',
                required: true
            },
            category: {
                type: 'String',
                required: true
            }
        },
        system: {
            model: {
                type: 'String',
                required: true
            },
            organisation_id: {
                type: 'String',
                required: false
            },
            size: {
                type: 'String',
                required: true
            },
            category: {
                type: 'String',
                required: true
            }
        },
        thruster: {
            model: {
                type: 'String',
                required: true
            },
            organisation_id: {
                type: 'String',
                required: false
            },
            count: {
                type: 'Number',
                required: true
            },
            category: {
                type: 'String',
                required: true
            }
        },
        weapon: {
            model: { type: 'String', required: true },
            organisation_id: { type: 'String' },
            desc: { type: 'String' },
            size: { type: 'Number' },
            mass : { type: 'Number' },
            hp: { type: 'Number' },
            sim_dps_3s: { type: 'Number' },
            sim_dps_10s:  { type: 'Number' },
            sim_dps_30s:  { type: 'Number' },
            sim_dps_60s:  { type: 'Number' },
            sim_dps_90s:  { type: 'Number' },
            dps:  { type: 'Number' },
            shot_per_minute:  { type: 'Number', required: true  },
            default_rounds:  { type: 'Number' },
            ammo_id:  { type: 'String', required: true },
            burst_rate: { type: 'Number' },
            burst_shots: { type: 'Number' },
            burst_dps: { type: 'Number' },
            spread_first: { type: 'Number' },
            spread_per_shot: { type: 'Number' },
            spread_max: { type: 'Number' },
            spread_min: { type: 'Number' },
            spread_instability: { type: 'Number' },
            spread_decay: { type: 'Number' },
            spread_decay_end: { type: 'Number' },
            power_online: { type: 'Number' },
            heat_shot: { type: 'Number' },
            heat_rate_online: { type: 'Number' },
            temp_max: { type: 'Number' },
            cooling_coefficient: { type: 'Number' },
            heating_coefficient: { type: 'Number' },
            temp_ratio_overheat: { type: 'Number' },
            temp_ratio_recovery: { type: 'Number' },
            heat_recovery: { type: 'Number' },
            temp_ratio_ir: { type: 'Number' },
            dst_decay_rate: { type: 'Number' },
            dst_max: { type: 'Number' },
            dst_ratio_overload: { type: 'Number' },
            dst_ratio_recovery: { type: 'Number' },
            dst_recovery: { type: 'Number' },
            em_ratio: { type: 'Number' },
            dmg_resist_phys: { type: 'Number' },
            dmg_resist_nrg: { type: 'Number' },
            dmg_resist_dst: { type: 'Number' },
            dmg_resist_heat: { type: 'Number' },
            dmg_resist_bio: { type: 'Number' },
            wear_lifetime: { type: 'Number' },
            wear_initial_ratio: { type: 'Number' },
            wear_degrade_on_use: { type: 'Number' },
            wear_rate_max: { type: 'Number' },
            wear_heat: { type: 'Number' },
            wear_overheat: { type: 'Number' },
            wear_overclock: { type: 'Number' },
            wear_dmg_critical: { type: 'Number' },
            wear_performance: { type: 'Number' },
            wear_dmg_perf: { type: 'Number' },
            wear_dmg_efficiency: { type: 'Number' },
            wear_dmg_heat: { type: 'Number' },
            wear_critical: { type: 'Number' }
        },
        ammo: {
            model: { type: 'String', required: true },
            size: { type: 'Number' },
            lifetime: { type: 'Number' },
            speed:  { type: 'Number' },
            range:  { type: 'Number' },
            damage_total_phys:  { type: 'Number' },
            damage_total_erg:  { type: 'Number' },
            damage_total_dist:  { type: 'Number' },
            damage_total_heat:  { type: 'Number' },
            damage_total_bio:  { type: 'Number' },
            damage_total:  { type: 'Number' },
            max_pen:  { type: 'Number' },
            per_shot:  { type: 'Number' }
        },
        missile_rack: {
            model: { type: 'String', required: true },
            organisation_id: { type: 'String' },
            desc: { type: 'String' },
            size: { type: 'Number' },
            mass:  { type: 'Number' },
            hp:  { type: 'Number' },
            missile_count:  { type: 'Number' },
            Missile_size:  { type: 'Number' },
            launch_delay: { type: 'Number' },
            detach_velocity:  { type: 'Number' },
            distance_decay_rate:  { type: 'Number' },
            distance_max:  { type: 'Number' },
            distance_ratio_overload:  { type: 'Number' },
            distance_ratio_recovery:  { type: 'Number' },
            distance_recovery:  { type: 'Number' },
            em_ratio:  { type: 'Number' },
            dmg_resist_phys: { type: 'Number' },
            dmg_resist_nrg:  { type: 'Number' },
            dmg_resist_dst:  { type: 'Number' },
            dmg_resist_heat:  { type: 'Number' },
            dmg_resist_bio:  { type: 'Number' }
        }
    },
    location_filters: [
        'Moon',
        'Station',
        'Outpost'
    ],
    location_types: [
        'Sytem',
        'Star',
        'Planet',
        'Station',
        'Moon',
        'Outpost',
    ],
    roles: [
        'Admin',
        'Trainer',
        'Member',
        'Reqruit'
    ],
    certs: [
        'base',
        'wing',
        'fighter',
        'scout',
        'e-war',
        'attack',
        'tbd',
        'flight lead',
        'controller'
    ],
    org_types: [
        'Manufacturer',
        'Shop'
    ]
}
