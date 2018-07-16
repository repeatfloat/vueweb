<template>
    <transition name="slideRight">
        <div class="loading">
            <div class="contact">
                        
                    <form method="post">
                        <input type="text" ref='name'/>
                        <input type="text" ref='mobile'/>
                        <input type="text" ref='address'/>
                        <input type="text" ref='content'/>
                        <h3 @click="send">点击提交</h3>
                    </form>

            </div>
        </div>
    </transition>
</template>

<script>
export default {
    methods: {
        send () {
            Qudao51.questionnaire.finish();
            Qudao51.feedback.content({
                name: this.$refs.name.value,
                mobile: this.$refs.mobile.value,
                content: this.$refs.content.value,
                address: this.$refs.address.value
            }).update();
        }
    }
};
</script>
