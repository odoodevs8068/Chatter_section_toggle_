/** @odoo-module **/
import { patch } from "@web/core/utils/patch";
import { FormController } from "@web/views/form/form_controller";
import { useService } from "@web/core/utils/hooks";
import { session } from "@web/session";
import { EventBus } from "@odoo/owl";
import { user } from "@web/core/user";
import { onMounted } from "@odoo/owl";


patch(FormController.prototype, {
    setup() {
        super.setup();
        this.actionService = useService("action");
        onMounted(() => {
            setTimeout(() => this.injectOvnButton(), 100);
        });
    },

    injectOvnButton() {
            const formSheet = document.querySelector(".o_form_sheet_bg");
            if (!formSheet) {
                console.warn("❌ .o_form_sheet_bg not found");
                return;
            }
            const wrapper = document.createElement("div");
            wrapper.className = "custom-ovn-wrapper";
            wrapper.style.marginTop = "auto";
            wrapper.style.marginBottom = "auto";


            const ShowBtn = document.createElement("button");
            ShowBtn.className = "btn btn-show-ovn";
            ShowBtn.innerText = "<<<";
            ShowBtn.style.marginLeft = "10px";
            ShowBtn.onclick = () => this.onShowButtonClick();

            const HideBtn = document.createElement("button");
            HideBtn.className = "btn  btn-hide-ovn";
            HideBtn.innerText = ">>>";
            HideBtn.style.marginLeft = "10px";
            HideBtn.onclick = () => this.onHideButtonClick();

            const ChatterContainer = document.querySelector(".o-mail-ChatterContainer");
            if (ChatterContainer){
                wrapper.appendChild(ShowBtn);
                wrapper.appendChild(HideBtn);
                formSheet.parentNode.insertBefore(wrapper, formSheet.nextSibling);
            }
    },
    onShowButtonClick() {
        console.log("✅ Ovn Button Clicked");
        const ChatterContainer = document.querySelector(".o-mail-ChatterContainer");
        const form_sheet_bg = document.querySelector(".o_form_sheet_bg ");
        const HideBtn = document.querySelector(".btn-hide-ovn ");
        const Showbtn = document.querySelector(".btn-show-ovn ");

        if (ChatterContainer) {
            ChatterContainer.setAttribute("style", "display: block !important");
        }
        if (form_sheet_bg) {
            form_sheet_bg.setAttribute("style", " max-width: 1534px !important;");
        }
        if (HideBtn) {
            HideBtn.setAttribute("style", "display: block !important;");
        }
        if (Showbtn) {
            Showbtn.setAttribute("style", "display: none !important;");
        }
    },

    onHideButtonClick() {
        console.log("✅ Ovn Button Clicked");
        const ChatterContainer = document.querySelector(".o-mail-ChatterContainer");
        const form_sheet_bg = document.querySelector(".o_form_sheet_bg ");
        const HideBtn = document.querySelector(".btn-hide-ovn ");
        const Showbtn = document.querySelector(".btn-show-ovn ");

        if (ChatterContainer) {
            ChatterContainer.setAttribute("style", "display: none !important");
        }
        if (form_sheet_bg) {
            form_sheet_bg.setAttribute("style", " max-width: none !important;");
        }
        if (HideBtn) {
            HideBtn.setAttribute("style", "display: none !important;");
        }
        if (Showbtn) {
            Showbtn.setAttribute("style", "display: block !important;");
        }
    },

});