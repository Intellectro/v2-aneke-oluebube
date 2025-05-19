import { reactive } from "vue"

const customScrollStyle = () => {
    const customStyled = reactive({
        scrollbarWidth: "thin"
    });

    return {customStyled};
}

export {customScrollStyle};