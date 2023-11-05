import { defineField,defineType } from "sanity";
export default defineType({
    name:'post',
    title:'Post',
    type:'document',
    fields:[
        defineField({
            name:'title',
            title:'Title',
            type:'string',

        }),
        defineField({
            name:'slug',
            title:"Slug",
            type:'slug',
            options:{
                source:'title',
                maxLength:96
            }
        }),
        defineField({
            name:'author',
            title:"Author",
            type:'reference',
            to:[{type:'profile'}]

        }),
        defineField({
            name:'mainImage',
            title:'Image',
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
            name:"categories",
            title:'Categories',
            type:'array',
            of:[{type:'reference',to:{type:'category'}}]
        }),
        defineField({
            name:"publishAt",
            title:'Published At',
            type:'datetime',
            
        }),
        defineField({
            name:"body",
            title:'Body',
            type:'blockContent',
            
        }),

    ]
})