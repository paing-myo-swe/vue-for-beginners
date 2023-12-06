import AssignmentList from "./AssignmentList.js";

export default {
    components: {
        AssignmentList: AssignmentList
    },
    template: `
        <section class="space-y-4">
            <AssignmentList title="In Progress" :assignments="filters.inProgress" />
            <AssignmentList title="Completed" :assignments="filters.completed" />
        </section>
    `,
    data() {
        return {
            assignments : [
                { id:1, name: "Finish project", complete: false },
                { id:2, name: "Read chapter", complete: false },
                { id:3, name: "Turn in homework", complete: false },
            ]
        };
    },

    computed: {
        filters() {
            return {
                inProgress: this.assignments.filter(assignment => !assignment.complete),
                completed: this.assignments.filter(assignment => assignment.complete)
            }
        },
    }

}