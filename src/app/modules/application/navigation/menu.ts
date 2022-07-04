export const menu = {
    "1": {
        "descripcion": "Menú para el super-administrador del sistema",
        "menu": [
            {
                "type": "single",
                "liClass": "nav-item",
                "aClass": "nav-link",
                "iClass": "nav-icon fas fa-home",
                "href": "/application/home",
                "name": "Inicio"
            },
            {
                "type": "single",
                "liClass": "nav-item",
                "aClass": "nav-link",
                "iClass": "nav-icon fas fa-home",
                "href": "/application/home",
                "name": "Estadísticas"
            },
            {
                "type": "multiple",
                "liClass": "nav-item has-treeview",
                "aClass": "nav-link",
                "iClass": "nav-icon fas fa-cog",
                "href": "#",
                "name": "Configuraciones",
                "iClassRigth": "fas fa-angle-left right",
                "submenu": [
                    {
                        "liClass": "nav-item",
                        "aClass": "nav-link",
                        "iClass": "nav-icon fas fa-user",
                        "href": "/application/config-cities",
                        "name": "Ciudades"
                    },
                    {
                        "liClass": "nav-item",
                        "aClass": "nav-link",
                        "iClass": "nav-icon fas fa-user",
                        "href": "/application/config-establishments",
                        "name": "Establecimientos"
                    },
                    {
                        "liClass": "nav-item",
                        "aClass": "nav-link",
                        "iClass": "nav-icon fas fa-user",
                        "href": "/application/config-people",
                        "name": "Personas"
                    },
                    {
                        "liClass": "nav-item",
                        "aClass": "nav-link",
                        "iClass": "nav-icon fas fa-user",
                        "href": "/application/config-profiles",
                        "name": "Perfiles"
                    },
                    {
                        "liClass": "nav-item",
                        "aClass": "nav-link",
                        "iClass": "nav-icon fas fa-user",
                        "href": "/application/config-identity-types",
                        "name": "Tipos de identificación"
                    },
                    {
                        "liClass": "nav-item",
                        "aClass": "nav-link",
                        "iClass": "nav-icon fas fa-users",
                        "href": "/application/config-users",
                        "name": "Usuarios"
                    },
                    {
                        "liClass": "nav-item",
                        "aClass": "nav-link",
                        "iClass": "nav-icon fas fa-user",
                        "href": "/application/config-measurement-units",
                        "name": "Unidades de medida"
                    },
                ]
            }
        ]
    },
    "2": {
        "descripcion": "Menú para el administrador de un negocio registrado en el sistema",
        "menu": [

        ]
    },
    "3": {
        "descripcion": "Menú para el coordinador de proyectos de un negocio registrado en el sistema",
        "menu": [

        ]
    },
    "4": {
        "descripcion": "Menú para un operario de proyectos de un negocio registrado en el sistema",
        "menu": [

        ]
    }
}