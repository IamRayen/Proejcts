export default {
    type: "document",
    title: "compétences",
    name: "Competence",
    fields: [
        {
            name: "image",
            type: "image",
            title: "Image du programme",
            options: {
                hotspot: true,
            },
            description: "Si disponible",
        },
        {
            name: "nom",
            type: "string",
            title: "Nom du programme",
            validation: (Rule) => Rule.required(),
        },
        {
            name:"url",
            type:"url",
            title:"Url pour le programme"
        }
    ],
};
