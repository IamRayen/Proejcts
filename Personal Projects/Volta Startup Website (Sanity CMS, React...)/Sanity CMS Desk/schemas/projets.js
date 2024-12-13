export default {
    type: "document",
    title: "References",
    name: "References",
    fields: [
        {
            name: "image",
            type: "image",
            title: "Image du programme",
            options: {
                hotspot: true,
            },
            validation: (Rule) => Rule.required(),
        },
        {
            name: "mission",
            type: "string",
            title: "Mission",
            validation: (Rule) => Rule.required(),
        },
        {
            name: "maitre",
            title: "Maitre d'ouvrage",
            type: "string",
        },
        {
            name: "lieu",
            type: "string",
            title: "Lieu",
        },
        {
            name: "date",
            type: "date",
            title: "Année",
            options: {
                dateFormat: "Y",
            },
        },
    ],
};
