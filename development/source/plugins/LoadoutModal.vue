<!--
@Author: Morgan Andree Ray <DevelDoe>
@Date:   27-04-2018
@Email:  info@andreeray.se
@Filename: DevelModal.vue
@Last modified by:   Morgan Andree Ray
@Last modified time: 31-05-2018
@License: MIT
-->

<template lang="html">
        <div :class="{ 'd-modal-loadout': true, 'd-modal-open': open}">
            <div class="d-modal-content-loadout">
                <header>
                    <span class="d-modal-close" @click="open = false">&times;</span>
                    <slot name="header"></slot>
                </header>
                <section class="d-modal-body-loadout">
                    <div class="viewport">
                        <div class="scroll">
                    <slot name="left" class="left"> </slot>
                        </div>
                    </div>
                    <div class="viewport">
                        <div class="scroll">
                            <slot name="middle" class="middle"> </slot>
                        </div>
                    </div>
                    <div class="viewport">
                        <div class="scroll">
                        <slot name="right" class="right"> </slot>
                    </div>
                </div>
                </section>
                <footer>
                    <slot name="footer" class="box"></slot>
                </footer>
            </div>
        </div>
</template>

<script>
export default {
    name: 'LoadoutModal',
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
    .d-modal-loadout {
        display: none;
        position: fixed;
        left: 0;
        top: 0;
        height: 100%;
        width: 100%;
        z-index: 1;
        overflow: auto;
        background: rgba(0, 0, 0, 0.7) url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAACCAYAAACddGYaAAAAD0lEQVQIW2NkQABjRmQOAAM+AGkQsDBSAAAAAElFTkSuQmCC) repeat;
    }
    .d-modal-open {
        display: block;
    }
    .d-modal-content-loadout {
        background: #1C2022;
        width: 100%;
        height: 100%;
        box-shadow: 0 5px 8px 0 rgba(0,0,0,0.2), 0 7px 20px 0 rgba(0,0,0,0.2);
        animation-name: modal-open;
        animation-duration: .3s;
        margin: auto;
        padding: 20px;
        position: relative;
        input {
            width: 100%;
            background: rgba(255,255,255,0.04);
            padding: 10px;
        }
        input.small {
            width: 20%;
        }
        label {

        }
        textarea {
            position: relative !important;
            font-size: 14px !important;
        }
        footer {
            position: absolute;
            padding: 27px;
            bottom: 0;
            left: 0;
            width: 100%;
            .form-control {
                width: 100%;
                display: flex;
                background: rgba(255,255,255,0.04);
                padding: 5px;
                div {
                    width: 16.66666666%;
                    text-align: center;
                    background: rgba(255,255,255,0.04);
                    padding: 10px;
                    cursor: pointer;
                    &:hover {
                        background: rgba(255, 255, 255, 0.1);
                        color: white;
                    }
                }
            }
        }
    }
    .d-modal-content header {
        padding: 15px;
    }

    .d-modal-body-loadout {
        padding: 10px 20px;
        display: grid;
        grid-template-columns: 33.333% 33.333% 33.333%;
        height: 95%;
        div {
            padding: 5px;
        }
        .viewport {
            position: relative;
            height: 90%;
            .scroll {
                position: absolute;
                overflow: scroll;
                margin-right: -17px;
                margin-bottom: -17px;
            }
        }
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
