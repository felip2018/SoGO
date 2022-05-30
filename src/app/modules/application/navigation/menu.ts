export const menu = {
    "0": {
        "descripcion": "Menú para el super-administrador del sistema",
        "menu": [
            {
                "type": "single",
                "liClass": "nav-item",
                "aClass": "nav-link",
                "iClass": "nav-icon fas fa-home",
                "href": "",
                "name": "Inicio"
            },
            {
                "type": "multiple",
                "liClass": "nav-item has-treeview",
                "aClass": "nav-link",
                "iClass": "nav-icon fas fa-cog",
                "href": "",
                "name": "Configuraciones",
                "iClassRigth": "fas fa-angle-left right",
                "submenu": [
                    {
                        "liClass": "nav-item",
                        "aClass": "nav-link",
                        "iClass": "nav-icon fas fa-home",
                        "href": "",
                        "name": "Personas"
                    },
                    {
                        "liClass": "nav-item",
                        "aClass": "nav-link",
                        "iClass": "nav-icon fas fa-home",
                        "href": "",
                        "name": "Usuarios"
                    }
                ]
            }
        ]
    },
    "1": {
        "descripcion": "Menú para el administrador de un negocio registrado en el sistema",
        "menu": [

        ]
    },
    "2": {
        "descripcion": "Menú para el coordinador de proyectos de un negocio registrado en el sistema",
        "menu": [

        ]
    },
    "3": {
        "descripcion": "Menú para un operario de proyectos de un negocio registrado en el sistema",
        "menu": [

        ]
    }
}