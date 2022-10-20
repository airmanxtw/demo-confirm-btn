<template>
    <v-btn v-bind="$attrs" @click="model=true">
        <v-icon v-if="props.icon!=null">mdi-{{props.icon}}</v-icon>
        {{props.label}}
    </v-btn>
    <v-dialog v-model="model" max-width="500">
        <v-card>
            <v-card-text>
                <slot name="message"></slot>
            </v-card-text>
            <v-card-actions>
                <v-spacer />
                <v-btn color="primary" @click="()=>{model=false;emits('confirm')}">confirm</v-btn>
                <v-btn color="secondary" @click="model=false">cancel</v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>
<script setup>
import { ref } from 'vue';
let model = ref(false);
const emits = defineEmits(['confirm']);
const props = defineProps({
    icon: {
        type: String,
        default: null
    },
    label: {
        type: String,
        default: null
    }
})
</script>