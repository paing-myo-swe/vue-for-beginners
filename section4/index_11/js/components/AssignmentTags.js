export default {
    template: `
        <div class="flex gap-2">
            <button 
                v-for="tag in tags" 
                class="border rounded p-1 text-xs"
                :class="{
                    'bg-blue-400': currentTag === tag
                }"
                @click="$emit('change', tag)"
            >
                {{ tag }}</button>
        </div>
    `,

    props: {
        initialTags: Array,
        currentTag: String
    },

    computed: {
        tags() {
            return ['all', ...new Set(this.initialTags)];
        }
    }
}