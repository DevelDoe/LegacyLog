/**
 * @Author: Morgan Andree Ray
 * @Date:   27-04-2018
 * @Email:  info@andreeray.se
 * @Filename: meta.js
 * @Last modified by:   Morgan Andree Ray
 * @Last modified time: 19-05-2018
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
            }
        },
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
