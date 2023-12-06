import AssignmentList from "./AssignmentList.js";

export default {
    components: {
        AssignmentList: AssignmentList
    },
    template: `
        <section class="space-y-4">
            <AssignmentList title="In Progress" :assignments="filters.inProgress" />
            <AssignmentList title="Completed" :assignments="filters.completed" />
            <form @submit.prevent="add">
                <div class="border border-gray-600 text-black">
                    <input v-model="newAssignment" type="text" placeholder="New Assignment.." class="p-2" />
                    <button type="submit" class="bg-white border-l p-2">Add</button>
                </div>
            </form>
        </section>
    `,
    data() {
        return {
            assignments: [
                { id:1, name: "Finish project", complete: false },
                { id:2, name: "Read chapter", complete: false },
                { id:3, name: "Turn in homework", complete: false },
            ],
            newAssignment: ''
        };
    },

    computed: {
        filters() {
            return {
                inProgress: this.assignments.filter(assignment => !assignment.complete),
                completed: this.assignments.filter(assignment => assignment.complete)
            }
        },
    },

    methods: {
        add() {
            this.assignments.push({
                id: this.assignments.legth + 1,
                name: this.newAssignment,
                complete: false
            });

            this.newAssignment = '';
        }
    }

}