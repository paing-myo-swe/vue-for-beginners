import Assignment from "./Assignment.js";

export default {
    components: { 
        Assignment : Assignment
    },
    template: `
        <section v-if="assignments.length">
            <h2 class="font-bold mb-2">{{ title }}</h2>
            <ul>
                <Assignment 
                    v-for="assignment in assignments" 
                    :key="assignment.id" 
                    :assignment="assignment" 
                />
            </ul>
        </section>
    `,

    props: {
        title: String,
        assignments: Object
    }

}