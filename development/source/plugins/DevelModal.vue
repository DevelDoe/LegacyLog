<!--
@Author: Morgan Andree Ray <DevelDoe>
@Date:   27-04-2018
@Email:  info@andreeray.se
@Filename: DevelModal.vue
@Last modified by:   Morgan Andree Ray
@Last modified time: 15-05-2018
@License: MIT
-->

<template lang="html">
        <div :class="{ 'd-modal': true, 'd-modal-open': open}">
            <div class="d-modal-content">
                <header>
                    <span class="d-modal-close" @click="open = false">&times;</span>
                    <slot name="header"></slot>
                </header>
                <section class="d-modal-body">
                    <slot name="bread">

                    </slot>
                </section>
                <footer>
                    <slot name="footer"></slot>
                </footer>
            </div>
        </div>
</template>

<script>
export default {
    name: 'DevelModal',
    props: [ 'modal' ],
    data () {
        return {
            open: false
        }
    },
    created () {
        this.$bus.$on('toggleModal', modal => {
            if ( this.modal !== undefined && modal === this.modal ) {
                this.open = !this.open
            }
        })
    }
}
</script>

<style lang="scss">
    .d-modal {
        display: none;
        position: fixed; left: 0; top: 0; height: 100%; width: 100%; z-index: 1; overflow: auto;
        background: rgba(0, 0, 0, 0.7) url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAACCAYAAACddGYaAAAAD0lEQVQIW2NkQABjRmQOAAM+AGkQsDBSAAAAAElFTkSuQmCC) repeat;
    }
    .d-modal-open {
        display: block;
    }
    .d-modal-content {
        background: #1C2022;
        margin: 20% auto;
        width: 70%;
        box-shadow: 0 5px 8px 0 rgba(0,0,0,0.2), 0 7px 20px 0 rgba(0,0,0,0.2);
        animation-name: modal-open;
        animation-duration: .3s;
        input {
            width: 70%
        }
        label {

        }
    }
    .d-modal-content header {
        padding: 15px;

    }

    .d-modal-body {
        padding: 10px 20px;
    }
    .d-modal-content footer {
        padding: 10px;
        text-align: center;
    }
    @keyframes modal-open {
        from { opacity: 0 }
        to { opacity: 1 }
    }
    .d-modal-close {
        color: #ccc;
        float: right;
        font-size: 30px;
    }
    .d-modal-close:hover, .d-modal-close:focus {
        cursor: pointer;
        color: white;
        text-decoration: none;
    }
</style>
