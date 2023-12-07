export default {
    template: `
        <form @submit.prevent="add">
            <div class="border border-gray-600 text-black">
                <input v-model="newAssignment" type="text" placeholder="New Assignment.." class="p-2" />
                <button type="submit" class="bg-white border-l p-2">Add</button>
            </div>
        </form>
    `,

    data() {
        return {
            newAssignment: ''
        };
    },

    methods: {
        add() {
            this.$emit("add", this.newAssignment);
            this.newAssignment = '';
        }
    },
}