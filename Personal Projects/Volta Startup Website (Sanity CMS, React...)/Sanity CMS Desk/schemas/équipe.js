export default {
    name: "Equipe",
    type: "document",
    title: "equipe",
    fields: [
        {
            name: "image",
            type: "image",
            title: "Photo de profile",
            options: {
                hotspot: true,
            },
            description:"Si disponible"
        },
        {
            name: "nom",
            type: "string",
            title: "Nom et Prenom",
            validation: (Rule) => Rule.required(),
        },
        {
            name: "description",
            type: "text",
            title: "Description",
            rows: 4,
        },
        {
            name: "date",
            type: "date",
            title:"date d'inscription",
            validation:(Rule) => Rule.required()
        },
        {
            name:"linkedIn",
            type:"url",
            title:"linkedIn Account",
            description:"Si disponible"
        },
        {
            name:"facebook",
            type:"url",
            title:"facebook Account",
            description:"Si disponible"
        }
    ],
};
