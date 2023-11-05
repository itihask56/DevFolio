import { defineField,defineType } from "sanity";
export default defineType({
    name:'profile',
    title:'Profile',
    type:'document',
    fields:[
        defineField({
            name:'name',
            title:'Title',
            type:'string',

        }),
        defineField({
            name:'smallBio',
            title:"Name",
            type:'string',
        }),
        defineField({
            name:'profession',
            title:"Profession",
            type:'array',
            of:[{type:'string'}]

        }),
        defineField({
            name:'image',
            title:'Image',
            type:"image",
            options:{
                hotspot:true
            }
        }),
        defineField({
            name:'secondImage',
            title:'Second Image',
            type:"image",
            options:{
                hotspot:true
            }
        }),

        defineField({
            name:'bio',
            title:"Bio",
            type:'array',
            of:[
                {
                    title:'Block',
                    type:'block',
                    styles:[{title:'Normal',value:'normal'}],
                    lists:[],
                }
            ]
        }),
        defineField({
            name:"socials",
            title:'Socials',
            type:'array',
            of:[{type:'reference',to:{type:'social'}}]
        })

    ]
})