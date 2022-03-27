Vue.createApp({
    data() {
        return {
            electron: process.versions.electron,
            node: process.versions.node,
            chrome: process.versions.chrome

        }
    }
}).mount('#app')